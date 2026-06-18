// SERVIDOR EM NODE

const marcacoes = [
    { id: 1, cliente: "Ana Silva", servico: "Consulta", preco: 50 },
    { id: 2, cliente: "Bruno Costa", servico: "Exame", preco: 80 },
    { id: 3, cliente: "Carla Dias", servico: "Revisao", preco: 30 },
  ];

// ENVIADO UM PEDIDO GET PARA LISTAR TODAS AS MARCAÇÕES
// GET

function listarMarcacoes(lista) {
  for (let i = 0; i < lista.length; i++) {

    console.log("[id] " + lista[i].id + " cliente: " + lista[i].cliente);
  }

  console.log("Total de marcações: " + lista.length);
}

listarMarcacoes(marcacoes);

// PUT

const marcacao = {
    cliente:"Diana",
    servico: "consulta",
    data: "2026-03-03",
    hora: "14:30",
    preco: 30
}

function criarMarcacao(lista, marcacao) {
    lista.push(
        {
            id: lista.length+1,
            ...marcacao
        }
    )

    return lista
}

console.log(criarMarcacao(marcacoes, marcacao))