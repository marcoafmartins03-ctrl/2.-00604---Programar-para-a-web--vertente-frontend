// ========================================
// 10.3 DOM: LISTA DE TAREFAS
// ========================================
// Objetivo: demonstrar manipulacao de DOM, eventos e estado em memoria.

// Nota de execucao:
// - Este script usa "document" e deve correr no browser.
// - Abre 10_JavaScript_DOM/10.3_dom_lista_tarefas.html.
if (typeof document === "undefined") {
  console.log("Este script usa DOM e deve correr no browser.");
  console.log("Abre 10_JavaScript_DOM/10.3_dom_lista_tarefas.html e usa a consola (F12).");
} else {

// Array que representa o estado da aplicacao em memoria.
// Cada objeto neste array sera uma tarefa.
const tarefas = [];

// Captura o formulario principal usado para criar tarefas.
const formTarefa = document.getElementById("form-tarefa");
// Captura o input de texto onde o utilizador escreve o titulo da tarefa.
const inputTitulo = document.getElementById("titulo");
// Captura o select onde o utilizador escolhe a categoria da tarefa.
const selectCategoria = document.getElementById("categoria");
// Captura o input de pesquisa por texto.
const inputFiltroTexto = document.getElementById("filtro-texto");
// Captura o select que filtra por estado (abertas/concluidas).
const selectFiltroEstado = document.getElementById("filtro-estado");
// Captura a ul onde as tarefas vao ser renderizadas.
const listaTarefas = document.getElementById("lista-tarefas");
// Captura o paragrafo usado para feedback visual.
const feedback = document.getElementById("feedback");

// Funcao utilitaria para escrever mensagens de sucesso/erro no ecra.
function mostrarFeedback(mensagem, erro = false) {
  // Define o texto da mensagem.
  feedback.textContent = mensagem;
  // Se erro=true aplica vermelho, caso contrario verde.
  feedback.style.color = erro ? "#b91c1c" : "#0f766e";
}

// Funcao que devolve apenas as tarefas que passam nos filtros atuais.
function obterTarefasFiltradas() {
  // Le o filtro de texto e normaliza para minusculas.
  const termo = inputFiltroTexto.value.trim().toLowerCase();
  // Le o filtro de estado (todos/abertas/concluidas).
  const estado = selectFiltroEstado.value;

  // filter cria um novo array apenas com os itens que cumprem a condicao.
  return tarefas.filter((tarefa) => {
    // Verifica se o titulo contem o termo pesquisado.
    const textoOk = tarefa.titulo.toLowerCase().includes(termo);

    // Assume que o estado esta valido e corrige consoante o filtro selecionado.
    let estadoOk = true;

    // Se o filtro for "abertas", apenas aceita tarefas nao concluidas.
    if (estado === "abertas") {
      estadoOk = !tarefa.concluida;
    }

    // Se o filtro for "concluidas", apenas aceita tarefas concluidas.
    if (estado === "concluidas") {
      estadoOk = tarefa.concluida;
    }

    // A tarefa entra no resultado apenas se passar texto e estado.
    return textoOk && estadoOk;
  });
}

// Funcao principal de renderizacao da lista no DOM.
function renderizarTarefas() {
  // Limpa todo o conteudo atual da lista antes de voltar a desenhar.
  listaTarefas.innerHTML = "";

  // Obtem a lista ja filtrada com base nos controlos do utilizador.
  const dados = obterTarefasFiltradas();

  // Se nao houver resultados, mostra estado vazio e termina.
  if (dados.length === 0) {
    // Cria um item de lista para informar que nao existem tarefas.
    const vazio = document.createElement("li");
    // Define o texto desse item.
    vazio.textContent = "Sem tarefas para mostrar.";
    // Coloca o item na ul.
    listaTarefas.appendChild(vazio);
    // Encerra a funcao para evitar renderizacao seguinte.
    return;
  }

  // Percorre cada tarefa filtrada para criar um item visual.
  dados.forEach((tarefa) => {
    // Cria o elemento li que representa uma tarefa.
    const item = document.createElement("li");
    // Guarda o id da tarefa no DOM para futuras acoes (concluir/remover).
    item.dataset.id = String(tarefa.id);

    // Cria um bloco para conter titulo e tag de categoria.
    const blocoTexto = document.createElement("div");

    // Cria um span para o titulo da tarefa.
    const titulo = document.createElement("span");
    // Escreve o titulo vindo do estado em memoria.
    titulo.textContent = tarefa.titulo;
    // Atribui classe base para estilo comum.
    titulo.className = "titulo-tarefa";

    // Se a tarefa estiver concluida, aplica classe visual de risco.
    if (tarefa.concluida) {
      titulo.classList.add("concluida");
    }

    // Cria uma tag visual com a categoria.
    const tag = document.createElement("span");
    // Define texto da tag.
    tag.textContent = tarefa.categoria;
    // Define classe para estilo da tag.
    tag.className = "tag";

    // Adiciona titulo e tag ao bloco de texto.
    blocoTexto.appendChild(titulo);
    blocoTexto.appendChild(tag);

    // Cria bloco de botoes de acao.
    const acoes = document.createElement("div");
    // Classe para alinhar os botoes horizontalmente.
    acoes.className = "acoes";

    // Cria botao para concluir/reabrir tarefa.
    const botaoConcluir = document.createElement("button");
    // Define tipo button para nao submeter formularios por acidente.
    botaoConcluir.type = "button";
    // Classe de estilo comum.
    botaoConcluir.className = "btn-secundario";
    // Guarda a acao no dataset para leitura no evento delegado.
    botaoConcluir.dataset.acao = "concluir";
    // Texto muda conforme estado da tarefa.
    botaoConcluir.textContent = tarefa.concluida ? "Reabrir" : "Concluir";

    // Cria botao para remover tarefa.
    const botaoRemover = document.createElement("button");
    // Define tipo button para evitar submit.
    botaoRemover.type = "button";
    // Classe visual comum.
    botaoRemover.className = "btn-secundario";
    // Define acao "remover" no dataset.
    botaoRemover.dataset.acao = "remover";
    // Texto do botao.
    botaoRemover.textContent = "Remover";

    // Coloca os dois botoes no bloco de acoes.
    acoes.appendChild(botaoConcluir);
    acoes.appendChild(botaoRemover);

    // Monta o item final com texto e botoes.
    item.appendChild(blocoTexto);
    item.appendChild(acoes);

    // Insere o item na lista visual.
    listaTarefas.appendChild(item);
  });
}

// Evento submit do formulario para adicionar tarefa nova.
formTarefa.addEventListener("submit", (evento) => {
  // Impede o comportamento padrao do browser (refresh da pagina).
  evento.preventDefault();

  // Le titulo e remove espacos extras.
  const titulo = inputTitulo.value.trim();
  // Le categoria selecionada.
  const categoria = selectCategoria.value;

  // Regra de validacao minima para titulo.
  if (titulo.length < 3) {
    // Mostra erro e termina o fluxo.
    mostrarFeedback("O titulo deve ter pelo menos 3 caracteres.", true);
    return;
  }

  // Cria objeto tarefa com estrutura padrao da aplicacao.
  const novaTarefa = {
    // Usa timestamp como id simples para exemplo didatico.
    id: Date.now(),
    // Guarda titulo validado.
    titulo,
    // Guarda categoria.
    categoria,
    // Nova tarefa entra sempre como nao concluida.
    concluida: false,
  };

  // Adiciona objeto novo ao estado em memoria.
  tarefas.push(novaTarefa);

  // Limpa campos do formulario para proxima insercao.
  formTarefa.reset();
  // Mostra mensagem de sucesso.
  mostrarFeedback("Tarefa adicionada com sucesso.");
  // Atualiza a lista no ecra.
  renderizarTarefas();
});

// Delegacao de eventos: um unico listener para todos os botoes da lista.
listaTarefas.addEventListener("click", (evento) => {
  // Verifica se o clique veio de um botao.
  const botao = evento.target.closest("button");
  // Se nao houver botao, ignora o clique.
  if (!botao) return;

  // Procura o li associado ao botao clicado.
  const item = evento.target.closest("li");
  // Se nao encontrar item, ignora.
  if (!item) return;

  // Le id da tarefa guardado no dataset do li.
  const id = Number(item.dataset.id);
  // Le tipo de acao guardado no dataset do botao.
  const acao = botao.dataset.acao;
  // Encontra indice da tarefa no array em memoria.
  const indice = tarefas.findIndex((tarefa) => tarefa.id === id);

  // Se nao existir no array, termina.
  if (indice === -1) return;

  // Se a acao for concluir, alterna estado concluida.
  if (acao === "concluir") {
    tarefas[indice].concluida = !tarefas[indice].concluida;
  }

  // Se a acao for remover, elimina item do array.
  if (acao === "remover") {
    tarefas.splice(indice, 1);
  }

  // Re-renderiza para refletir mudancas no ecra.
  renderizarTarefas();
});

// Atualiza lista quando o utilizador escreve no filtro de texto.
inputFiltroTexto.addEventListener("input", renderizarTarefas);
// Atualiza lista quando o utilizador muda filtro de estado.
selectFiltroEstado.addEventListener("change", renderizarTarefas);

// Render inicial para mostrar estado vazio ao carregar pagina.
renderizarTarefas();
}
