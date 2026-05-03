/*

const palavra = "banana"

palavra.toUpperCase()

palavra.toLowerCase()

 

const num = 2.6

Math.round(num)

 

 

const vetor= [1, 3, 4, "5"]

 

vetor.length // 4

vetor[0] // 1

vetor.push(10) // [1, 3, 4, "5", 10]

vetor.pop()

vetor.shift("2")

vetor.unshift()

vetor.slice(1,2) // [3,4]

 

Math.max(vetor)

 

 

 

const legumes = ["alface", "curgete", "pepino"]

 

const legumesMaiusculas = legumes.map(

    (legume) => legume.toUpperCase()

)

 

const legumesFiltrados = legumes.filter(

    (legume) => legume.startsWith("c")

)

 

console.log(legumesMaiusculas)

// [ALFACE, CURGETE, PEPINO]

console.log(legumesFiltrados)

//[alface]

 

const numeros = [1, 3, 6, 10]

 

const numsDobro = numeros.map(

    (numero) => numero*2

)

console.log(numsDobro)

// 2, 6, 12, 20


//OBJETOS

 

const utilizador = {

    id: 1,

    nome: "Ana",

    email: "ana@email.com",

    ativo: true

}

 

console.log(utilizador.nome)

 

utilizador.ativo = false;

utilizador.nome = "Luciana";

console.log(utilizador)

 

 

 

const encomendas = [

    { id: 1, cliente: "Rita", total: 120},

    { id: 2, cliente: "Luis", total: 80},

    { id: 3, cliente:"Marta", total: 200}

]

 

encomendas[1].cliente = "António"

console.log(encomendas[1])

 

const encomendasFiltradas = encomendas.filter(

    (encomenda) => encomenda.total > 100

)

console.log(encomendasFiltradas)

*/


// ========================================

// EXERCICIO 3: ENCONTRAR O MAIOR

// ========================================

// Dado um array de numeros, devolve o maior valor.

// Nao usar Math.max().

//

// Exemplo:

//   encontrarMaior([3, 7, 2, 9, 1])  -> 9

//   encontrarMaior([10])              -> 10

//   encontrarMaior([-5, -2, -8])      -> -2

//

// Dica: comecar com o primeiro elemento e comparar com os restantes.



// TODO: escreve o teu codigo aqui

function encontrarMaior(numeros) {
    let maior = numeros[0];

    for (let i = 1; i < numeros.length; i++){

    if (numeros[i] > maior){
        maior = numeros[i]
    }
}

return maior;
}

console.log(encontrarMaior([3, 7, 2, 9, 1]))


// ========================================

// EXERCICIO 4: FIZZBUZZ

// ========================================

// Dado um numero n, devolve um array com os valores de 1 ate n onde:

//  - Multiplos de 3 -> "Fizz"

//  - Multiplos de 5 -> "Buzz"

//  - Multiplos de 3 E 5 -> "FizzBuzz"

//  - Outros -> o proprio numero (como string)

//

// Exemplo:

//   fizzBuzz(5)  -> ["1", "2", "Fizz", "4", "Buzz"]

//   fizzBuzz(15) -> ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]

//

// Dica: usar o operador % (modulo) para verificar divisibilidade.

// .push(n)

function fizzBuzz(n) {

// TODO: escreve o teu codigo aqui
    const resultado = []
    for (let i = 1; i <= n; i++){

        if (i % 3 === 0 && i % 5 === 0){
            resultado.push("FizzBuzz")
        } else if(i % 3 === 0){
            resultado.push("Fizz")
        } else if(i % 5 === 0){
            resultado.push("Buzz")
        } else {
            resultado.push(i)
        }

        }

    return resultado;
}

console.log(fizzBuzz(15))


