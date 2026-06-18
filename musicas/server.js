const express = require('express');
const app = express();
const PORT = 3000;
 
// Middleware para permitir que o Express entenda JSON no corpo (body) dos pedidos
app.use(express.json());
 
// BASE DE DADOS EM MEMÓRIA (ARRAY POPULADO)
const musicas = [
    {
        id: 1,
        titulo: "Bohemian Rhapsody",
        artista: "Queen",
        genero: "rock",
        ano: 1975,
        favorita: true,
        adicionadaEm: "2026-01-15T10:30:00.000Z"
    },
    {
        id: 2,
        titulo: "Lose Yourself",
        artista: "Eminem",
        genero: "hip-hop",
        ano: 2002,
        favorita: false,
        adicionadaEm: "2026-02-03T14:22:00.000Z"
    },
    {
        id: 3,
        titulo: "Take Five",
        artista: "Dave Brubeck",
        genero: "jazz",
        ano: 1959,
        favorita: false,
        adicionadaEm: "2026-02-18T09:15:00.000Z"
    },
    {
        id: 4,
        titulo: "Strobe",
        artista: "deadmau5",
        genero: "eletronico",
        ano: 2009,
        favorita: true,
        adicionadaEm: "2026-03-05T20:45:00.000Z"
    },
    {
        id: 5,
        titulo: "Clair de Lune",
        artista: "Claude Debussy",
        genero: "classico",
        ano: 1905,
        favorita: false,
        adicionadaEm: "2026-03-12T11:00:00.000Z"
    },
    {
        id: 6,
        titulo: "Garota de Ipanema",
        artista: "Tom Jobim",
        genero: "outro",
        ano: 1962,
        favorita: true,
        adicionadaEm: "2026-03-28T16:50:00.000Z"
    },
    {
        id: 7,
        titulo: "Chuva Dissolvida",
        artista: "Ornatos Violeta",
        genero: "rock",
        ano: 1999,
        favorita: true,
        adicionadaEm: "2026-04-10T08:30:00.000Z"
    },
    {
        id: 8,
        titulo: "Blinding Lights",
        artista: "The Weeknd",
        genero: "pop",
        ano: 2019,
        favorita: false,
        adicionadaEm: "2026-04-22T19:12:00.000Z"
    },
    {
        id: 9,
        titulo: "Around the World",
        artista: "Daft Punk",
        genero: "eletronico",
        ano: 1997,
        favorita: false,
        adicionadaEm: "2026-05-04T13:40:00.000Z"
    },
    {
        id: 10,
        titulo: "Despacito",
        artista: "Luis Fonsi",
        genero: "pop",
        ano: 2017,
        favorita: false,
        adicionadaEm: "2026-05-18T17:25:00.000Z"
    }
];
 
// Lista de géneros permitidos para validação pelas rotas
const generosValidos = ["pop", "rock", "hip-hop", "eletronico", "jazz", "classico", "outro"];
 
 
// =========================================================================
// HOMEPAGE -> GET /
// =========================================================================
app.get('/', (req, res) => {
    const mensagem = {
        mensagem: "Bem-vindo à jukebox!! Welcome to the jungle"
    };
    res.status(200).json(mensagem);
});
 
 
// =========================================================================
// 1. GET /api/musicas -> Listar todas as músicas
// =========================================================================
app.get('/api/musicas', (req, res) => {
 
    res.status(200).json({ total: musicas.length, musicas: musicas })
 
 
});
 
 
// =========================================================================
// 2. GET /api/musicas/:id -> Obter música por ID
// =========================================================================
app.get('/api/musicas/:id', (req, res) => {
    const id = Number(req.params.id);
    const musica = musicas.find(m => m.id === id);
 
    if (!musica) {
        return res.status(404).json({ erro: "Música não encontrada!" });
    }
 
    res.status(200).json(musica);
});
 
 
// =========================================================================
// 3. POST /api/musicas -> Adicionar nova música (Com ID Sequencial Seguro)
// =========================================================================
app.post('/api/musicas', (req, res) => {
    const { titulo, artista, genero, ano, favorita } = req.body;
    const anoAtual = new Date().getFullYear();
 
    // Validações defensivas de segurança contra campos inválidos ou vazios
    if (!titulo || typeof titulo !== 'string' || titulo.trim().length < 2) {
        return res.status(400).json({ erro: "O título é obrigatório e deve ter no mínimo 2 caracteres." });
    }
    if (!artista || typeof artista !== 'string' || artista.trim() === "") {
        return res.status(400).json({ erro: "O artista é obrigatório." });
    }
    if (!genero || typeof genero !== 'string' || !generosValidos.includes(genero.toLowerCase())) {
        return res.status(400).json({ erro: `O género é obrigatório e deve ser um dos seguintes: ${generosValidos.join(', ')}` });
    }
    if (!ano || typeof ano !== 'number' || ano < 1900 || ano > anoAtual) {
        return res.status(400).json({ erro: `O ano deve ser um número entre 1900 e ${anoAtual}.` });
    }
 
    // Lógica para calcular o próximo ID sequencial com base no maior existente
    const novoId = musicas.length > 0 ? Math.max(...musicas.map(m => m.id)) + 1 : 1;
 
    const novaMusica = {
        id: novoId,
        titulo: titulo.trim(),
        artista: artista.trim(),
        genero: genero.toLowerCase(),
        ano,
        favorita: typeof favorita === 'boolean' ? favorita : false,
        adicionadaEm: new Date().toISOString()
    };
 
    musicas.push(novaMusica);
    res.status(201).json(novaMusica);
});
 
 
// =========================================================================
// 4. PUT /api/musicas/:id -> Atualizar dados da música
// =========================================================================
app.put('/api/musicas/:id', (req, res) => {
    const id = Number(req.params.id);
    const musica = musicas.find(m => m.id === id);
 
    if (!musica) {
        return res.status(404).json({ erro: "Música não encontrada!" });
    }
 
    const { titulo, artista, genero, ano, favorita } = req.body;
    const anoAtual = new Date().getFullYear();
 
    // Validações condicionais (só valida se o campo tiver sido enviado no body)
    if (titulo !== undefined && (typeof titulo !== 'string' || titulo.trim().length < 2)) {
        return res.status(400).json({ erro: "O título deve ter no mínimo 2 caracteres." });
    }
    if (artista !== undefined && (typeof artista !== 'string' || artista.trim() === "")) {
        return res.status(400).json({ erro: "O artista não pode ser vazio." });
    }
    if (genero !== undefined && (typeof genero !== 'string' || !generosValidos.includes(genero.toLowerCase()))) {
        return res.status(400).json({ erro: `Género inválido. Escolha entre: ${generosValidos.join(', ')}` });
    }
    if (ano !== undefined && (typeof ano !== 'number' || ano < 1900 || ano > anoAtual)) {
        return res.status(400).json({ erro: `O ano deve estar entre 1900 e ${anoAtual}.` });
    }
 
    // Atualização segura preservando os valores antigos caso não venham no pedido
    musica.titulo = titulo !== undefined ? titulo.trim() : musica.titulo;
    musica.artista = artista !== undefined ? artista.trim() : musica.artista;
    musica.genero = genero !== undefined ? genero.toLowerCase() : musica.genero;
    musica.ano = ano !== undefined ? ano : musica.ano;
    musica.favorita = typeof favorita === 'boolean' ? favorita : musica.favorita;
 
    res.status(200).json({ mensagem: "Música atualizada com sucesso", dados: musica });
});
 
 
// =========================================================================
// 5. PATCH /api/musicas/:id/favorita -> Alternar estado de favorita (Toggle)
// =========================================================================
app.patch(("/api/musicas/favorita/:id"), (req,res)=>{
    const id = Number(req.params.id)
    const musica = musicas.find(m => m.id === id)

    if(!musica){
        return res.status(404).json({mensagem: "Música não existe"})
    }
    
    musica.favorita = !musica.favorita
    res.status(200).json({mensagem: `Música alterada para ${musica.favorita}`})
})
 
 
// =========================================================================
// 6. DELETE /api/musicas/:id -> Apagar música
// =========================================================================
app.delete('/api/musicas/:id', (req, res) => {
    const id = Number(req.params.id);
    const indice = musicas.findIndex(m => m.id === id);
 
    if (indice === -1) {
        return res.status(404).json({ erro: "Música não encontrada!" });
    }
 
    musicas.splice(indice, 1);
    res.status(204).end(); // 204 No Content: operação concluída sem corpo na resposta
});
 
 
// =========================================================================
// REDE DE SEGURANÇA: MIDDLEWARE GLOBAL PARA ROTAS NÃO ENCONTRADAS (404)
// Deve ficar obrigatoriamente no fim do ficheiro, antes do app.listen
// =========================================================================
app.use((req, res) => {
    res.status(404).json({ erro: "Rota não encontrada", url: req.originalUrl });
});
 
 
// INICIAR O SERVIDOR
app.listen(PORT, () => {
    console.log(`O servidor de músicas está a rolar na porta ${PORT}`);
});