// ========================================
// 9.2 CONDICIONAIS
// ========================================
// Objetivo: tomar decisoes no codigo com if/else e switch.

// Valor de entrada para as regras de negocio.
const idade = 17;

// "if" executa o bloco apenas se a condicao for verdadeira.
if (idade >= 18) {
  // Este bloco corre apenas para maiores de idade.
  console.log("Pode concluir o registo sem autorizacao.");
} else {
  // Este bloco corre quando a condicao do if e falsa.
  console.log("Precisa de autorizacao do encarregado.");
}

// Exemplo com varias condicoes encadeadas.
const classificacao = 14;
if (classificacao >= 18) {
  console.log("Excelente");
} else if (classificacao >= 14) {
  console.log("Bom");
} else if (classificacao >= 10) {
  console.log("Suficiente");
} else {
  console.log("Insuficiente");
}

// Operadores logicos: && (E), || (OU), ! (NAO).
const temEmailValido = true;
const aceitouTermos = true;
if (temEmailValido && aceitouTermos) {
  console.log("Formulario valido para submeter.");
}

// "switch" e util quando temos varias opcoes discretas.
const metodoPagamento = "mbway";
switch (metodoPagamento) {
  case "cartao":
    console.log("Pagamento com cartao selecionado.");
    break;
  case "mbway":
    console.log("Pagamento com MB WAY selecionado.");
    break;
  case "transferencia":
    console.log("Pagamento por transferencia selecionado.");
    break;
  default:
    console.log("Metodo de pagamento invalido.");
}
