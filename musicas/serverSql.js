// Le o ficheiro .env e coloca as variaveis em process.env
require("dotenv").config()
// bibliotecas
const express = require("express")
const app = express()
const mysql = require("mysql2/promise")
const PORT = 3000
 
// Pool = "Conjunto de ligações" ao MySQL já abertas e prontas a usar.
const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT || 3306),
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
})
 
// Le JSON enviado no body do pedido e coloca em req.body.
// Sem isto, req.body fica undefined em POST/PUT.
app.use(express.json())
 
 
// MIDDLEWARE
// Um middleware e uma funcao que corre ENTRE o pedido e a rota.
//
//   pedido --> middleware 1 --> middleware 2 --> rota --> resposta
//
// Forma de um middleware:
//
//   function nome(req, res, next) {
//     // ... fazer alguma coisa ...
//     next();   // continua para o proximo passo
//   }
//
// Regra: ou chamamos next() para continuar,
//        ou respondemos com res.json(...) e paramos aqui.
 
const generosValidos = ["pop", "rock", "hip-hop", "eletronico", "jazz", "classico", "outro"]
function validarMusica(req, res, next) {
 
    const {titulo, artista, genero, ano} = req.body
 
    const tituloLimpo = String(titulo).trim()
    const artistaLimpo = String(artista).trim()
    const generoLimpo = String(genero).trim().toLowerCase()
    const anoAtual = new Date().getFullYear()
    const erros = []
 
    if (tituloLimpo.length < 2 || tituloLimpo.length > 200){
        erros.push("Título obrigatório (entre 2 e 200 caracteres)")
    }
    if (artistaLimpo.length === 0 || artistaLimpo.length > 200){
        erros.push("Artista obrigatório (entre 1 e 200 caracteres)")
    }
    if (!generosValidos.includes(generoLimpo)){
        erros.push("Genero invalido")
    }
    if( ano > anoAtual){
        erros.push("Ano não pode ser maior que o ano atual")
    }
 
    if(erros.length >0){
        return res.status(400).json({erros})
    }
 
    req.body = {
        titulo: tituloLimpo,
        artista: artistaLimpo,
        genero: generoLimpo,
        ano,
    }
 
    next()
}
 
 
 
 
 
 
 
 
 
 
 
app.get("/", (req,res)=>{
    res.status(200).json({mensagem: "Página principal"})
})
 
// ROTA 1 - GET ALL MUSICAS
 
app.get("/api/musicas", async (req,res)=>{
    const query = "SELECT * FROM musica "
 
    const [linhas] = await pool.execute(query)
    console.log(linhas)
 
    res.json(linhas)
})
 
// ROTA 2 - GET 1 MÚSICA
 
app.get("/api/musicas/:id", async (req,res)=>{
    const id = req.params.id
    const query = "SELECT * FROM musica WHERE id = ?"
    const [linhas] = await pool.execute(query, [id])
    if (linhas.length === 0){
        return res.status(404).json({mensagem:"Esta música não existe"})
    }
 
    res.json(linhas)
})
 
// CRIAR UMA MÚSICA NOVA - POST
 
app.post("/api/musicas", validarMusica, async (req,res)=>{
    // Desconstruir o body - criar variáveis para amazenar os valores que estão no req.body
    const { titulo, artista, genero, ano } = req.body
 
    const query = "INSERT INTO musica (titulo, artista, genero, ano) VALUES (?,?,?,?)"
 
    const [resultado] = await pool.execute(query, [titulo, artista, genero, ano])
 
 
 
    res.status(201).json({mensagem: "Música criada com sucesso"})
})
 
// ATUALIZAR uma música
// PUT / PATCH
 
app.put("/api/musicas/:id",validarMusica, async (req,res)=>{
    // EXTRAIR O ID DO REQ.PARAMS
    const id = Number(req.params.id)
    // QUERY PARA VERIFICAR SE EXISTE A MÚSICA COM O ID
    const query = "SELECT * FROM musica WHERE id = ?"
    const [linhas] = await pool.execute(query, [id])
    // MÚSICA NÃO EXISTIR TEMOS UM ERRO
    if (linhas.length === 0){
        return res.status(404).json({mensagem:"Esta música não existe"})
    }
    // Desconstruir o body - criar variáveis para amazenar os valores que estão no req.body
    const { titulo, artista, genero, ano } = req.body
    // Query para atualizar entrada
    const query2 = "UPDATE musica SET titulo = ?, artista = ?, genero = ?, ano = ? WHERE id = ?"
    const [linhas2] = await pool.execute(query2, [titulo,artista, genero, ano, id])
 
 
    res.status(200).json({mensagem: "Música Alterada com sucesso", dados: linhas2})
})
 
// ELIMINAR uma música
// DELETE
app.delete("/api/musicas/:id", async (req,res)=>{
    // EXTRAIR O ID DO REQ.PARAMS
    const id = Number(req.params.id)
    // QUERY PARA VERIFICAR SE EXISTE A MÚSICA COM O ID
    const query = "SELECT * FROM musica WHERE id = ?"
    const [linhas] = await pool.execute(query, [id])
    // MÚSICA NÃO EXISTIR TEMOS UM ERRO
    if (linhas.length === 0){
        return res.status(404).json({mensagem:"Esta música não existe"})
    }
    
    // Query para Eliminar a entrada
    const query2 = "DELETE FROM musica WHERE id = ?"
    const [linhas2] = await pool.execute(query2, [id])
 
 
 
    res.status(200).json({mensagem: "Música Eliminada com sucesso"})
})
// ------------------------------------------------------------
// ROTA 404
// ------------------------------------------------------------
//
// Esta rota fica depois de todas as outras.
// Se o pedido chegou aqui, e porque nenhuma rota anterior correspondeu.
 
app.use((req,res)=>{
    res.status(404).json({erro: "Rota não foi encontrada!", rota: req.url})
})
// ------------------------------------------------------------
// ERROR HANDLER GLOBAL
// ------------------------------------------------------------
//
// E um middleware especial com 4 parametros: (erro, req, res, next).
// O Express usa este sempre que uma rota async deita um erro.
// Assim nao precisamos de try/catch em cada rota.
app.use((erro, req, res, next) =>{
    console.log("Erro", erro.message)
    res.status(500).json({erro: "Erro no servidor"})
})
 
 
app.listen(PORT, async ()=>{
    console.log(`servidor a rolar na porta ${PORT}`)
 
    try {
        await pool.execute("SELECT 1")
        console.log("Ligada à base de dados mysql")
    } catch(erro) {
        console.log("Erro na ligação ao servidor SQL:", erro.message)
    }
    
})
 