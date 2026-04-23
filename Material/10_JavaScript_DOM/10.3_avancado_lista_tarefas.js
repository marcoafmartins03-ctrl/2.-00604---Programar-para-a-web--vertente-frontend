// ========================================
// 10.3 AVANCADO: LISTA DE TAREFAS
// ========================================
// Esta versao evolui a lite.
// Inclui: categoria, estado concluida, filtros e delegacao de eventos.

// Verifica se este script esta a correr num ambiente com DOM.
if (typeof document === "undefined") {
  // Mensagem amigavel para execucao incorreta em Node.
  console.log("Este script usa DOM e deve correr no browser.");
  // Indica o ficheiro HTML correto.
  console.log("Abre 10_JavaScript_DOM/10.3_avancado_lista_tarefas.html e usa a consola (F12).");
} else {
  // ========================================
  // ESTADO DA APLICACAO
  // ========================================

  // Array em memoria com todas as tarefas.
  const tarefas = [];

  // ========================================
  // REFERENCIAS AO DOM
  // ========================================

  // Formulario para criar novas tarefas.
  const formTarefa = document.getElementById("form-tarefa");
  // Campo de texto do titulo.
  const inputTitulo = document.getElementById("titulo");
  // Campo de categoria (select).
  const selectCategoria = document.getElementById("categoria");
  // Campo de filtro por texto.
  const inputFiltroTexto = document.getElementById("filtro-texto");
  // Campo de filtro por estado.
  const selectFiltroEstado = document.getElementById("filtro-estado");
  // Lista onde as tarefas serao desenhadas.
  const listaTarefas = document.getElementById("lista-tarefas");
  // Zona de feedback para mensagens ao utilizador.
  const feedback = document.getElementById("feedback");

  // ========================================
  // FUNCAO: FEEDBACK
  // ========================================

  // Mostra mensagem de sucesso ou erro no ecran.
  function mostrarFeedback(mensagem, erro = false) {
    // Atualiza texto da mensagem.
    feedback.textContent = mensagem;
    // Define cor conforme tipo.
    feedback.style.color = erro ? "#b91c1c" : "#0f766e";
  }

  // ========================================
  // FUNCAO: FILTRAR DADOS
  // ========================================

  // Devolve array de tarefas apos aplicar filtros atuais.
  function obterTarefasFiltradas() {
    // Le texto de pesquisa e normaliza.
    const termo = inputFiltroTexto.value.trim().toLowerCase();
    // Le filtro de estado selecionado.
    const estado = selectFiltroEstado.value;

    // Aplica filtro combinado sobre o array de estado.
    return tarefas.filter((tarefa) => {
      // Regra 1: titulo contem termo pesquisado.
      const textoOk = tarefa.titulo.toLowerCase().includes(termo);

      // Regra 2: estado (todos / abertas / concluidas).
      let estadoOk = true;

      // Se filtro for abertas, tarefa tem de estar nao concluida.
      if (estado === "abertas") {
        estadoOk = !tarefa.concluida;
      }

      // Se filtro for concluidas, tarefa tem de estar concluida.
      if (estado === "concluidas") {
        estadoOk = tarefa.concluida;
      }

      // Tarefa passa apenas se cumprir as duas regras.
      return textoOk && estadoOk;
    });
  }

  // ========================================
  // FUNCAO: RENDERIZAR
  // ========================================

  // Redesenha a lista toda com base no estado atual.
  function renderizarTarefas() {
    // Limpa conteudo antigo para reconstruir lista.
    listaTarefas.innerHTML = "";

    // Obtem tarefas ja filtradas.
    const dados = obterTarefasFiltradas();

    // Se nao houver dados, mostra estado vazio.
    if (dados.length === 0) {
      const vazio = document.createElement("li");
      vazio.textContent = "Sem tarefas para mostrar.";
      listaTarefas.appendChild(vazio);
      return;
    }

    // Cria interface para cada tarefa filtrada.
    dados.forEach((tarefa) => {
      // Item principal da lista.
      const item = document.createElement("li");
      // Guarda id no dataset para eventos de acao.
      item.dataset.id = String(tarefa.id);

      // Bloco textual (titulo + categoria).
      const blocoTexto = document.createElement("div");

      // Elemento do titulo.
      const titulo = document.createElement("span");
      titulo.textContent = tarefa.titulo;
      titulo.className = "titulo-tarefa";

      // Se concluida, aplica classe de estilo.
      if (tarefa.concluida) {
        titulo.classList.add("concluida");
      }

      // Tag de categoria.
      const tag = document.createElement("span");
      tag.textContent = tarefa.categoria;
      tag.className = "tag";

      // Monta bloco textual.
      blocoTexto.appendChild(titulo);
      blocoTexto.appendChild(tag);

      // Bloco de acoes (botoes).
      const acoes = document.createElement("div");
      acoes.className = "acoes";

      // Botao concluir/reabrir.
      const botaoConcluir = document.createElement("button");
      botaoConcluir.type = "button";
      botaoConcluir.className = "btn-secundario";
      botaoConcluir.dataset.acao = "concluir";
      botaoConcluir.textContent = tarefa.concluida ? "Reabrir" : "Concluir";

      // Botao remover.
      const botaoRemover = document.createElement("button");
      botaoRemover.type = "button";
      botaoRemover.className = "btn-secundario";
      botaoRemover.dataset.acao = "remover";
      botaoRemover.textContent = "Remover";

      // Monta bloco de acoes.
      acoes.appendChild(botaoConcluir);
      acoes.appendChild(botaoRemover);

      // Monta item completo.
      item.appendChild(blocoTexto);
      item.appendChild(acoes);

      // Adiciona item a lista visivel.
      listaTarefas.appendChild(item);
    });
  }

  // ========================================
  // EVENTO: SUBMIT (CRIAR TAREFA)
  // ========================================

  // Quando formulario e submetido, cria tarefa nova.
  formTarefa.addEventListener("submit", (evento) => {
    // Impede refresh da pagina.
    evento.preventDefault();

    // Le e limpa titulo.
    const titulo = inputTitulo.value.trim();
    // Le categoria selecionada.
    const categoria = selectCategoria.value;

    // Validacao basica de tamanho minimo.
    if (titulo.length < 3) {
      mostrarFeedback("O titulo deve ter pelo menos 3 caracteres.", true);
      return;
    }

    // Cria objeto tarefa com estrutura padrao.
    const novaTarefa = {
      // Id unico simples com timestamp.
      id: Date.now(),
      // Titulo validado.
      titulo,
      // Categoria do select.
      categoria,
      // Estado inicial: nao concluida.
      concluida: false,
    };

    // Guarda no estado em memoria.
    tarefas.push(novaTarefa);

    // Limpa formulario para nova entrada.
    formTarefa.reset();
    // Mostra feedback de sucesso.
    mostrarFeedback("Tarefa adicionada com sucesso.");
    // Atualiza lista no ecra.
    renderizarTarefas();
  });

  // ========================================
  // EVENTO: CLICK NA LISTA (DELEGACAO)
  // ========================================

  // Um listener para todos os botoes da lista.
  listaTarefas.addEventListener("click", (evento) => {
    // Procura botao relacionado com o clique.
    const botao = evento.target.closest("button");
    if (!botao) return;

    // Procura item li do botao clicado.
    const item = evento.target.closest("li");
    if (!item) return;

    // Le id da tarefa no dataset do li.
    const id = Number(item.dataset.id);
    // Le acao no dataset do botao.
    const acao = botao.dataset.acao;

    // Procura indice da tarefa no estado.
    const indice = tarefas.findIndex((tarefa) => tarefa.id === id);
    if (indice === -1) return;

    // Acao concluir: alterna true/false.
    if (acao === "concluir") {
      tarefas[indice].concluida = !tarefas[indice].concluida;
    }

    // Acao remover: remove item do array.
    if (acao === "remover") {
      tarefas.splice(indice, 1);
    }

    // Atualiza lista apos qualquer acao.
    renderizarTarefas();
  });

  // ========================================
  // EVENTOS DE FILTRO
  // ========================================

  // Filtra em tempo real ao escrever texto.
  inputFiltroTexto.addEventListener("input", renderizarTarefas);
  // Filtra ao mudar estado selecionado.
  selectFiltroEstado.addEventListener("change", renderizarTarefas);

  // ========================================
  // ARRANQUE
  // ========================================

  // Render inicial ao carregar pagina.
  renderizarTarefas();
}
