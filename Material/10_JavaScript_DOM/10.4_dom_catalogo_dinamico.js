// ========================================
// 10.4 DOM: CATALOGO DINAMICO
// ========================================
// Objetivo: renderizar cards a partir de dados em memoria,
// aplicar pesquisa, filtros e ordenacao no frontend.

// Nota de execucao:
// - Este script depende do DOM e deve correr no browser.
// - Abre 10_JavaScript_DOM/10.4_dom_catalogo_dinamico.html.
if (typeof document === "undefined") {
  console.log("Este script usa DOM e deve correr no browser.");
  console.log("Abre 10_JavaScript_DOM/10.4_dom_catalogo_dinamico.html e usa a consola (F12).");
} else {

// Base de dados local (estado em memoria para a aula).
const produtos = [
  { id: 1, nome: "Teclado Mecanico", categoria: "hardware", preco: 89.9 },
  { id: 2, nome: "Rato Sem Fios", categoria: "hardware", preco: 29.9 },
  { id: 3, nome: "Headset USB", categoria: "audio", preco: 49.9 },
  { id: 4, nome: "Base para Portatil", categoria: "acessorios", preco: 24.5 },
  { id: 5, nome: "Microfone", categoria: "audio", preco: 59.0 },
  { id: 6, nome: "Hub USB-C", categoria: "acessorios", preco: 34.0 },
];

// Input de pesquisa textual.
const inputPesquisa = document.getElementById("pesquisa");
// Select de categoria.
const selectCategoria = document.getElementById("categoria");
// Select de ordenacao.
const selectOrdenacao = document.getElementById("ordenacao");
// Container onde os cards vao ser inseridos.
const resultado = document.getElementById("resultado");

// Funcao para devolver lista filtrada + ordenada.
function obterProdutosFiltrados() {
  // Le e normaliza termo de pesquisa para comparacao case-insensitive.
  const termo = inputPesquisa.value.trim().toLowerCase();
  // Le categoria ativa no filtro.
  const categoria = selectCategoria.value;
  // Le modo de ordenacao escolhido.
  const ordenacao = selectOrdenacao.value;

  // Primeiro filtra por texto e categoria.
  let lista = produtos.filter((produto) => {
    // Texto corresponde se o nome contiver o termo procurado.
    const textoOk = produto.nome.toLowerCase().includes(termo);
    // Categoria corresponde se estiver em "todos" ou na categoria exata.
    const categoriaOk = categoria === "todos" || produto.categoria === categoria;
    // Produto entra no resultado apenas se passar ambos os filtros.
    return textoOk && categoriaOk;
  });

  // Cria copia do array para ordenar sem alterar dados originais.
  lista = [...lista];

  // Ordena por nome de A a Z.
  if (ordenacao === "nome") {
    lista.sort((a, b) => a.nome.localeCompare(b.nome));
  }

  // Ordena por preco crescente.
  if (ordenacao === "precoAsc") {
    lista.sort((a, b) => a.preco - b.preco);
  }

  // Ordena por preco decrescente.
  if (ordenacao === "precoDesc") {
    lista.sort((a, b) => b.preco - a.preco);
  }

  // Devolve lista final para renderizacao.
  return lista;
}

// Funcao que redesenha todo o catalogo no DOM.
function renderizar() {
  // Limpa conteudo atual para evitar duplicados.
  resultado.innerHTML = "";

  // Obtem dados ja filtrados/ordenados.
  const lista = obterProdutosFiltrados();

  // Se lista vazia, mostra mensagem e termina.
  if (lista.length === 0) {
    // Cria paragrafo de estado vazio.
    const vazio = document.createElement("p");
    // Texto para informar utilizador.
    vazio.textContent = "Sem resultados para os filtros atuais.";
    // Adiciona ao container.
    resultado.appendChild(vazio);
    // Termina a funcao.
    return;
  }

  // Percorre produtos para criar cards.
  lista.forEach((produto) => {
    // Cria artigo para cada produto.
    const card = document.createElement("article");
    // Classe CSS do card.
    card.className = "card";

    // Cria titulo do produto.
    const titulo = document.createElement("h3");
    // Texto do titulo.
    titulo.textContent = produto.nome;

    // Cria linha com categoria.
    const categoria = document.createElement("p");
    // Texto da categoria.
    categoria.textContent = `Categoria: ${produto.categoria}`;

    // Cria linha com preco.
    const preco = document.createElement("p");
    // Classe para destaque visual do preco.
    preco.className = "preco";
    // Formata valor com duas casas decimais.
    preco.textContent = `${produto.preco.toFixed(2)} EUR`;

    // Monta card com os elementos criados.
    card.appendChild(titulo);
    card.appendChild(categoria);
    card.appendChild(preco);

    // Insere card no container final.
    resultado.appendChild(card);
  });
}

// Reage a cada tecla no input de pesquisa.
inputPesquisa.addEventListener("input", renderizar);
// Reage a mudancas de categoria.
selectCategoria.addEventListener("change", renderizar);
// Reage a mudancas de ordenacao.
selectOrdenacao.addEventListener("change", renderizar);

// Primeira renderizacao ao abrir pagina.
renderizar();
}
