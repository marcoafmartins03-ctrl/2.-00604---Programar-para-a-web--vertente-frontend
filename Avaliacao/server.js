// ============================================================
// Avaliacao Final - API REST de Catalogo de Filmes e Series
// ============================================================
//
// Implementa este servidor do zero usando:
//
// - express
// - dotenv
// - mysql2/promise
//
// A base de dados, a tabela e os dados iniciais devem ser criados
// no MySQL Workbench com o ficheiro database.sql.
//
// Rotas obrigatorias:
//
// GET    /api/estado
// GET    /api/filmes
// GET    /api/filmes/:id
// POST   /api/filmes
// PUT    /api/filmes/:id
// PATCH  /api/filmes/:id/visto
// DELETE /api/filmes/:id
//
// Testa tudo no Postman, Thunder Client ou Bruno.

require("dotenv").config();

const express = require("express");
const mysql = require("mysql2/promise");

const app = express();

app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
});

const generosValidos = [
  "acao",
  "comedia",
  "drama",
  "terror",
  "ficcao",
  "documentario",
  "animacao",
  "outro"
];

function validarFilme(dados) {
  const { titulo, realizador, genero, ano, tipo, avaliacao } = dados;

  const anoAtual = new Date().getFullYear();

  if (!titulo || titulo.trim().length < 2) {
    return "Titulo deve ter pelo menos 2 caracteres";
  }

  if (!realizador || !realizador.trim()) {
    return "Realizador obrigatorio";
  }

  if (!generosValidos.includes(genero)) {
    return "Genero invalido";
  }

  if (!ano || ano < 1900 || ano > anoAtual) {
    return "Ano invalido";
  }

  if (!["filme", "serie"].includes(tipo)) {
    return "Tipo invalido";
  }

  if (
    avaliacao !== null &&
    avaliacao !== undefined &&
    (avaliacao < 1 || avaliacao > 5)
  ) {
    return "Avaliacao deve estar entre 1 e 5";
  }

  return null;
}

app.get("/api/estado", (req, res) => {
  res.json({
    mensagem: "API ativa"
  });
});

app.get("/api/filmes", async (req, res) => {
  try {
    const [filmes] = await pool.query(
      "SELECT * FROM filmes"
    );

    res.json(filmes);
  } catch (erro) {
    res.status(500).json({
      erro: "Erro interno"
    });
  }
});

app.get("/api/filmes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const [filmes] = await pool.query(
      "SELECT * FROM filmes WHERE id = ?",
      [id]
    );

    if (filmes.length === 0) {
      return res.status(404).json({
        erro: "Filme nao encontrado"
      });
    }

    res.json(filmes[0]);

  } catch (erro) {
    res.status(500).json({
      erro: "Erro interno"
    });
  }
});

app.post("/api/filmes", async (req, res) => {
  try {
    const erroValidacao = validarFilme(req.body);

    if (erroValidacao) {
      return res.status(400).json({
        erro: erroValidacao
      });
    }

    const {
      titulo,
      realizador,
      genero,
      ano,
      tipo,
      avaliacao,
      visto = false
    } = req.body;

    const [resultado] = await pool.query(
      `INSERT INTO filmes
      (titulo, realizador, genero, ano, tipo, avaliacao, visto)
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        titulo,
        realizador,
        genero,
        ano,
        tipo,
        avaliacao ?? null,
        visto
      ]
    );

    const [novoFilme] = await pool.query(
      "SELECT * FROM filmes WHERE id = ?",
      [resultado.insertId]
    );

    res.status(201).json(novoFilme[0]);

  } catch (erro) {
    res.status(500).json({
      erro: "Erro interno"
    });
  }
});

app.put("/api/filmes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const [filme] = await pool.query(
      "SELECT * FROM filmes WHERE id = ?",
      [id]
    );

    if (filme.length === 0) {
      return res.status(404).json({
        erro: "Filme nao encontrado"
      });
    }

    const erroValidacao = validarFilme(req.body);

    if (erroValidacao) {
      return res.status(400).json({
        erro: erroValidacao
      });
    }

    const {
      titulo,
      realizador,
      genero,
      ano,
      tipo,
      avaliacao,
      visto = false
    } = req.body;

    await pool.query(
      `UPDATE filmes
      SET titulo = ?,
          realizador = ?,
          genero = ?,
          ano = ?,
          tipo = ?,
          avaliacao = ?,
          visto = ?
      WHERE id = ?`,
      [
        titulo,
        realizador,
        genero,
        ano,
        tipo,
        avaliacao ?? null,
        visto,
        id
      ]
    );

    const [filmeAtualizado] = await pool.query(
      "SELECT * FROM filmes WHERE id = ?",
      [id]
    );

    res.json(filmeAtualizado[0]);

  } catch (erro) {
    res.status(500).json({
      erro: "Erro interno"
    });
  }
});

app.patch("/api/filmes/:id/visto", async (req, res) => {
  try {
    const { id } = req.params;

    const [filme] = await pool.query(
      "SELECT * FROM filmes WHERE id = ?",
      [id]
    );

    if (filme.length === 0) {
      return res.status(404).json({
        erro: "Filme nao encontrado"
      });
    }

    const novoEstado = !filme[0].visto;

    await pool.query(
      "UPDATE filmes SET visto = ? WHERE id = ?",
      [novoEstado, id]
    );

    const [atualizado] = await pool.query(
      "SELECT * FROM filmes WHERE id = ?",
      [id]
    );

    res.json(atualizado[0]);

  } catch (erro) {
    res.status(500).json({
      erro: "Erro interno"
    });
  }
});

app.delete("/api/filmes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const [filme] = await pool.query(
      "SELECT * FROM filmes WHERE id = ?",
      [id]
    );

    if (filme.length === 0) {
      return res.status(404).json({
        erro: "Filme nao encontrado"
      });
    }

    await pool.query(
      "DELETE FROM filmes WHERE id = ?",
      [id]
    );

    res.status(204).send();

  } catch (erro) {
    res.status(500).json({
      erro: "Erro interno"
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor ativo na porta ${PORT}`);
});