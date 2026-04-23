// ========================================
// 12.1 ARRAYS AVANCADOS
// ========================================
// Objetivo: aplicar metodos de array em cenarios de dados reais.

// Array de pedidos simulando dados de uma aplicacao.
const pedidos = [
  { id: 1, cliente: "Ana", total: 120, estado: "pendente" },
  { id: 2, cliente: "Luis", total: 40, estado: "enviado" },
  { id: 3, cliente: "Marta", total: 85, estado: "pendente" },
  { id: 4, cliente: "Joao", total: 210, estado: "enviado" },
];

// forEach percorre todos os elementos para efeitos laterais (log, DOM, etc.).
pedidos.forEach((pedido) => {
  // Mostra linha de resumo para cada pedido.
  console.log(`Pedido #${pedido.id} - ${pedido.cliente} - ${pedido.total} EUR`);
});

// filter cria novo array com pedidos pendentes.
const pendentes = pedidos.filter((pedido) => pedido.estado === "pendente");
console.log("Pendentes:", pendentes);

// map cria novo array apenas com nomes de cliente.
const nomesClientes = pedidos.map((pedido) => pedido.cliente);
console.log("Clientes:", nomesClientes);

// reduce agrega tudo num unico valor (faturacao total).
const faturacaoTotal = pedidos.reduce((acumulado, pedido) => {
  // Soma o total atual ao acumulador.
  return acumulado + pedido.total;
}, 0);
console.log("Faturacao total:", faturacaoTotal);

// some verifica se existe pelo menos um pedido acima de determinado valor.
const existePedidoAlto = pedidos.some((pedido) => pedido.total > 200);
console.log("Existe pedido > 200:", existePedidoAlto);

// every verifica se todos cumprem a regra.
const todosValidos = pedidos.every((pedido) => pedido.total > 0);
console.log("Todos os pedidos validos:", todosValidos);

// find devolve o primeiro item que cumpre a condicao.
const pedidoDoLuis = pedidos.find((pedido) => pedido.cliente === "Luis");
console.log("Pedido do Luis:", pedidoDoLuis);

// sort ordena arrays; fazemos copia para nao alterar o original.
const porTotalAsc = [...pedidos].sort((a, b) => a.total - b.total);
console.log("Ordenado por total asc:", porTotalAsc);
