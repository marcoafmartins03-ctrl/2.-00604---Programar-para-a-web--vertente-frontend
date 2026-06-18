const fs = require("fs");
const path = require("path");

// PASSO 1 - caminho do ficheiro
const caminho = path.join(__dirname, "produtos.json");

// PASSO 2 - ler ficheiro
const dados = fs.readFileSync(caminho, "utf-8");

// PASSO 3 - converter JSON em objeto
const produtos = JSON.parse(dados);

// PASSO 4 - filtrar produtos sem stock
const semStock = produtos.filter(produto => {
  return produto.stock === 0;
});

// PASSO 5 - criar resposta
const resposta = {
  status: 200,

  headers: {},

  body: {
    sucesso: true,
    mensagem: "Produtos sem stock encontrados",
    total: produtosZero.length,
    dados: produtosZero
  }
};

// console.log(resposta);

// FRONTEND - CLIENTE
// ACEDER AOS PRODUTOS DA RESPOSTA

const produtoCliente = resposta.body.dados;

console.log(produtoCliente);