// ========================================
// 10.4 LITE: CATALOGO DINAMICO
// ========================================
// Este ficheiro foi pensado para iniciantes.
// Objetivo: praticar renderizacao de dados e pesquisa simples no DOM.

// Verifica se o codigo esta a correr num ambiente com DOM.
if (typeof document === "undefined") {
  // Mensagem amigavel para caso de execucao com Node.
  console.log("Este script usa DOM e deve correr no browser.");
  // Indica ficheiro HTML correto para abrir.
  console.log("Abre 10_JavaScript_DOM/10.4_lite_catalogo_dinamico.html e usa a consola (F12).");
} else {
  // ========================================
  // ESTADO DA APLICACAO
  // ========================================

  // Array em memoria com os produtos a apresentar.
  // Cada produto e um objeto com id, nome e preco.
  const produtos = [
    { id: 1, nome: "Teclado", preco: 49.9 },
    { id: 2, nome: "Rato", preco: 19.9 },
    { id: 3, nome: "Monitor", preco: 149.9 },
    { id: 4, nome: "Headset", preco: 39.9 },
  ];

  // ========================================
  // REFERENCIAS AO DOM
  // ========================================

  // Campo onde o utilizador escreve o termo de pesquisa.
  const inputPesquisa = document.getElementById("pesquisa");
  // Container onde os cards de produto vao ser desenhados.
  const listaProdutos = document.getElementById("lista-produtos");

  // ========================================
  // FUNCAO: OBTER FILTRADOS
  // ========================================

  // Esta funcao devolve apenas os produtos que correspondem ao texto pesquisado.
  function obterFiltrados() {
    // Le o texto do input, remove espacos e passa para minusculas.
    const termo = inputPesquisa.value.trim().toLowerCase();

    // filter cria novo array com os elementos que passam na condicao.
    return produtos.filter((produto) => {
      // Compara o nome do produto (minusculas) com o termo pesquisado.
      return produto.nome.toLowerCase().includes(termo);
    });
  }

  // ========================================
  // FUNCAO: RENDERIZAR
  // ========================================

  // Esta funcao redesenha os resultados no ecra.
  function renderizar() {
    // Limpa resultados anteriores para evitar duplicados.
    listaProdutos.innerHTML = "";

    // Obtem dados filtrados com base no texto atual.
    const dados = obterFiltrados();

    // Se nao houver resultados, mostra mensagem e termina.
    if (dados.length === 0) {
      // Cria elemento de estado vazio.
      const vazio = document.createElement("p");
      // Define texto do estado vazio.
      vazio.textContent = "Sem resultados.";
      // Adiciona mensagem ao container.
      listaProdutos.appendChild(vazio);
      // Termina a funcao.
      return;
    }

    // Percorre cada produto filtrado para criar o card no DOM.
    dados.forEach((produto) => {
      // Cria artigo que representa um produto.
      const card = document.createElement("article");
      // Define classe CSS do card.
      card.className = "produto";

      // Cria titulo do produto.
      const titulo = document.createElement("h3");
      // Define texto do titulo.
      titulo.textContent = produto.nome;

      // Cria elemento para mostrar preco.
      const preco = document.createElement("p");
      // Classe CSS para destaque do preco.
      preco.className = "preco";
      // Formata preco com duas casas decimais.
      preco.textContent = `${produto.preco.toFixed(2)} EUR`;

      // Monta card adicionando titulo e preco.
      card.appendChild(titulo);
      card.appendChild(preco);

      // Adiciona card ao container principal.
      listaProdutos.appendChild(card);
    });
  }

  // ========================================
  // EVENTOS
  // ========================================

  // Sempre que o utilizador escreve no input, atualiza os resultados.
  inputPesquisa.addEventListener("input", renderizar);

  // ========================================
  // ARRANQUE
  // ========================================

  // Primeira renderizacao ao abrir a pagina.
  renderizar();
}
