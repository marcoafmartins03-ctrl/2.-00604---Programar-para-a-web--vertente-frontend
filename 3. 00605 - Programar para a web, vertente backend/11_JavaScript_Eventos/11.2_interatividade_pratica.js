// ========================================
// 11.2 INTERATIVIDADE PRATICA
// ========================================
// Objetivo: combinar varios eventos para criar comportamento interativo.

// Verifica ambiente de execucao.
if (typeof document === "undefined") {
  // Mensagem amigavel para execucao em Node.
  console.log("Este script usa DOM e deve correr no browser.");
  // Indica HTML correto.
  console.log("Abre 11_JavaScript_Eventos/11.2_interatividade_pratica.html e usa a consola (F12).");
} else {
  // ========================================
  // REFERENCIAS AO DOM
  // ========================================

  // Botao que alterna visibilidade do painel.
  const botaoAlternar = document.querySelector("#alternar");
  // Painel de detalhes que sera mostrado/ocultado.
  const painelDetalhes = document.querySelector("#detalhes");
  // Elemento que mostra total de cliques no botao.
  const contadorCliques = document.querySelector("#contador-cliques");
  // Campo de pesquisa para filtrar itens da lista.
  const campoPesquisa = document.querySelector("#pesquisa-detalhes");
  // Lista de itens a filtrar (NodeList).
  const listaItens = document.querySelectorAll("#detalhes li");

  // Estado em memoria para contar cliques.
  let totalCliques = 0;

  // ========================================
  // EVENTO: CLICK NO BOTAO ALTERNAR
  // ========================================

  // Garante que elementos principais existem.
  if (botaoAlternar && painelDetalhes) {
    // Click no botao para mostrar/esconder painel.
    botaoAlternar.addEventListener("click", () => {
      // Alterna classe "visivel" no painel.
      painelDetalhes.classList.toggle("visivel");

      // Incrementa total de cliques.
      totalCliques += 1;

      // Atualiza contador visual se elemento existir.
      if (contadorCliques) {
        contadorCliques.textContent = String(totalCliques);
      }

      // Verifica estado atual do painel apos toggle.
      const estaVisivel = painelDetalhes.classList.contains("visivel");

      // Adapta texto do botao conforme estado atual.
      botaoAlternar.textContent = estaVisivel ? "Esconder detalhes" : "Mostrar detalhes";
    });
  }

  // ========================================
  // EVENTO: INPUT DE PESQUISA
  // ========================================

  // So liga filtro se campo e itens existirem.
  if (campoPesquisa && listaItens.length > 0) {
    // Input dispara sempre que o texto muda.
    campoPesquisa.addEventListener("input", () => {
      // Le termo e normaliza para minusculas.
      const termo = campoPesquisa.value.trim().toLowerCase();

      // Percorre todos os itens da lista.
      listaItens.forEach((item) => {
        // Texto de cada item para comparacao.
        const texto = item.textContent.toLowerCase();
        // Verifica se item inclui termo pesquisado.
        const corresponde = texto.includes(termo);

        // Mostra/oculta item consoante resultado.
        item.style.display = corresponde ? "list-item" : "none";
      });
    });
  }

  // ========================================
  // EVENTO: TECLA ESCAPE
  // ========================================

  // Listener global de teclado no documento.
  document.addEventListener("keydown", (evento) => {
    // Reage apenas quando tecla for Escape.
    if (evento.key !== "Escape") return;

    // Garante que painel existe.
    if (!painelDetalhes) return;

    // Fecha painel removendo classe visivel.
    painelDetalhes.classList.remove("visivel");

    // Repor texto do botao para estado fechado.
    if (botaoAlternar) {
      botaoAlternar.textContent = "Mostrar detalhes";
    }
  });
}
