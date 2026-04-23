// ========================================
// 9.7 EXERCICIOS PRATICOS - TREINO JS
// ========================================
// Objetivo: praticar sintaxe e logica JavaScript com desafios curtos.
// Como usar: preenche cada funcao e corre com node 9.7_exercicios_praticos.js
// Cada exercicio tem exemplos e testes automaticos no final.

// ========================================
// EXERCICIO 1: INVERTER STRING
// ========================================
// Dada uma string, devolve a string invertida.
//
// Exemplo:
//   inverterString("ola")    -> "alo"
//   inverterString("abcde")  -> "edcba"
//   inverterString("")        -> ""
//
// Dica: .split("") transforma string em array de caracteres.

function inverterString(texto) {
  // TODO: escreve o teu codigo aqui
}

// ========================================
// EXERCICIO 2: CONTAR VOGAIS
// ========================================
// Dada uma string, conta quantas vogais (a, e, i, o, u) tem.
// Nao distingue maiusculas de minusculas.
//
// Exemplo:
//   contarVogais("javascript")  -> 3
//   contarVogais("HTML")        -> 0
//   contarVogais("AeIoU")       -> 5
//
// Dica: .toLowerCase() e .includes()

function contarVogais(texto) {
  // TODO: escreve o teu codigo aqui
}

// ========================================
// EXERCICIO 3: ENCONTRAR O MAIOR
// ========================================
// Dado um array de numeros, devolve o maior valor.
// Nao usar Math.max().
//
// Exemplo:
//   encontrarMaior([3, 7, 2, 9, 1])  -> 9
//   encontrarMaior([10])              -> 10
//   encontrarMaior([-5, -2, -8])      -> -2
//
// Dica: comecar com o primeiro elemento e comparar com os restantes.

function encontrarMaior(numeros) {
  // TODO: escreve o teu codigo aqui
}

// ========================================
// EXERCICIO 4: FIZZBUZZ
// ========================================
// Dado um numero n, devolve um array com os valores de 1 ate n onde:
//  - Multiplos de 3 -> "Fizz"
//  - Multiplos de 5 -> "Buzz"
//  - Multiplos de 3 E 5 -> "FizzBuzz"
//  - Outros -> o proprio numero (como string)
//
// Exemplo:
//   fizzBuzz(5)  -> ["1", "2", "Fizz", "4", "Buzz"]
//   fizzBuzz(15) -> ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
//
// Dica: usar o operador % (modulo) para verificar divisibilidade.

function fizzBuzz(n) {
  // TODO: escreve o teu codigo aqui
}

// ========================================
// EXERCICIO 5: REMOVER DUPLICADOS
// ========================================
// Dado um array, devolve um novo array sem elementos repetidos.
//
// Exemplo:
//   removerDuplicados([1, 2, 2, 3, 3, 3])        -> [1, 2, 3]
//   removerDuplicados(["a", "b", "a", "c", "b"])  -> ["a", "b", "c"]
//   removerDuplicados([1])                         -> [1]
//
// Dica: new Set() remove duplicados automaticamente,
//       ou usar .includes() com um loop.

function removerDuplicados(array) {
  // TODO: escreve o teu codigo aqui
}

// ========================================
// EXERCICIO 6: CAPITALIZAR PALAVRAS
// ========================================
// Dada uma frase, coloca a primeira letra de cada palavra em maiuscula.
//
// Exemplo:
//   capitalizar("ola mundo")            -> "Ola Mundo"
//   capitalizar("javascript e fixe")    -> "Javascript E Fixe"
//   capitalizar("a")                    -> "A"
//
// Dica: .split(" ") para separar palavras, depois .toUpperCase()
//       na primeira letra e .slice(1) para o resto.

function capitalizar(frase) {
  // TODO: escreve o teu codigo aqui
}

// ========================================
// EXERCICIO 7: SOMA DE PARES
// ========================================
// Dado um array de numeros, devolve a soma de todos os numeros pares.
//
// Exemplo:
//   somaPares([1, 2, 3, 4, 5, 6])  -> 12  (2 + 4 + 6)
//   somaPares([1, 3, 5])            -> 0
//   somaPares([10, 20, 30])         -> 60
//
// Dica: usar .filter() para selecionar pares (n % 2 === 0)
//       e .reduce() para somar.

function somaPares(numeros) {
  // TODO: escreve o teu codigo aqui
}

// ========================================
// EXERCICIO 8: PALINDROMO
// ========================================
// Verifica se uma string e um palindromo (le-se igual de tras para a frente).
// Ignora maiusculas/minusculas e espacos.
//
// Exemplo:
//   ePalindromo("ana")          -> true
//   ePalindromo("Aba")          -> true
//   ePalindromo("ola")          -> false
//   ePalindromo("A man a plan")  -> false
//
// Dica: limpar a string (.toLowerCase(), .replace), depois comparar
//       com a versao invertida.

function ePalindromo(texto) {
  // TODO: escreve o teu codigo aqui
}

// ========================================
// EXERCICIO 9: AGRUPAR POR PROPRIEDADE
// ========================================
// Dado um array de objetos e o nome de uma propriedade,
// agrupa os objetos por essa propriedade.
//
// Exemplo:
//   const alunos = [
//     { nome: "Ana", turma: "A" },
//     { nome: "Rui", turma: "B" },
//     { nome: "Maria", turma: "A" },
//     { nome: "Carlos", turma: "B" },
//   ];
//   agruparPor(alunos, "turma")
//   -> { A: [{nome:"Ana",...}, {nome:"Maria",...}], B: [{nome:"Rui",...}, {nome:"Carlos",...}] }
//
// Dica: criar um objeto vazio e usar um loop. Para cada item,
//       verificar se a chave ja existe; se nao, criar um array.

function agruparPor(array, propriedade) {
  // TODO: escreve o teu codigo aqui
}

// ========================================
// EXERCICIO 10: ACHATAR ARRAY
// ========================================
// Dado um array que contem arrays dentro (1 nivel), devolve
// um unico array com todos os elementos.
// Nao usar .flat().
//
// Exemplo:
//   achatar([[1, 2], [3, 4], [5]])  -> [1, 2, 3, 4, 5]
//   achatar([["a"], ["b", "c"]])    -> ["a", "b", "c"]
//   achatar([[1]])                  -> [1]
//
// Dica: usar .reduce() com .concat() ou spread operator (...).

function achatar(arrays) {
  // TODO: escreve o teu codigo aqui
}

// ========================================
// TESTES AUTOMATICOS
// ========================================
// Nao alterar esta secao! Corre o ficheiro para ver os resultados.

function testar(nome, funcao, casos) {
  console.log(`\n--- ${nome} ---`);
  let acertos = 0;
  for (const caso of casos) {
    const resultado = funcao(...caso.args);
    const esperado = caso.esperado;
    const resultadoStr = JSON.stringify(resultado);
    const esperadoStr = JSON.stringify(esperado);
    const passou = resultadoStr === esperadoStr;
    if (passou) acertos++;
    console.log(
      `  ${passou ? "PASS" : "FAIL"} | ${caso.desc}` +
        (passou ? "" : ` | Esperado: ${esperadoStr} | Resultado: ${resultadoStr}`)
    );
  }
  console.log(`  Resultado: ${acertos}/${casos.length}`);
}

testar("1. Inverter String", inverterString, [
  { args: ["ola"], esperado: "alo", desc: 'inverterString("ola") -> "alo"' },
  { args: ["abcde"], esperado: "edcba", desc: 'inverterString("abcde") -> "edcba"' },
  { args: [""], esperado: "", desc: 'inverterString("") -> ""' },
  { args: ["a"], esperado: "a", desc: 'inverterString("a") -> "a"' },
]);

testar("2. Contar Vogais", contarVogais, [
  { args: ["javascript"], esperado: 3, desc: 'contarVogais("javascript") -> 3' },
  { args: ["HTML"], esperado: 0, desc: 'contarVogais("HTML") -> 0' },
  { args: ["AeIoU"], esperado: 5, desc: 'contarVogais("AeIoU") -> 5' },
  { args: [""], esperado: 0, desc: 'contarVogais("") -> 0' },
]);

testar("3. Encontrar Maior", encontrarMaior, [
  { args: [[3, 7, 2, 9, 1]], esperado: 9, desc: "[3,7,2,9,1] -> 9" },
  { args: [[10]], esperado: 10, desc: "[10] -> 10" },
  { args: [[-5, -2, -8]], esperado: -2, desc: "[-5,-2,-8] -> -2" },
]);

testar("4. FizzBuzz", fizzBuzz, [
  { args: [5], esperado: ["1", "2", "Fizz", "4", "Buzz"], desc: "fizzBuzz(5)" },
  {
    args: [15],
    esperado: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"],
    desc: "fizzBuzz(15)",
  },
]);

testar("5. Remover Duplicados", removerDuplicados, [
  { args: [[1, 2, 2, 3, 3, 3]], esperado: [1, 2, 3], desc: "[1,2,2,3,3,3] -> [1,2,3]" },
  { args: [["a", "b", "a", "c", "b"]], esperado: ["a", "b", "c"], desc: '["a","b","a","c","b"]' },
  { args: [[1]], esperado: [1], desc: "[1] -> [1]" },
]);

testar("6. Capitalizar Palavras", capitalizar, [
  { args: ["ola mundo"], esperado: "Ola Mundo", desc: '"ola mundo" -> "Ola Mundo"' },
  { args: ["javascript e fixe"], esperado: "Javascript E Fixe", desc: '"javascript e fixe"' },
  { args: ["a"], esperado: "A", desc: '"a" -> "A"' },
]);

testar("7. Soma de Pares", somaPares, [
  { args: [[1, 2, 3, 4, 5, 6]], esperado: 12, desc: "[1,2,3,4,5,6] -> 12" },
  { args: [[1, 3, 5]], esperado: 0, desc: "[1,3,5] -> 0" },
  { args: [[10, 20, 30]], esperado: 60, desc: "[10,20,30] -> 60" },
]);

testar("8. Palindromo", ePalindromo, [
  { args: ["ana"], esperado: true, desc: '"ana" -> true' },
  { args: ["Aba"], esperado: true, desc: '"Aba" -> true' },
  { args: ["ola"], esperado: false, desc: '"ola" -> false' },
]);

testar("9. Agrupar por Propriedade", agruparPor, [
  {
    args: [
      [
        { nome: "Ana", turma: "A" },
        { nome: "Rui", turma: "B" },
        { nome: "Maria", turma: "A" },
      ],
      "turma",
    ],
    esperado: {
      A: [{ nome: "Ana", turma: "A" }, { nome: "Maria", turma: "A" }],
      B: [{ nome: "Rui", turma: "B" }],
    },
    desc: "agrupar alunos por turma",
  },
]);

testar("10. Achatar Array", achatar, [
  { args: [[[1, 2], [3, 4], [5]]], esperado: [1, 2, 3, 4, 5], desc: "[[1,2],[3,4],[5]] -> [1..5]" },
  { args: [[["a"], ["b", "c"]]], esperado: ["a", "b", "c"], desc: '[["a"],["b","c"]]' },
]);
