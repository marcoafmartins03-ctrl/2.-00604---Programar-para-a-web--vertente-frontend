const fs = require("fs")
const path = require("path")
 
const caminho = path.join(__dirname,"agenda.json")
console.log(caminho)

const marcacoes = [
    { id: 1, cliente: "Ana Silva", servico: "Consulta", preco: 50 },
    { id: 2, cliente: "Bruno Costa", servico: "Exame", preco: 80 },
    { id: 3, cliente: "Carla Dias", servico: "Revisao", preco: 30 },
  ];

const marcacoesJSON = JSON.stringify(marcacoes)

fs.writeFileSync(caminho, marcacoesJSON)