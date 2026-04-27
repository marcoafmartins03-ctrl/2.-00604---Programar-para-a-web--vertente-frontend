// ========================================
// 13.2 PROGRAMACAO FUNCIONAL (BASE)
// ========================================
// Objetivo: usar funcoes puras, composicao e imutabilidade.

// Lista de transacoes para exemplo financeiro.
const transacoes = [
  { id: 1, tipo: "entrada", valor: 1200 },
  { id: 2, tipo: "saida", valor: 250 },
  { id: 3, tipo: "saida", valor: 130 },
  { id: 4, tipo: "entrada", valor: 400 },
];

// Funcao pura: mesmo input -> mesmo output, sem efeitos colaterais.
function saldoAtual(lista) {
  // Reduce acumula saldo final a partir do array de transacoes.
  return lista.reduce((saldo, transacao) => {
    // Se entrada, adiciona valor ao saldo.
    if (transacao.tipo === "entrada") return saldo + transacao.valor;
    // Se saida, subtrai valor ao saldo.
    return saldo - transacao.valor;
  }, 0);
}

// Calcula saldo atual com base nas transacoes.
console.log("Saldo:", saldoAtual(transacoes));

// Composicao funcional: filter -> map -> reduce.
const totalEntradas = transacoes
  // Filtra apenas transacoes de entrada.
  .filter((item) => item.tipo === "entrada")
  // Extrai apenas o valor numerico.
  .map((item) => item.valor)
  // Soma os valores filtrados.
  .reduce((soma, valor) => soma + valor, 0);

// Mostra total de entradas.
console.log("Total entradas:", totalEntradas);

// Exemplo de imutabilidade: cria novo array sem mutar original.
const transacoesComTaxa = transacoes.map((item) => {
  // Se nao for saida, devolve item original sem alteracao.
  if (item.tipo !== "saida") return item;

  // Se for saida, cria copia do objeto com valor ajustado.
  return { ...item, valor: Number((item.valor * 1.02).toFixed(2)) };
});

// Mostra que array original continua intacto.
console.log("Original:", transacoes);
// Mostra nova versao com taxa aplicada nas saidas.
console.log("Com taxa:", transacoesComTaxa);
