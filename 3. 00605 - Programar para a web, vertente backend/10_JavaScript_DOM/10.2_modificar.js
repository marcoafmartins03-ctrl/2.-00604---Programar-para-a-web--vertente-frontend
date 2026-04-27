// ========================================
// LIÇÃO 10.2: Modificar Elementos DOM
// ========================================
//
// Propriedades para modificar elementos:
// - textContent: texto (seguro)
// - innerHTML: HTML (cuidado com XSS)
// - style: estilos inline
// - classList: classes CSS
// - setAttribute: atributos
//
// NOTA IMPORTANTE DE EXECUCAO:
// - Este ficheiro depende de "document" e dos elementos definidos no HTML.
// - Deve ser executado no browser com:
//   10_JavaScript_DOM/10.2_modificar.html
//
// ========================================

if (typeof document === 'undefined') {
  console.log('Este script usa DOM e deve correr no browser.');
  console.log('Abre 10_JavaScript_DOM/10.2_modificar.html e usa a consola (F12).');
} else {

// Selecionar elementos
const mensagem = document.querySelector('#mensagem');
const caixa = document.querySelector('#caixa-demo');
const tituloCaixa = document.querySelector('#titulo-caixa');
const conteudoCaixa = document.querySelector('#conteudo-caixa');

// Selecionar botões
const btnTexto = document.querySelector('#btn-texto');
const btnEstilo = document.querySelector('#btn-estilo');
const btnClasse = document.querySelector('#btn-classe');
const btnReset = document.querySelector('#btn-reset');

// ========================================
// 1. MODIFICAR TEXTO (textContent)
// ========================================

// textContent é seguro - trata tudo como texto
btnTexto.addEventListener('click', function() {
  // Mudar texto
  tituloCaixa.textContent = 'Título Modificado!';
  conteudoCaixa.textContent = 'O conteúdo foi alterado pelo JavaScript.';
  mensagem.textContent = 'Clicaste no botão "Mudar Texto"';

  console.log('Texto modificado com textContent');
});

// ========================================
// 2. MODIFICAR ESTILO (style)
// ========================================

// style permite alterar CSS inline
btnEstilo.addEventListener('click', function() {
  // Propriedades CSS usam camelCase em JS
  // background-color → backgroundColor
  caixa.style.backgroundColor = '#dbeafe';
  caixa.style.borderLeft = '4px solid #3b82f6';
  caixa.style.padding = '30px';

  // Também funciona
  tituloCaixa.style.color = '#1e40af';

  mensagem.textContent = 'Estilos aplicados com style';
  console.log('Estilos modificados');
});

// ========================================
// 3. MODIFICAR CLASSES (classList)
// ========================================

// classList é mais limpo que modificar style
// Métodos: add(), remove(), toggle(), contains()
btnClasse.addEventListener('click', function() {
  // toggle: adiciona se não existe, remove se existe
  caixa.classList.toggle('destaque');

  // Verificar se tem a classe
  if (caixa.classList.contains('destaque')) {
    mensagem.textContent = 'Classe "destaque" ADICIONADA';
  } else {
    mensagem.textContent = 'Classe "destaque" REMOVIDA';
  }

  console.log('Classes atuais:', caixa.className);
});

// ========================================
// 4. RESET
// ========================================

btnReset.addEventListener('click', function() {
  // Repor valores originais
  tituloCaixa.textContent = 'Título Original';
  conteudoCaixa.textContent = 'Conteúdo original da caixa.';
  mensagem.textContent = 'Este texto vai ser modificado pelo JavaScript.';

  // Limpar estilos inline
  caixa.style.backgroundColor = '';
  caixa.style.borderLeft = '';
  caixa.style.padding = '';
  tituloCaixa.style.color = '';

  // Remover classes extra
  caixa.classList.remove('destaque', 'erro');

  console.log('Reset completo');
});

// ========================================
// EXEMPLOS EXTRA (ver na consola)
// ========================================

console.log('---');
console.log('OUTROS MÉTODOS ÚTEIS:');

// innerHTML - permite inserir HTML (cuidado!)
// conteudoCaixa.innerHTML = '<strong>Texto</strong> com <em>HTML</em>';

// setAttribute - definir atributos
// caixa.setAttribute('data-status', 'ativo');

// getAttribute - ler atributos
// console.log(caixa.getAttribute('id'));

console.log('classList.add("classe")');
console.log('classList.remove("classe")');
console.log('classList.toggle("classe")');
console.log('classList.contains("classe")');
}
