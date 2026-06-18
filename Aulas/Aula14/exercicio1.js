// OBJETO

const utilizador = {
  id: 1,
  nome: "Marco",
  email: "marco@gmail.com",
  idade: 23,
  masculino: true
};


// PARTE 1 - OBJETO => STRING (JSON) STRINGIFY


const utilizadorJSON = JSON.stringify(utilizador);

console.log("Objeto:", utilizador)
console.log("JSON:", utilizadorJSON)
console.log("JSON:", typeof utilizadorJSON)

// PARTE 2 - RECEBEMOS O JSON STRING => OBJ. PARSING

const jsonRecebido = '{"id":1, "nome":"Marco", "email":"marcoa@gmail.com", "idade":23, "masculino":true}';

const objetoRecebido = JSON.parse(jsonRecebido);

console.log("JSON recebido:", jsonRecebido);
console.log("objeto parsado:", objetoRecebido);
