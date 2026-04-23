// ========================================
// 9.1 VARIAVEIS E TIPOS
// ========================================
// Objetivo: criar variaveis, alterar valores e compreender tipos basicos.

// "let" cria uma variavel cujo valor pode mudar durante o programa.
let nome = "Ana";
// Mostra o valor atual da variavel "nome".
console.log("Nome inicial:", nome);

// Atribui um novo valor a mesma variavel.
nome = "Bruno";
// Confirma no console que o valor foi atualizado.
console.log("Nome atualizado:", nome);

// "const" cria uma variavel que nao pode ser reatribuida.
const pais = "Portugal";
// Mostra o valor constante.
console.log("Pais:", pais);

// Tipos de dados basicos.
const idade = 25; // Number (inteiro)
const altura = 1.72; // Number (decimal)
const ativo = true; // Boolean (true/false)
const email = "ana@email.pt"; // String (texto)

// Mostra os valores.
console.log("Idade:", idade);
console.log("Altura:", altura);
console.log("Ativo:", ativo);
console.log("Email:", email);

// Operacoes com numeros.
const precoBase = 100;
const taxaIva = 0.23;
const precoFinal = precoBase + precoBase * taxaIva;
console.log("Preco final:", precoFinal);

// Concatenacao com template literal.
const mensagem = `Utilizador ${nome} (${email}) tem ${idade} anos.`;
console.log(mensagem);

// Verificacao de tipo com "typeof".
console.log("Tipo de nome:", typeof nome);
console.log("Tipo de idade:", typeof idade);
console.log("Tipo de ativo:", typeof ativo);
const num1 = 5;
const num2 = 8;
const soma = num1 + num2;
const dobro = soma * 2;
console.log("Resultado:", dobro);  // 26

// ========================================
// PARTE 5: EXERCÍCIO PRÁTICO GUIADO
// Tempo: 5 minutos
// ========================================

// // "Vamos criar um pequeno programa sobre um produto:"

// // 1. Informação do produto
const nomeProduto = "Portátil";
const precoProduto = 799.99;
const stockDisponivel = 5;
const emPromocao = true;

// 2. Calcular preço com desconto (se em promoção)
let precoComDesconto;

if (emPromocao) {
    precoComDesconto = precoProduto * 0.85;  // 15% desconto
} else {
    precoComDesconto = precoProduto;
}

// 3. Criar mensagem final
const mensagemFinal = `Produto: ${nomeProduto}
Preço original: €${precoProduto}
Preço com desconto: €${precoComDesconto.toFixed(2)}
Stock: ${stockDisponivel} unidades`;

console.log(mensagemFinal);



// ========================================
// NOTAS DIDATICAS:
// ========================================



// ERROS COMUNS:
// 1. Esquecer aspas em strings
// 2. Tentar mudar const
// 3. Esquecer ponto e vírgula (não é erro fatal, mas boa prática)
// 4. Confundir = (atribuição) com == (comparação)


