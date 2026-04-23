// ========================================
// JAVASCRIPT BASICS - CONCEITOS FUNDAMENTAIS
// Guia de referência rápida
// ========================================

// ========================================
// 1. SINTAXE BÁSICA
// ========================================

// JavaScript pode ser incluído em HTML de várias formas:
// <script>código aqui</script> - Script inline
// <script src="ficheiro.js"></script> - Ficheiro externo

// Comentários
// Comentário de uma linha
/* Comentário de 
   múltiplas linhas */

// Declarações - três tipos principais:
// var - escopo global/função (evitar)
// let - escopo de bloco (preferir)
// const - constante, escopo de bloco

// ========================================
// 2. VARIÁVEIS
// ========================================

// Declaração de variáveis
let nome = "João";
let idade = 25;
let altura = 1.75;
let ativo = true;
let cores = ["vermelho", "verde", "azul"];

// Constantes
const PI = 3.14159;
const API_URL = "https://api.exemplo.com";

// Verificar tipo de variável
console.log(typeof variavel);     // Mostra o tipo
console.log(variavel.constructor.name); // Nome do construtor
Array.isArray(variavel);          // Verifica se é array
Number.isInteger(variavel);       // Verifica se é integer

// ========================================
// 3. TIPOS DE DADOS
// ========================================

// String - texto
let texto = "Olá Mundo";
let texto2 = 'Texto simples';
let texto3 = `Template string com ${nome}`; // Template literals (ES6)

// Number - números (inteiros e decimais)
let numero = 42;
let negativo = -10;
let zero = 0;
let preco = 19.99;
let pi = 3.14159;

// Boolean - verdadeiro/falso
let verdadeiro = true;
let falso = false;

// Array - coleção de valores
let frutas = ["maçã", "laranja", "banana"];  // Array indexado
let matriz = [[1, 2], [3, 4]];  // Array multidimensional

// Object - coleção chave-valor
let pessoa = {
    nome: "João",
    idade: 25,
    ativo: true
};

// Null e Undefined
let valor = null;        // Valor explicitamente nulo
let indefinido;          // undefined (não atribuído)

// Symbol (ES6) - identificador único
let simbolo = Symbol("id");

// ========================================
// 4. OPERADORES
// ========================================

// Operadores aritméticos
let a = 10;
let b = 3;

let soma = a + b;           // 13
let subtracao = a - b;      // 7
let multiplicacao = a * b;  // 30
let divisao = a / b;        // 3.333...
let modulo = a % b;         // 1 (resto da divisão)
let potencia = a ** b;      // 1000 (ES7)

// Incremento/Decremento
let i = 5;
i++;    // i = 6 (incremento pós-fixado)
++i;    // i = 7 (incremento pré-fixado)
i--;    // i = 6 (decremento pós-fixado)
--i;    // i = 5 (decremento pré-fixado)

// Operadores de comparação
a == b;   // Igual (valor) - coerção de tipo
a === b;  // Igual estrito (valor e tipo)
a != b;   // Diferente (valor)
a !== b;  // Diferente estrito (valor ou tipo)
a < b;    // Menor que
a > b;    // Maior que
a <= b;   // Menor ou igual
a >= b;   // Maior ou igual

// Operadores lógicos
let condicao1 = true;
let condicao2 = false;

let resultado = condicao1 && condicao2;  // AND lógico
resultado = condicao1 || condicao2;      // OR lógico
resultado = !condicao1;                  // NOT lógico

// Operadores de string
let nome = "João";
let sobrenome = "Silva";
let nomeCompleto = nome + " " + sobrenome;  // "João Silva"
// ou usando template literals:
let nomeCompletoTemplate = `${nome} ${sobrenome}`;

// ========================================
// 5. STRINGS
// ========================================

// Métodos básicos de string
let texto = "  Olá, Mundo!  ";

texto.length;                       // Comprimento da string
texto.toUpperCase();                // Converter para maiúsculas
texto.toLowerCase();                // Converter para minúsculas
texto.trim();                       // Remove espaços no início e fim
texto.trimStart();                  // Remove espaços à esquerda
texto.trimEnd();                    // Remove espaços à direita
texto.substring(0, 4);              // Substring (início, fim)
texto.substr(0, 4);                 // Substring (posição, comprimento)
texto.indexOf("Mundo");             // Posição da primeira ocorrência
texto.lastIndexOf("o");             // Posição da última ocorrência
texto.includes("Mundo");            // Verificar se contém
texto.startsWith("Olá");            // Verificar se começa com
texto.endsWith("!");                // Verificar se termina com
texto.replace("Mundo", "JavaScript"); // Substituir texto (primeira ocorrência)
texto.replaceAll("o", "0");         // Substituir todas as ocorrências (ES2021)
texto.split(",");                   // Dividir string em array
texto.charAt(0);                    // Caractere na posição
texto.charCodeAt(0);                // Código ASCII do caractere

// Template literals (ES6)
let nome = "João";
let idade = 25;
let mensagem = `Olá, ${nome}! Tens ${idade} anos.`;

// ========================================
// 6. ARRAYS
// ========================================

// Criar arrays
let array1 = ["a", "b", "c"];  // Array literal
let array2 = new Array("x", "y", "z");  // Construtor
let array3 = [];  // Array vazio

// Aceder a elementos
let primeiro = array1[0];           // "a"
let ultimo = array1[array1.length - 1]; // "c"

// Métodos de array
let array = ["a", "b", "c"];

array.length;                       // Número de elementos
array.push("d");                    // Adicionar ao final
array.pop();                        // Remover do final
array.unshift("z");                 // Adicionar ao início
array.shift();                      // Remover do início
array.includes("b");                // Verificar se existe
array.indexOf("b");                 // Procurar e retornar índice
array.lastIndexOf("b");             // Última ocorrência
array.concat(["e", "f"]);           // Concatenar arrays
array.join(",");                    // Juntar elementos em string
array.slice(1, 3);                  // Extrair porção (início, fim)
array.splice(1, 2, "x", "y");       // Modificar array (posição, deletar, inserir)
array.reverse();                    // Inverter ordem
array.sort();                       // Ordenar alfabeticamente
array.sort((a, b) => a - b);        // Ordenar numericamente

// Métodos funcionais (ES5+)
let numeros = [1, 2, 3, 4, 5];
numeros.forEach(num => console.log(num));        // Iterar
let dobrados = numeros.map(num => num * 2);      // Transformar
let pares = numeros.filter(num => num % 2 === 0); // Filtrar
let soma = numeros.reduce((acc, num) => acc + num, 0); // Reduzir
let temPar = numeros.some(num => num % 2 === 0); // Algum elemento
let todosPares = numeros.every(num => num % 2 === 0); // Todos elementos
let primeiro = numeros.find(num => num > 3);     // Encontrar elemento
let indice = numeros.findIndex(num => num > 3);  // Encontrar índice

// ========================================
// 7. OBJETOS
// ========================================

// Criar objetos
let objeto1 = {
    nome: "João",
    idade: 25,
    ativo: true
};

let objeto2 = new Object();  // Construtor
objeto2.nome = "Maria";

let objeto3 = {};  // Objeto vazio

// Aceder a propriedades
let nome = objeto1.nome;        // Notação de ponto
let idade = objeto1["idade"];   // Notação de colchetes

// Métodos de objeto
Object.keys(objeto1);           // Array das chaves
Object.values(objeto1);         // Array dos valores
Object.entries(objeto1);        // Array de pares [chave, valor]
Object.assign({}, objeto1);     // Copiar objeto
Object.hasOwnProperty.call(objeto1, "nome"); // Verificar se tem propriedade
delete objeto1.idade;          // Eliminar propriedade

// Desestruturação (ES6)
let {nome, idade} = objeto1;    // Extrair propriedades

// ========================================
// 8. ESTRUTURAS DE CONTROLO
// ========================================

// IF/ELSE
let idade = 18;

if (idade >= 18) {
    console.log("Maior de idade");
} else if (idade >= 12) {
    console.log("Adolescente");
} else {
    console.log("Criança");
}

// Operador ternário
let status = (idade >= 18) ? "Adulto" : "Menor";

// Switch
let dia = "Segunda";

switch (dia) {
    case "Segunda":
        console.log("Início da semana");
        break;
    case "Sexta":
        console.log("Fim da semana");
        break;
    default:
        console.log("Dia normal");
}

// ========================================
// 9. LOOPS
// ========================================

// For tradicional
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While
let contador = 0;
while (contador < 3) {
    console.log(contador);
    contador++;
}

// Do-While
let numero = 1;
do {
    console.log(numero);
    numero *= 2;
} while (numero < 10);

// For...of (iterar valores)
let cores = ["vermelho", "verde", "azul"];
for (let cor of cores) {
    console.log(cor);
}

// For...in (iterar chaves/índices)
let pessoa = {nome: "João", idade: 25};
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}

// ForEach
cores.forEach((cor, indice) => {
    console.log(`${indice}: ${cor}`);
});

// ========================================
// 10. FUNÇÕES
// ========================================

// Declaração de função
function saudar(nome) {
    return `Olá, ${nome}!`;
}

// Expressão de função
let calcular = function(a, b = 10) {
    return a + b;
};

// Arrow functions (ES6)
let somar = (a, b) => a + b;
let quadrado = x => x * x;
let cumprimentar = () => "Olá!";

// Função com rest parameters
function somarTodos(...numeros) {
    return numeros.reduce((acc, num) => acc + num, 0);
}

// Função recursiva
function fatorial(n) {
    if (n <= 1) return 1;
    return n * fatorial(n - 1);
}

// Função como callback
function processarArray(array, callback) {
    return array.map(callback);
}

// Closures
function criarContador() {
    let count = 0;
    return function() {
        return ++count;
    };
}

// ========================================
// 11. DOM E EVENTOS
// ========================================

// Seleção de elementos
document.getElementById('id');          // Por ID
document.getElementsByClassName('classe'); // Por classe
document.getElementsByTagName('div');   // Por tag
document.querySelector('.classe');      // Primeiro elemento (CSS selector)
document.querySelectorAll('.classe');   // Todos os elementos

// Manipulação de conteúdo
let elemento = document.getElementById('meuElemento');
elemento.innerHTML = '<p>HTML</p>';     // Conteúdo HTML
elemento.textContent = 'Texto';         // Apenas texto
elemento.value = 'Valor do input';      // Valor de input

// Manipulação de atributos
elemento.setAttribute('class', 'nova-classe');
elemento.getAttribute('id');
elemento.removeAttribute('title');
elemento.classList.add('classe');
elemento.classList.remove('classe');
elemento.classList.toggle('classe');

// Manipulação de estilos
elemento.style.color = 'red';
elemento.style.backgroundColor = 'blue';

// Eventos
elemento.addEventListener('click', function(event) {
    console.log('Elemento clicado!');
    event.preventDefault(); // Prevenir comportamento padrão
});

// ========================================
// 12. FORMULÁRIOS E VALIDAÇÃO
// ========================================

// Acesso a formulários
let formulario = document.forms['meuFormulario'];
let campo = formulario.elements['nomeCampo'];

// Validação básica
function validarEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarFormulario(event) {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    // Exemplo de entrada vulnerável (para demonstração)
    let q = new URLSearchParams(window.location.search).get('q') || '';
    document.getElementById('resultado').innerHTML = `<h1>Resultados para: ${q}</h1>`;
    
    // SQL Injection simulado em JavaScript (exemplo educativo)
    let query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    console.log('Query simulada:', query);
    
    if (!username || !password) {
        alert('Preencha todos os campos!');
        event.preventDefault();
        return false;
    }
    
    return true;
}

// Sanitização básica
function escaparHTML(texto) {
    let div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
}

// ========================================
// 13. ARMAZENAMENTO LOCAL
// ========================================

// localStorage (permanente)
localStorage.setItem('usuario', 'joao');
let usuario = localStorage.getItem('usuario');
localStorage.removeItem('usuario');
localStorage.clear();

// sessionStorage (sessão)
sessionStorage.setItem('token', 'abc123');
let token = sessionStorage.getItem('token');

// Cookies (básico)
function setCookie(nome, valor, dias) {
    let data = new Date();
    data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));
    let expires = "expires=" + data.toUTCString();
    document.cookie = nome + "=" + valor + ";" + expires + ";path=/";
}

function getCookie(nome) {
    let nomeEq = nome + "=";
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nomeEq) === 0) {
            return cookie.substring(nomeEq.length, cookie.length);
        }
    }
    return "";
}

// ========================================
// 14. AJAX E FETCH API
// ========================================

// XMLHttpRequest (tradicional)
let xhr = new XMLHttpRequest();
xhr.open('GET', '/api/dados');
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let dados = JSON.parse(xhr.responseText);
        console.log(dados);
    }
};
xhr.send();

// Fetch API (moderno)
fetch('/api/dados')
    .then(response => response.json())
    .then(dados => console.log(dados))
    .catch(error => console.error('Erro:', error));

// Async/Await (ES2017)
async function obterDados() {
    try {
        let response = await fetch('/api/dados');
        let dados = await response.json();
        return dados;
    } catch (error) {
        console.error('Erro:', error);
    }
}

// ========================================
// 15. TRATAMENTO DE ERROS
// ========================================

// Try/Catch
try {
    let resultado = JSON.parse('json inválido');
} catch (error) {
    console.error('Erro:', error.message);
} finally {
    console.log('Sempre executa');
}

// Lançar erros personalizados
function dividir(a, b) {
    if (b === 0) {
        throw new Error('Divisão por zero não permitida');
    }
    return a / b;
}

// Promises com tratamento de erro
fetch('/api/dados')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        return response.json();
    })
    .catch(error => console.error('Erro na requisição:', error));

// ========================================
// 16. CLASSES E OBJETOS (ES6+)
// ========================================

// Declaração de classe
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    falar() {
        return `${this.nome} está a falar`;
    }
    
    static criar(nome, idade) {
        return new Pessoa(nome, idade);
    }
}

// Herança
class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }
    
    estudar() {
        return `${this.nome} está a estudar ${this.curso}`;
    }
}

// ========================================
// 17. MÓDULOS (ES6)
// ========================================

// Exportar (ficheiro utils.js)
export function somar(a, b) {
    return a + b;
}

export const PI = 3.14159;

export default class Calculator {
    static add(a, b) { return a + b; }
}

// Importar
import { somar, PI } from './utils.js';
import Calculator from './utils.js';
import * as Utils from './utils.js';

// ========================================
// 18. FUNÇÕES ÚTEIS
// ========================================

// Datas
let agora = new Date();
let timestamp = Date.now();
let data = new Date('2024-01-01');
let formatada = agora.toLocaleDateString();
let iso = agora.toISOString();

// Matemática
Math.abs(numero);           // Valor absoluto
Math.ceil(numero);          // Arredondar para cima
Math.floor(numero);         // Arredondar para baixo
Math.round(numero);         // Arredondar
Math.random();              // Número aleatório 0-1
Math.max(1, 2, 3);          // Valor máximo
Math.min(1, 2, 3);          // Valor mínimo
Math.pow(2, 3);             // Potência
Math.sqrt(16);              // Raiz quadrada

// JSON
let objeto = {nome: "João", idade: 25};
let json = JSON.stringify(objeto);     // Objeto para JSON
let objetoNovo = JSON.parse(json);     // JSON para objeto

// Timers
setTimeout(() => console.log('Depois de 1s'), 1000);
setInterval(() => console.log('A cada 2s'), 2000);
let timer = setInterval(callback, 1000);
clearInterval(timer);

// ========================================
// 19. BOAS PRÁTICAS
// ========================================

// 1. Use 'const' por padrão, 'let' quando precisar mudar
// 2. Evite 'var' - use 'let' ou 'const'
// 3. Use nomes descritivos para variáveis e funções
// 4. Valide sempre dados de entrada
// 5. Use === em vez de == para comparações
// 6. Trate erros adequadamente com try/catch
// 7. Use arrow functions quando apropriado
// 8. Evite poluir o escopo global
// 9. Use métodos de array funcionais (map, filter, reduce)
// 10. Sempre escape conteúdo antes de inserir no DOM

// ========================================
// RESUMO RÁPIDO
// ========================================

// Variáveis: let/const variavel
// Strings: "texto", 'texto', `template ${var}`
// Arrays: ["item1", "item2"] - métodos: push, pop, map, filter
// Objetos: {chave: "valor"} - acesso: obj.chave ou obj["chave"]
// Funções: function nome() {} ou const nome = () => {}
// Loops: for, while, for...of, forEach
// Condicionais: if, else, switch, ternário
// DOM: getElementById, querySelector, addEventListener
// AJAX: fetch().then() ou async/await

// ========================================
// VULNERABILIDADES COMUNS EM JAVASCRIPT
// ========================================

// XSS - Cross-Site Scripting
// PROBLEMA: Inserir conteúdo não validado no DOM
let userInput = "<script>alert('XSS')</script>";
document.getElementById('output').innerHTML = userInput; // VULNERÁVEL

// SOLUÇÃO: Escapar ou usar textContent
document.getElementById('output').textContent = userInput; // SEGURO

// DOM-based XSS
let params = new URLSearchParams(window.location.search);
let name = params.get('name');
document.write("Olá " + name); // VULNERÁVEL

// Client-side validation bypass
// Nunca confie apenas em validação JavaScript
// Sempre validar no servidor também
