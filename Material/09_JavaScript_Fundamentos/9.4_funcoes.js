// ========================================
// 9.4 FUNCOES
// ========================================
// Objetivo: encapsular logica reutilizavel com parametros e retorno.

// Declaracao de funcao classica.
function somar(a, b) {
  // Calcula o resultado da soma.
  const resultado = a + b;
  // Devolve o valor para quem chamou a funcao.
  return resultado;
}

// Chamada da funcao com dois argumentos.
const total = somar(10, 5);
console.log("Total:", total);

// Funcao com validacao simples.
function calcularDesconto(preco, percentagem) {
  // Garante que a percentagem esta no intervalo aceitavel.
  if (percentagem < 0 || percentagem > 100) {
    return "Percentagem invalida";
  }

  // Converte percentagem para valor decimal.
  const taxa = percentagem / 100;
  // Calcula valor final.
  const precoComDesconto = preco - preco * taxa;
  // Devolve preco final.
  return precoComDesconto;
}

console.log("Preco final:", calcularDesconto(80, 25));

// Arrow function (sintaxe curta).
const multiplicar = (x, y) => x * y;
console.log("Multiplicacao:", multiplicar(4, 3));

// Funcao que recebe um array e devolve a media.
function mediaNotas(notas) {
  // Se o array estiver vazio, devolve 0 para evitar divisao por zero.
  if (notas.length === 0) {
    return 0;
  }

  // Acumula todas as notas.
  let soma = 0;
  for (let i = 0; i < notas.length; i += 1) {
    soma += notas[i];
  }

  // Devolve a media aritmetica.
  return soma / notas.length;
}

console.log("Media:", mediaNotas([12, 15, 17, 14]));
