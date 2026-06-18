const express = require("express")
const app = express()
const PORT = 3000
 
app.use(express.json())
 
const marcacoes = [
    { id: 1, cliente: "Ana Silva", servico: "Consulta", data: "2026-03-01", hora: "09:00" },
    { id: 2, cliente: "Bruno Costa", servico: "Exame", data: "2026-03-01", hora: "10:00" },
    { id: 3, cliente: "Carla Dias", servico: "Revisao", data: "2026-03-02", hora: "11:00" },
  ];
 
 
 
app.get('/', (req, res)=>{
 
    const mensagem = {mensagem: "welcome to the jungle"}
 
    res.json(mensagem)
})
 
 
// TODAS AS MARCAÇÕES
app.get("/api/marcacoes",(req,res)=>{
 
    res.status(200).json(marcacoes)
})
 
//MARCAÇÃO INDIVIDUAL
app.get("/api/marcacao/:id", (req,res)=>{
 
    const id = Number(req.params.id)
    const marcacao = marcacoes.find(m => m.id === id)
    console.log(marcacao)
    if(!marcacao){
        res.status(404).json({mensagem:"Marcação não existente"})
    }
 
    res.status(200).json(marcacao)
})
 
// CRIAR NOVA MARCAÇÃO
app.post("/api/marcacoes", (req, res)=>{
 
    console.log(req.body)
 
const { cliente, servico, data, hora } = req.body;
 
 
 
if (!cliente || !servico || !data || !hora){
    return res.status(400).json({erro: "Faltam campos obrigatórios"})
}
 
console.log(cliente, servico, data, hora)
 
const novaMarcacao = {
    id: marcacoes.length+1,
    cliente: cliente,
    servico: servico,
    data: data,
    hora: hora
}
 
marcacoes.push(novaMarcacao)
 
 
res.status(201).json({mensagem: "Nova marcação criada com sucesso", dados: novaMarcacao })
})
 
 
// ALTERAR UMA MARCAÇÃO
 
app.put("/api/marcacoes/:id", (req,res)=>{
    //EXTRAIR ID DOS PARAMS DO PEDIDO(REQUEST)
    const id = Number(req.params.id)
     //EXTRAIR DADOS DO BODY DO PEDIDO (REQUEST)
     const { cliente, servico, data, hora } = req.body;
    // VERIFICAR SE A MARCAÇÃO EXISTE NA BASE  DE DADOS     
    const marcacao = marcacoes.find( m => m.id === id)
 
    // enviar erro se não existir na BD
    if (!marcacao){
        return res.status(404).json({erro: "Marcação não encontrada"})
    }
 
    // ATUALIZAR OS CAMPOS (SE ENVIADOS NO BODY)
    // O || (OU) MANTEM O VALOR ORIGINAL SE O NOVO FOR UNDEFINED/VAZIO
    marcacao.cliente = cliente || marcacao.cliente
    marcacao.servico = servico ? servico : marcacao.servico
    marcacao.data = data || marcacao.data
    marcacao.hora = hora || marcacao.hora
 
    res.status(200).json({mensagem:"Marcação Atualizada com sucesso", dados: marcacao})
}) 
 
 
 
//DELETE
 
app.delete("/api/marcacoes/:id", (req, res)=> {
    //EXTRAIR ID DOS PARAMS DO PEDIDO(REQUEST)
    const id = Number(req.params.id)
 
    //ENCONTRAR O INDICE DO ID NO ARRAY
    const indice = marcacoes.findIndex(m => m.id === id)
    console.log(indice)
    // se o indice não existir enviar erro
    if(indice === -1) {
        return res.status(404).json({erro: "Marcação não encontrada"})
    }
 
        // splice remove 1 elemento após o indice passado
    marcacoes.splice(indice, 1)
// ENVIA MENSAGEM DE SUCESSO
res.status(204).json({mensagem:"Marcação eliminada com sucesso"})
})
 
 
 
 
app.listen(PORT, ()=> {
    console.log(`O servidor está a rolar na porta ${PORT}`)
})
 