// ========================================
// 12.2 OBJETOS PROFISSIONAIS
// ========================================
// Objetivo: modelar entidades com objetos e criar operacoes de negocio.

// Objeto principal representando um projeto.
const projeto = {
  // Identificador unico do projeto.
  id: 101,
  // Nome exibido no sistema.
  nome: "Portfolio Frontend",
  // Array com tecnologias usadas.
  stack: ["HTML", "CSS", "JavaScript"],
  // Estado atual do projeto.
  estado: "em desenvolvimento",
  // Objeto aninhado com dados do responsavel.
  owner: {
    nome: "Formando A",
    email: "formando.a@email.pt",
  },
  // Metodo do objeto para atualizar estado interno.
  atualizarEstado(novoEstado) {
    this.estado = novoEstado;
  },
};

// Mostra o objeto completo no console.
console.log("Projeto inicial:", projeto);

// Chama metodo para mudar estado do projeto.
projeto.atualizarEstado("pronto para revisao");
// Confirma novo estado.
console.log("Projeto atualizado:", projeto.estado);

// Array de objetos para representar backlog de tarefas.
const backlog = [
  { id: 1, titulo: "Criar header", feito: true, prioridade: 2 },
  { id: 2, titulo: "Montar formulario", feito: false, prioridade: 1 },
  { id: 3, titulo: "Validar campos", feito: false, prioridade: 1 },
];

// Funcao que adiciona tarefa ao backlog e devolve o objeto criado.
function adicionarTarefa(titulo, prioridade = 3) {
  // Monta novo objeto tarefa.
  const nova = {
    // Usa timestamp como id simples.
    id: Date.now(),
    // Titulo recebido por parametro.
    titulo,
    // Nova tarefa entra como nao concluida.
    feito: false,
    // Prioridade recebida ou default.
    prioridade,
  };

  // Guarda no array principal.
  backlog.push(nova);
  // Devolve para uso imediato (log, UI, etc.).
  return nova;
}

// Funcao para concluir tarefa por id.
function concluirTarefa(id) {
  // Procura tarefa no array.
  const tarefa = backlog.find((item) => item.id === id);
  // Se nao encontrar, devolve false.
  if (!tarefa) return false;

  // Marca tarefa como concluida.
  tarefa.feito = true;
  // Devolve sucesso.
  return true;
}

// Funcao para remover tarefa por id.
function removerTarefa(id) {
  // Procura indice para poder usar splice.
  const indice = backlog.findIndex((item) => item.id === id);
  // Se nao existir, devolve false.
  if (indice === -1) return false;

  // Remove exatamente 1 elemento na posicao encontrada.
  backlog.splice(indice, 1);
  // Devolve sucesso.
  return true;
}

// Cria uma nova tarefa e guarda referencia.
const criada = adicionarTarefa("Publicar versao final", 1);
console.log("Nova tarefa:", criada);

// Marca tarefa com id 2 como concluida.
concluirTarefa(2);
// Remove tarefa com id 1.
removerTarefa(1);

// Ordena backlog por prioridade para visualizacao final.
const backlogOrdenado = [...backlog].sort((a, b) => a.prioridade - b.prioridade);
console.log("Backlog final:", backlogOrdenado);
