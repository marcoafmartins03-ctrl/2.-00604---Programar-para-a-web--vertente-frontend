// SERVIDOR HTTP COM NODEJS

const http = require("http");

const server = http.createServer((req, res) => {
  // req = request do cliente
  // res = response do servidor

// 1. html
/* const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Meu Servidor</title>
    </head>
    <body>
      <h1>Bem-vindo ao meu servidor Node.js!</h1>
      <p>Este HTML foi gerado pelo servidor.</p>
    </body>
    </html>
  `;

    res.end(html);
*/

// 2.
// Rota inicial
  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;

    res.end(
      JSON.stringify({
        mensagem: "Página Inicial"
      })
    );

    // Rota /sobre
  } else if (req.url === "/sobre" && req.method === "GET") {
    const mensagem = {
      mensagem: "Sobre nós",
      versao: "1.0.0"
    };

    res.statusCode = 200;

    res.end(JSON.stringify(mensagem));

    // Rota não encontrada
  } else {
    res.statusCode = 404;

    res.end(
      JSON.stringify({
        error: "Rota não encontrada",
        url: req.url
      })
    );
  }
});

// Iniciar servidor
server.listen(3000, () => {
  console.log("Servidor está a correr na porta 3000");
});

// dentro da pasta servidor, tem quer aparecer "package.json"
// cd Aulas
// cd servidor
//npm init -y