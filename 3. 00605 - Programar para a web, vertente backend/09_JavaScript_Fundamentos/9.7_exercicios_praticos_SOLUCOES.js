// ========================================
// 9.7 EXERCICIOS PRATICOS - SOLUCOES
// ========================================
// Ficheiro com todas as solucoes resolvidas e explicadas.
// Corre com: node 9.7_exercicios_praticos_SOLUCOES.js

// ========================================
// EXERCICIO 1: INVERTER STRING
// ========================================
// Objetivo: receber "ola" e devolver "alo".
// Estrategia: transformar a string em array, inverter, juntar de volta.

function inverterString(texto) {
  // Passo a passo do que acontece com "ola":
  //
  // texto.split("")    -> ["o", "l", "a"]
  //   .split("") parte a string em caracteres individuais.
  //   O argumento "" (string vazia) significa: corta entre cada caracter.
  //   Se fosse .split(" ") cortava por espacos. .split(",") por virgulas.
  //
  // .reverse()         -> ["a", "l", "o"]
  //   .reverse() inverte a ORDEM dos elementos do array.
  //   ATENCAO: so funciona em arrays, nao em strings!
  //   Por isso precisamos de .split("") primeiro.
  //
  // .join("")           -> "alo"
  //   .join("") junta todos os elementos do array numa unica string.
  //   O argumento "" significa: junta SEM separador.
  //   Se fosse .join("-") dava "a-l-o". Se fosse .join(" ") dava "a l o".

  return texto.split("").reverse().join("");
}

// ========================================
// EXERCICIO 2: CONTAR VOGAIS
// ========================================
// Objetivo: contar quantas vogais existem numa string.
// Estrategia: percorrer cada letra e verificar se e vogal.

function contarVogais(texto) {
  const vogais = "aeiou";  // String com todas as vogais (minusculas)
  let contador = 0;        // let porque o valor vai mudar (incrementar)

  // for...of percorre cada CARACTER da string, um a um.
  // E diferente do for classico (for i = 0; i < ...) - aqui nao precisamos de indice.
  // texto.toLowerCase() converte TUDO para minusculas primeiro,
  // assim "A" e "a" sao tratados da mesma forma.
  //
  // Exemplo com "AeI":
  //   texto.toLowerCase() -> "aei"
  //   Iteracao 1: letra = "a" -> vogais.includes("a") = true  -> contador = 1
  //   Iteracao 2: letra = "e" -> vogais.includes("e") = true  -> contador = 2
  //   Iteracao 3: letra = "i" -> vogais.includes("i") = true  -> contador = 3

  for (const letra of texto.toLowerCase()) {
    // .includes() verifica se a string "aeiou" CONTEM essa letra.
    // Devolve true ou false.
    // "aeiou".includes("a") -> true
    // "aeiou".includes("z") -> false
    if (vogais.includes(letra)) {
      contador++;  // contador++ e o mesmo que contador = contador + 1
    }
  }
  return contador;
}

// ========================================
// EXERCICIO 3: ENCONTRAR O MAIOR
// ========================================
// Objetivo: encontrar o maior numero num array.
// Estrategia: guardar o primeiro como "maior" e comparar com os restantes.

function encontrarMaior(numeros) {
  let maior = numeros[0];  // Comecar pelo primeiro elemento como referencia

  // Comecar em i = 1 (segundo elemento) porque o primeiro ja esta em 'maior'.
  // Em cada iteracao, se o elemento atual for MAIOR que o nosso 'maior',
  // atualizamos a variavel.
  //
  // Exemplo com [3, 7, 2, 9, 1]:
  //   maior = 3
  //   i=1: numeros[1] = 7 > 3? SIM -> maior = 7
  //   i=2: numeros[2] = 2 > 7? NAO
  //   i=3: numeros[3] = 9 > 7? SIM -> maior = 9
  //   i=4: numeros[4] = 1 > 9? NAO
  //   resultado: 9

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }
  return maior;
}

// ========================================
// EXERCICIO 4: FIZZBUZZ
// ========================================
// Objetivo: classico exercicio de entrevista.
// Estrategia: loop de 1 ate n, testar divisibilidade com %.

function fizzBuzz(n) {
  const resultado = [];  // Array vazio onde vamos guardar as respostas

  for (let i = 1; i <= n; i++) {
    // O operador % (modulo) devolve o RESTO da divisao.
    //   6 % 3 = 0  (6 / 3 = 2, resto 0) -> e divisivel por 3
    //   7 % 3 = 1  (7 / 3 = 2, resto 1) -> NAO e divisivel por 3
    //   10 % 5 = 0 (10 / 5 = 2, resto 0) -> e divisivel por 5
    //
    // IMPORTANTE: testar "divisivel por 3 E 5" PRIMEIRO!
    // Se testarmos "divisivel por 3" primeiro, o 15 entra nesse caso
    // e nunca chega ao teste de "3 E 5". A ordem dos if/else importa.

    if (i % 3 === 0 && i % 5 === 0) {
      resultado.push("FizzBuzz");    // .push() adiciona ao fim do array
    } else if (i % 3 === 0) {
      resultado.push("Fizz");
    } else if (i % 5 === 0) {
      resultado.push("Buzz");
    } else {
      resultado.push(String(i));     // String(4) converte o numero 4 para a string "4"
    }
  }
  return resultado;
}

// ========================================
// EXERCICIO 5: REMOVER DUPLICADOS
// ========================================
// Objetivo: [1, 2, 2, 3] -> [1, 2, 3]
// Estrategia: usar Set que so guarda valores unicos.

function removerDuplicados(array) {
  // Set e uma estrutura de dados que NAO permite duplicados.
  // Ao passar um array para new Set(), os duplicados sao removidos.
  //
  //   new Set([1, 2, 2, 3, 3, 3])  -> Set {1, 2, 3}
  //
  // Mas um Set NAO e um array! Nao tem .map(), .filter(), etc.
  // Para converter de volta para array usamos o spread operator: [...]
  //
  //   [...new Set([1, 2, 2, 3])]   -> [1, 2, 3]
  //
  // O spread operator (...) "espalha" os elementos do Set dentro de [].
  // E como tirar os items de uma caixa e po-los noutra.
  // Tambem funciona com arrays: [...[1,2], ...[3,4]] -> [1, 2, 3, 4]

  return [...new Set(array)];
}

// ========================================
// EXERCICIO 6: CAPITALIZAR PALAVRAS
// ========================================
// Objetivo: "ola mundo" -> "Ola Mundo"
// Estrategia: separar palavras, transformar cada uma, juntar.

function capitalizar(frase) {
  // Passo a passo com "ola mundo":
  //
  // frase.split(" ")
  //   -> ["ola", "mundo"]
  //   .split(" ") corta a string por espacos, devolvendo um array de palavras.
  //
  // .map((palavra) => ...)
  //   .map() percorre CADA elemento do array e transforma-o.
  //   Devolve um NOVO array com os elementos transformados.
  //   A arrow function (=>) recebe cada palavra e devolve a versao capitalizada.
  //
  //   Para cada palavra (ex: "ola"):
  //     palavra[0]                -> "o"     (primeiro caracter, indice 0)
  //     palavra[0].toUpperCase()  -> "O"     (converte para maiuscula)
  //     palavra.slice(1)          -> "la"    (resto da string a partir do indice 1)
  //     "O" + "la"               -> "Ola"   (juntar maiuscula + resto)
  //
  //   .slice(inicio, fim) extrai uma parte da string.
  //   .slice(1) significa: do indice 1 ate ao fim.
  //   .slice(0, 3) em "javascript" daria "jav" (indice 0, 1, 2).
  //
  //   Resultado do .map(): ["Ola", "Mundo"]
  //
  // .join(" ")
  //   -> "Ola Mundo"
  //   .join(" ") junta o array numa string com espaco entre cada elemento.

  return frase
    .split(" ")
    .map((palavra) => palavra[0].toUpperCase() + palavra.slice(1))
    .join(" ");
}

// ========================================
// EXERCICIO 7: SOMA DE PARES
// ========================================
// Objetivo: [1, 2, 3, 4, 5, 6] -> 12 (2+4+6)
// Estrategia: filtrar os pares, depois somar tudo.

function somaPares(numeros) {
  // Passo a passo com [1, 2, 3, 4, 5, 6]:
  //
  // .filter((n) => n % 2 === 0)
  //   .filter() percorre cada elemento e MANTEM so os que devolvem true.
  //   n % 2 === 0 verifica se o numero e par (resto da divisao por 2 e zero).
  //     1 % 2 = 1 (impar, descarta)
  //     2 % 2 = 0 (par, mantem)
  //     3 % 2 = 1 (impar, descarta)
  //     4 % 2 = 0 (par, mantem)
  //     5 % 2 = 1 (impar, descarta)
  //     6 % 2 = 0 (par, mantem)
  //   Resultado: [2, 4, 6]
  //
  // .reduce((soma, n) => soma + n, 0)
  //   .reduce() agrega o array inteiro num UNICO valor.
  //   Recebe dois argumentos:
  //     1) Funcao callback com (acumulador, elementoAtual)
  //     2) Valor inicial do acumulador (neste caso 0)
  //
  //   Iteracao 1: soma = 0,  n = 2  -> 0 + 2 = 2
  //   Iteracao 2: soma = 2,  n = 4  -> 2 + 4 = 6
  //   Iteracao 3: soma = 6,  n = 6  -> 6 + 6 = 12
  //   Resultado final: 12

  return numeros
    .filter((n) => n % 2 === 0)
    .reduce((soma, n) => soma + n, 0);
}

// ========================================
// EXERCICIO 8: PALINDROMO
// ========================================
// Objetivo: verificar se uma string se le igual ao contrario.
// Estrategia: limpar a string, inverter e comparar.

function ePalindromo(texto) {
  // Passo a passo com "Aba":
  //
  // texto.toLowerCase()  -> "aba"
  //   Converte tudo para minusculas (para "A" e "a" serem iguais).
  //
  // .replace(/\s/g, "")  -> "aba"
  //   .replace() substitui partes da string.
  //   O primeiro argumento e uma expressao regular (regex):
  //     /\s/g
  //     /   / -> delimitadores da regex (como aspas para strings)
  //     \s   -> significa "qualquer espaco em branco" (espaco, tab, etc.)
  //     g    -> flag "global" = substituir TODAS as ocorrencias, nao so a primeira
  //   O segundo argumento "" significa: substituir por nada (ou seja, apagar).
  //   Exemplo: "a b a".replace(/\s/g, "") -> "aba" (remove todos os espacos)
  //
  // Depois comparamos a string limpa com a sua versao invertida:
  //   "aba" === "aba".split("").reverse().join("")
  //   "aba" === "aba"  -> true (e palindromo!)
  //
  // Com "ola":
  //   "ola" === "alo"  -> false (nao e palindromo)

  const limpo = texto.toLowerCase().replace(/\s/g, "");
  return limpo === limpo.split("").reverse().join("");
}

// ========================================
// EXERCICIO 9: AGRUPAR POR PROPRIEDADE
// ========================================
// Objetivo: organizar objetos em grupos com base numa propriedade.
// Estrategia: criar um objeto vazio e ir adicionando items ao grupo certo.

function agruparPor(array, propriedade) {
  const grupos = {};  // Objeto vazio que vai guardar os grupos. Ex: { A: [...], B: [...] }

  // for...of percorre cada objeto do array.
  // Exemplo com alunos e propriedade "turma":
  //   Iteracao 1: item = { nome: "Ana", turma: "A" }
  //   Iteracao 2: item = { nome: "Rui", turma: "B" }
  //   Iteracao 3: item = { nome: "Maria", turma: "A" }

  for (const item of array) {
    // item[propriedade] usa notacao de PARENTESIS RETOS para aceder a propriedade.
    // E diferente de item.propriedade (que procura literalmente uma prop chamada "propriedade").
    // item["turma"] e igual a item.turma -> devolve o VALOR dessa propriedade.
    //
    // Usamos [] quando o nome da propriedade esta guardado numa VARIAVEL.
    // item.turma     -> funciona, mas esta fixo no codigo
    // item[variavel] -> funciona com qualquer nome de propriedade

    const chave = item[propriedade];  // Ex: "A" ou "B"

    // Se o grupo ainda nao existe, criar um array vazio para ele.
    // !grupos["A"] -> true na primeira vez (ainda nao existe)
    // !grupos["A"] -> false na segunda vez (ja foi criado)
    if (!grupos[chave]) {
      grupos[chave] = [];  // Criar array vazio: grupos = { A: [] }
    }

    // Adicionar o item ao array do grupo correspondente.
    grupos[chave].push(item);  // Ex: grupos.A.push({ nome: "Ana", turma: "A" })
  }

  // Resultado final com o exemplo:
  // {
  //   A: [{ nome: "Ana", turma: "A" }, { nome: "Maria", turma: "A" }],
  //   B: [{ nome: "Rui", turma: "B" }]
  // }

  return grupos;
}

// ========================================
// EXERCICIO 10: ACHATAR ARRAY
// ========================================
// Objetivo: [[1,2], [3,4], [5]] -> [1, 2, 3, 4, 5]
// Estrategia: usar reduce para ir juntando arrays num so.

function achatar(arrays) {
  // .reduce() agrega tudo num unico valor (neste caso, num unico array).
  //
  // Passo a passo com [[1, 2], [3, 4], [5]]:
  //
  //   Valor inicial: [] (array vazio)
  //
  //   Iteracao 1: resultado = [],     arr = [1, 2]
  //     [].concat([1, 2]) -> [1, 2]
  //     .concat() junta dois arrays num so (nao modifica o original, cria um novo).
  //
  //   Iteracao 2: resultado = [1, 2], arr = [3, 4]
  //     [1, 2].concat([3, 4]) -> [1, 2, 3, 4]
  //
  //   Iteracao 3: resultado = [1, 2, 3, 4], arr = [5]
  //     [1, 2, 3, 4].concat([5]) -> [1, 2, 3, 4, 5]
  //
  //   Resultado final: [1, 2, 3, 4, 5]
  //
  // Alternativa com spread operator (faz o mesmo):
  //   arrays.reduce((resultado, arr) => [...resultado, ...arr], []);
  //   [...resultado, ...arr] "espalha" ambos os arrays num novo.

  return arrays.reduce((resultado, arr) => resultado.concat(arr), []);
}

// ========================================
// TESTES AUTOMATICOS
// ========================================

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
