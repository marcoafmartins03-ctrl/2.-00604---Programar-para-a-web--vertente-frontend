// ========================================
// LIÇÃO 10.1: Selecionar Elementos DOM
// ========================================
//
// O DOM (Document Object Model) é a representação
// da página HTML em JavaScript. Permite:
// - Selecionar elementos
// - Modificar conteúdo
// - Adicionar/remover elementos
// - Reagir a eventos
//
// NOTA IMPORTANTE DE EXECUCAO:
// - Este ficheiro foi feito para correr no browser.
// - Se executares com "node 10.1_selecionar.js", o objeto "document" nao existe.
// - Corre sempre atraves do ficheiro HTML correspondente:
//   10_JavaScript_DOM/10.1_selecionar.html
//
// ========================================

if (typeof document === 'undefined') {
  console.log('Este script usa DOM e deve correr no browser.');
  console.log('Abre 10_JavaScript_DOM/10.1_selecionar.html e usa a consola (F12).');
} else {

// ========================================
// MÉTODO 1: querySelector (seleciona UM)
// ========================================

// Selecionar pelo NOME da tag
const titulo = document.querySelector('h1');
console.log('Título:', titulo);
console.log('Texto do título:', titulo.textContent);

// Selecionar pela CLASSE (usa ponto .)
const primeiraCaixa = document.querySelector('.caixa');
console.log('Primeira caixa:', primeiraCaixa);

// Selecionar pelo ID (usa cardinal #)
const caixaEspecial = document.querySelector('#especial');
console.log('Caixa especial:', caixaEspecial);

// ========================================
// MÉTODO 2: querySelectorAll (seleciona TODOS)
// ========================================

// Retorna uma NodeList (similar a array)
const todasCaixas = document.querySelectorAll('.caixa');
console.log('Todas as caixas:', todasCaixas);
console.log('Quantas caixas?', todasCaixas.length);

// Percorrer com forEach
todasCaixas.forEach(function(caixa, indice) {
  console.log('Caixa', indice + 1, ':', caixa.querySelector('h2').textContent);
});

// ========================================
// MÉTODO 3: getElementById (atalho para ID)
// ========================================

// Não precisa do # (é só para ID)
const lista = document.getElementById('lista');
console.log('Lista:', lista);

// ========================================
// SELETORES AVANÇADOS
// ========================================

// Selecionar elemento dentro de outro
const paragrafoDentro = document.querySelector('#especial p');
console.log('Parágrafo dentro do especial:', paragrafoDentro.textContent);

// Selecionar todos os li dentro da lista
const itens = document.querySelectorAll('#lista li');
console.log('Itens da lista:', itens.length);

// ========================================
// VERIFICAR SE EXISTE
// ========================================

const naoExiste = document.querySelector('.classe-que-nao-existe');
if (naoExiste) {
  console.log('Encontrado!');
} else {
  console.log('Elemento não encontrado (retorna null)');
}

// ========================================
// RESUMO
// ========================================
console.log('---');
console.log('RESUMO:');
console.log('querySelector("seletor") → UM elemento');
console.log('querySelectorAll("seletor") → TODOS os elementos');
console.log('getElementById("id") → elemento por ID');
console.log('Seletores: tag, .classe, #id');
}
