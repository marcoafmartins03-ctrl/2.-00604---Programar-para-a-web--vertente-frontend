// ========================================
// 9.5 ARRAYS
// ========================================
// Objetivo: guardar colecoes de dados e operar sobre listas.

// Cria um array com tres elementos.
const tarefas = ["Estudar HTML", "Praticar CSS", "Rever JavaScript"];

// Acede ao primeiro elemento (indice 0).
console.log("Primeira tarefa:", tarefas[0]);

// Adiciona um elemento no fim do array.
tarefas.push("Construir pagina final");
console.log("Depois de push:", tarefas);

// Remove o ultimo elemento.
tarefas.pop();
console.log("Depois de pop:", tarefas);

// Itera com for classico.
for (let i = 0; i < tarefas.length; i += 1) {
  console.log(`Tarefa ${i + 1}: ${tarefas[i]}`);
}

// map: transforma cada elemento e devolve novo array.
const tarefasMaiusculas = tarefas.map((tarefa) => tarefa.toUpperCase());
console.log("Maiusculas:", tarefasMaiusculas);

// filter: seleciona apenas elementos que cumprem condicao.
const tarefasComCss = tarefas.filter((tarefa) => tarefa.includes("CSS"));
console.log("Com CSS:", tarefasComCss);

// reduce: agrega elementos num unico valor.
const tamanhos = tarefas.reduce((acumulador, tarefa) => acumulador + tarefa.length, 0);
console.log("Total de caracteres:", tamanhos);
