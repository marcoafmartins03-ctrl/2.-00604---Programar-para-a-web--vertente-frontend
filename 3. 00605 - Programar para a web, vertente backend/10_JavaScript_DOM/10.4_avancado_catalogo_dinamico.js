// ========================================
// 10.4 AVANCADO: CATALOGO DINAMICO
// ========================================
// Esta versao evolui a versao lite.
// Acrescenta filtros por categoria e ordenacao.

// Verifica se o script esta a correr num ambiente com DOM.
if (typeof document === "undefined") {
  // Mensagem para evitar erro tecnico quando alguem corre com Node.
  console.log("Este script usa DOM e deve correr no browser.");
  // Indica ficheiro HTML correto para abrir.
  console.log("Abre 10_JavaScript_DOM/10.4_avancado_catalogo_dinamico.html e usa a consola (F12).");
} else {
  // ========================================
  // ESTADO DA APLICACAO
  // ========================================

  // Array base com dados dos produtos.
  // Cada produto tem id, nome, categoria e preco.
  const produtos = [
    { id: 1, nome: "Teclado Mecanico", categoria: "hardware", preco: 89.9 },
    { id: 2, nome: "Rato Sem Fios", categoria: "hardware", preco: 29.9 },
    { id: 3, nome: "Headset USB", categoria: "audio", preco: 49.9 },
    { id: 4, nome: "Base para Portatil", categoria: "acessorios", preco: 24.5 },
    { id: 5, nome: "Microfone", categoria: "audio", preco: 59.0 },
    { id: 6, nome: "Hub USB-C", categoria: "acessorios", preco: 34.0 },
  ];

  // ========================================
  // REFERENCIAS AO DOM
  // ========================================

  // Campo de pesquisa por texto.
  const inputPesquisa = document.getElementById("pesquisa");
  // Campo de filtro por categoria.
  const selectCategoria = document.getElementById("categoria");
  // Campo de ordenacao.
  const selectOrdenacao = document.getElementById("ordenacao");
  // Container onde os cards vao ser renderizados.
  const resultado = document.getElementById("resultado");

  // ========================================
  // FUNCAO: FILTRAR E ORDENAR
  // ========================================

  // Devolve array final apos aplicar todos os filtros ativos.
  function obterProdutosFiltrados() {
    // Le pesquisa e normaliza para minusculas.
    const termo = inputPesquisa.value.trim().toLowerCase();
    // Le categoria selecionada.
    const categoria = selectCategoria.value;
    // Le modo de ordenacao selecionado.
    const ordenacao = selectOrdenacao.value;

    // Primeiro aplica filtros de texto e categoria.
    let lista = produtos.filter((produto) => {
      // Verifica se nome contem o termo pesquisado.
      const textoOk = produto.nome.toLowerCase().includes(termo);
      // Verifica categoria (ou "todos").
      const categoriaOk = categoria === "todos" || produto.categoria === categoria;
      // Produto passa apenas se cumprir ambas as regras.
      return textoOk && categoriaOk;
    });

    // Cria copia para ordenar sem alterar array original.
    lista = [...lista];

    // Ordena alfabeticamente por nome.
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

    // Devolve lista pronta para renderizacao.
    return lista;
  }

  // ========================================
  // FUNCAO: RENDERIZAR
  // ========================================

  // Redesenha todos os cards no ecran.
  function renderizar() {
    // Limpa resultado anterior para evitar duplicados.
    resultado.innerHTML = "";

    // Obtem lista ja filtrada/ordenada.
    const lista = obterProdutosFiltrados();

    // Estado vazio quando nao existem resultados.
    if (lista.length === 0) {
      // Cria paragrafo informativo.
      const vazio = document.createElement("p");
      // Define mensagem para o utilizador.
      vazio.textContent = "Sem resultados para os filtros atuais.";
      // Adiciona ao container.
      resultado.appendChild(vazio);
      // Termina a funcao.
      return;
    }

    // Cria um card para cada produto.
    lista.forEach((produto) => {
      // Elemento principal do card.
      const card = document.createElement("article");
      // Classe CSS para estilo.
      card.className = "card";

      // Titulo do produto.
      const titulo = document.createElement("h3");
      // Define texto do titulo.
      titulo.textContent = produto.nome;

      // Linha de categoria.
      const categoria = document.createElement("p");
      // Define texto com categoria.
      categoria.textContent = `Categoria: ${produto.categoria}`;

      // Linha de preco.
      const preco = document.createElement("p");
      // Classe para destaque visual.
      preco.className = "preco";
      // Formata para 2 casas decimais.
      preco.textContent = `${produto.preco.toFixed(2)} EUR`;

      // Monta card com titulo, categoria e preco.
      card.appendChild(titulo);
      card.appendChild(categoria);
      card.appendChild(preco);

      // Insere card no container final.
      resultado.appendChild(card);
    });
  }

  // ========================================
  // EVENTOS
  // ========================================

  // Atualiza resultados em tempo real na pesquisa.
  inputPesquisa.addEventListener("input", renderizar);
  // Atualiza resultados ao mudar categoria.
  selectCategoria.addEventListener("change", renderizar);
  // Atualiza resultados ao mudar ordenacao.
  selectOrdenacao.addEventListener("change", renderizar);

  // ========================================
  // ARRANQUE
  // ========================================

  // Primeira renderizacao ao abrir pagina.
  renderizar();
}
