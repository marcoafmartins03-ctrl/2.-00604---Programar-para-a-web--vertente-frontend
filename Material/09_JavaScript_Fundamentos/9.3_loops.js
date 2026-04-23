// ========================================
// 9.3 LOOPS
// ========================================
// Objetivo: repetir instrucoes com for, while e do...while.

// "for" e usado quando sabemos quantas iteracoes queremos.
for (let numero = 1; numero <= 5; numero += 1) {
  // Cada iteracao mostra o valor atual de "numero".
  console.log("Numero atual:", numero);
}

// Array de exemplo para percorrer com for.
const produtos = ["Portatil", "Rato", "Teclado"];
for (let indice = 0; indice < produtos.length; indice += 1) {
  // Acedemos ao elemento atual pelo indice.
  console.log(`Produto ${indice + 1}: ${produtos[indice]}`);
}

// "while" repete enquanto a condicao for verdadeira.
let tentativas = 0;
while (tentativas < 3) {
  // Regista o numero da tentativa atual.
  console.log("Tentativa:", tentativas + 1);
  // Atualiza o contador para aproximar da condicao de paragem.
  tentativas += 1;
}

// "do...while" executa pelo menos uma vez antes de validar a condicao.
let pagina = 1;
do {
  console.log("Carregar pagina:", pagina);
  pagina += 1;
} while (pagina <= 2);

// "break" interrompe o loop imediatamente.
for (let i = 1; i <= 10; i += 1) {
  if (i === 4) {
    console.log("Parar no valor", i);
    break;
  }
}

// "continue" salta apenas a iteracao atual.
for (let i = 1; i <= 5; i += 1) {
  if (i === 3) {
    continue;
  }
  console.log("Valor processado:", i);
}
