// ========================================
// 9.6 OBJETOS
// ========================================
// Objetivo: modelar entidades com propriedades e metodos.

// Cria um objeto com dados de um utilizador.
const utilizador = {
  id: 1,
  nome: "Ana",
  email: "ana@email.pt",
  ativo: true,
};

// Leitura de propriedades com notacao de ponto.
console.log("Nome:", utilizador.nome);

// Atualizacao de propriedade existente.
utilizador.ativo = false;
console.log("Ativo:", utilizador.ativo);

// Adicao de nova propriedade.
utilizador.perfil = "formanda";
console.log("Perfil:", utilizador.perfil);

// Metodo dentro do objeto.
const produto = {
  nome: "Teclado",
  preco: 45,
  calcularIva() {
    // Devolve o valor do IVA a 23% para este produto.
    return this.preco * 0.23;
  },
};

console.log("IVA do produto:", produto.calcularIva());

// Array de objetos para casos reais.
const encomendas = [
  { id: 1, cliente: "Rita", total: 120 },
  { id: 2, cliente: "Luis", total: 80 },
  { id: 3, cliente: "Marta", total: 200 },
];

// Filtra encomendas acima de 100 euros.
const encomendasGrandes = encomendas.filter((encomenda) => encomenda.total > 100);
console.log("Encomendas > 100:", encomendasGrandes);

// Obtem apenas os nomes dos clientes.
const clientes = encomendas.map((encomenda) => encomenda.cliente);
console.log("Clientes:", clientes);
