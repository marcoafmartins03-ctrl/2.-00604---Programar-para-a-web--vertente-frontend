const express = require("express"); // BUSCAR PACOTES DA BIBLIOTECA
const app = express(); // INICIAR O EXPRESS
const PORT = 3000; // PORTA LOCALHOST

app.get("/",(req,res)=>{
    res.send("Olá mundo")
})

app.get("/produtos",(req,res)=>{
    res.send("Aqui vai os produtos")
})

app.get("/carrinho",(req,res)=>{
    res.send("Aqui vai o carrinho")
})

app.get("/pagina",(req,res)=>{
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Minha Página</title>
    </head>
    <body>
      <h1>Bem-vindo!</h1>
      <p>Esta página foi gerada pelo Express.</p>
    </body>
    </html>
  `;
  res.send(html)
})

//ROTA COM JSON
//SEND ENVIAR TXT e HTML
//JSON envia em formato JSON
app.get("/json", (req,res) =>{
 
    const resposta = {
        statusCode: 200,
        messagem: "Dados em JSON"
    }
    
    res.json(resposta)
})
 
// STATUS CODES
app.get("/sucesso", (req, res)=>{
 
    const mensagem = {
        mensagem: "OK"
    }
    
    res.status(200).json(mensagem)
})

//POST - CRIAR ENTRADAS
app.post("/api/users", (req,res)=> {
    
    res.status(201).json({mensagem: "Utilizador foi criado com sucesso"})
})

//MIDDLEWARE NÃO ENCONTRADO
app.use((req,res)=>{
    const mensagem = {
        erro: "Rota não encontrada",
        rota: req.url
    }
    res.status(404).json(mensagem)
})
 

app.listen(PORT, () => {
  console.log(`Servidor está a correr na porta ${PORT}`);
});

