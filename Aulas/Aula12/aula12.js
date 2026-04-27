let imposto
const salario = 2000;

if (salario >= 2200){
    imposto = salario*0,32;
} else if(salario < 2200 && salario >= 1500) {
    imposto = salario*0.26
} else {
    imposto = salario*0.21
}

console.log(salario) // 2000
console.log(imposto) // salario * 0.266

/*
>
<
>=
<=

a == b // equivalente
a = b // atribuição
a != b // diferente de
a === b // estritamente equivalente

|| // ou
&& // e

7 == 7 // verdadeiro
7 == "7" // verdadeiro
7 === "7" // falso - também compara o tipo de dados
*/

//ARRAY
let frutas = ["maçã", "laranja", "banana"]

//OBJECT
let pessoa = {
    nome:"João",
    idade: 25,
    ativo: true
}


/*

    const metodoPagamento = "mbway";

 

    switch(metodoPagamento){

        case "cartao":

            console.log("Pagamento com cartão");

            break;

        case "mbway":

            console.log("Pagamento com mbway");

            break;

        case "transferência":

            console.log("Pagamento com transferência")

            break;

        default:

            console.log("Metodo de pagamento inválido")

    }

*/

function calcularDesconto(preco, percentagem){
    
    if (percentagem < 0 || percentagem > 100){
        return "Percentagem inválida"
    }

    const desconto = (preco * (percentagem / 100));
    const precofinal = (preco - desconto);
    return precofinal;
}


console.log("Preço final:", calcularDesconto(80, 25))
// LOOPS - Ciclos


for (let i = 1; i <= 5; i++){

console.log("Número atual:", i)

}



let tentativas = 0;


while (tentativas < 3){

console.log("Tentativa", tentativas + 1)

//tentativas = tentativas +1;

tentativas +=1;

}


// CORRER CICLO FOR PARAR QUANDO O VALOR FOR 4

for (let i = 1; i <= 10; i++){

if(i == 4){
    console.log("Para no número 4:", i)
    break;
}

}

/*

//MÉTODOS - FUNÇÕES

 

let texto = " Olá Mundo!    ";

 

console.log("length da string:", texto.length);

console.log(texto.toUpperCase()) // Converter para maiúsculas

console.log(texto.toLowerCase()) // Converter para minúsculas

console.log(texto.trim()) //Remover espaços no início e no fim

 

console.log(texto.includes("Mundo"));

console.log(texto.startsWith("Olá"));

 

 

 

console.log(frutas)

//IMPRIMIR INDICE DO ARRAY

console.log(frutas[3])

//ADICIONAR ELEMENTOS AO FIM DO ARRAY

frutas.push("Abacate");

console.log(frutas)

//REMOVER O ÚLTIMO ELEMENTO

frutas.pop()

console.log(frutas)

 

 

frutas.push("Abacate");

for (let i=0; i < frutas.length; i++){

    console.log(frutas[i])

}

 

for(fruta of frutas){

    console.log(fruta)

}

const novoArray = [];

for (let i=0; i < frutas.length; i++){

    if(i == 0 || i == 2){

        novoArray.push(frutas[i].toUpperCase())

    } else {

        novoArray.push(frutas[i])

    }

  

}

console.log(novoArray)

const frutasMaiscula = frutas.map(

    (fruta) => fruta.toUpperCase()

)

console.log(frutasMaiscula)

const frutasFiltradas = frutas.filter((fruta) => fruta.includes("m"))

console.log(frutasFiltradas)

*/

// Tabuada do 7 - Mostra a tabuada do 7 (de 7×1 a 7×10)

for (let i = 1; i <= 10; i++){
    const resultado = i*7
    console.log(i + " x 7 = " + resultado)
}

// Soma de 1 a 100 - Calcula e mostra a soma de todos os números de 1 a 100.

let soma = 0;
for (let i=1; i <= 100; i++){
    soma = soma + 1
}

console.log(soma)


// Pares até 20 - Mostra apenas os números pares de 2 a 20 (usa for + if).

for(let i = 1; i <= 20; i++){
    if (i % 2 == 0){
        console.log(i)
    } else {
        console.log("Não é par")
    }
}