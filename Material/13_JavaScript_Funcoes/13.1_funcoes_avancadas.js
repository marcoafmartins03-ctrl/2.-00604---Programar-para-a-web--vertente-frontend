// ========================================
// 13.1 FUNCOES AVANCADAS
// ========================================
// Objetivo: aprofundar parametros, retorno, callbacks e rest parameters.

// Funcao declarada com parametro default para taxa de IVA.
function calcularPrecoComIva(preco, taxaIva = 0.23) {
  // Calcula e devolve preco final com IVA.
  return preco + preco * taxaIva;
}

// Executa funcao com segundo parametro default.
console.log("Preco com IVA:", calcularPrecoComIva(100));

// Funcao expressao guardada numa constante.
const formatarNome = function (nome, apelido) {
  // Junta nome e apelido removendo espacos desnecessarios.
  return `${nome.trim()} ${apelido.trim()}`;
};

// Mostra resultado da formatacao.
console.log("Nome completo:", formatarNome("Ana", "Silva"));

// Arrow function em formato curto para transformacao simples.
const paraMaiusculas = (texto) => texto.toUpperCase();
console.log("Maiusculas:", paraMaiusculas("frontend"));

// Funcao de ordem superior: recebe outra funcao como parametro.
function processarLista(lista, transformacao) {
  // Array para acumular resultado transformado.
  const resultado = [];

  // Percorre lista original elemento a elemento.
  for (let i = 0; i < lista.length; i += 1) {
    // Aplica callback de transformacao ao elemento atual.
    resultado.push(transformacao(lista[i]));
  }

  // Devolve nova lista transformada.
  return resultado;
}

// Dados de exemplo.
const valores = [1, 2, 3, 4];
// Aplica callback inline para dobrar cada numero.
const dobrados = processarLista(valores, (numero) => numero * 2);
console.log("Dobrados:", dobrados);

// Rest parameters: permite receber quantidade variavel de argumentos.
function somarTudo(...numeros) {
  // Soma todos os valores com reduce.
  return numeros.reduce((soma, atual) => soma + atual, 0);
}

// Exemplo com quatro argumentos.
console.log("Soma total:", somarTudo(10, 20, 30, 40));
