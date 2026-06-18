# PI01 - API de Biblioteca de Musica

**Dificuldade:** Facil
**Modulos necessarios:** M01-M03
**Disponivel a partir de:** Sessao 4
**Duracao estimada:** 2-3 horas

---

## Contexto

Cria uma API REST para gerir uma biblioteca de musica pessoal. O utilizador pode adicionar, listar, editar e apagar musicas, marcando-as como favoritas.

---

## Modelo de dados

```
Musica {
  id: number
  titulo: string (obrigatorio, min 2 caracteres)
  artista: string (obrigatorio)
  genero: string (obrigatorio: "pop", "rock", "hip-hop", "eletronico", "jazz", "classico", "outro")
  ano: number (obrigatorio, entre 1900 e ano atual)
  favorita: boolean (default: false)
  adicionadaEm: string (data ISO automatica)
}
```

---

## Endpoints obrigatorios

| Metodo | Rota | Descricao | Status OK |
|--------|------|-----------|-----------|
| GET | `/api/musicas` | Listar todas as musicas | 200 |
| GET | `/api/musicas/:id` | Obter musica por ID | 200 / 404 |
| POST | `/api/musicas` | Adicionar nova musica | 201 / 400 |
| PUT | `/api/musicas/:id` | Atualizar musica | 200 / 404 / 400 |
| PATCH | `/api/musicas/:id/favorita` | Alternar favorita (true/false) | 200 / 404 |
| DELETE | `/api/musicas/:id` | Apagar musica | 204 / 404 |

---

## Requisitos minimos

1. CRUD completo com array em memoria.
2. Validacao: `titulo` (min 2 chars), `artista` (obrigatorio), `genero` (valor valido), `ano` (numero entre 1900 e ano atual).
3. Status codes corretos (201, 400, 404, 204).
4. Endpoint PATCH para alternar estado de `favorita`.
5. Resposta JSON consistente em todos os endpoints.

---

## Bonus (opcional)

- [ ] Filtrar por genero: `GET /api/musicas?genero=rock`
- [ ] Filtrar por artista: `GET /api/musicas?artista=Coldplay`
- [ ] Filtrar favoritas: `GET /api/musicas?favorita=true`
- [ ] Ordenar por ano: `GET /api/musicas?ordenar=ano_asc` ou `ano_desc`
- [ ] Endpoint `GET /api/musicas/stats` que devolve: total, por genero, total de favoritas
- [ ] Pesquisar por titulo ou artista: `GET /api/musicas?q=bohemian`

---

## Exemplo de pedidos (para testar)

```bash
# Adicionar musica
curl -X POST http://localhost:3000/api/musicas \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Bohemian Rhapsody", "artista": "Queen", "genero": "rock", "ano": 1975}'

# Listar todas
curl http://localhost:3000/api/musicas

# Marcar como favorita
curl -X PATCH http://localhost:3000/api/musicas/1/favorita

# Filtrar por genero (bonus)
curl "http://localhost:3000/api/musicas?genero=rock"
```

---

## Criterios de avaliacao (10 valores)

| Criterio | Pontuacao |
|----------|-----------|
| CRUD funcional (GET, POST, PUT, DELETE) | 4 |
| Validacao de dados e status codes corretos | 2 |
| PATCH para alternar favorita | 2 |
| Codigo limpo e organizado | 1 |
| Bonus implementados | 1 |
