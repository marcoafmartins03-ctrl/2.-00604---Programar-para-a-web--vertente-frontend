// CLIENTE ENVIAR UM PEDIDO AO SERVIDOR

// METODOS HTTP
// - GET = QUERO VER INFORMAÇÃO
// - POST = QUERO CRIAR ALGO NOVO
// - PUT = QUERO ATUALIZAR ALGO EXISTENTE
// - PATCH = QUERO ATUALIZAR ALGO EXISTENTE
// - DELETE = QUERO APAGAR ALGO

// C.R.U.D
// C => CREATE
// R => READ
// U => UPDATE
// D => DELETE

const requestGET = {
  metodo: "GET",
  url: "/api/marcacao",
  headers: {
    "content-type": "application/json"
  }
};

const requestPOST = {
  metodo: "POST",
  url: "/api/marcacao",
  headers: {
    "content-type": "application/json",
    authorization: "Bearer token"
  },
  body: {
    nome: "Carlos",
    email: "Carlos@carlos.pt",
    morada: "morada123"
  }
};

const requestDELETE = {
  metodo: "DELETE",
  url: "/api/marcacao/3",
  headers: {
    "content-type": "application/json"
  }
};

// RESPOSTA

// SERVIDOR ENVIA UMA RESPOSTA DE VOLTA

const resp = {
  status: 200,
  headers: {
    "content-type": "application/json"
  },
  body: {
    id: 1,
    nome: "Ana",
    email: "Ana@gmail.com"
  }
};

const statusCodes = {
  // ── 2xx: SUCESSO ──
  200: "OK - Pedido bem sucedido",
  201: "Created - Recurso criado com sucesso",
  204: "No Content - Sucesso, sem dados para devolver",

  // ── 3xx: REDIREÇÃO ──
  301: "Moved Permanently - Recurso mudou de URL",
  302: "Found - Recurso temporariamente noutro URL",
  304: "Not Modified - Dados nao mudaram (usar cache)",

  // ── 4xx: ERRO DO CLIENTE ──
  400: "Bad Request - Pedido invalido (dados em falta ou errados)",
  401: "Unauthorized - Sem autorizacao (login necessario)",
  403: "Forbidden - Sem permissao (mesmo autenticado)",
  404: "Not Found - Recurso nao existe",
  409: "Conflict - Conflito (ex: horario ja ocupado)",
  422: "Unprocessable Entity - Dados bem formatados mas invalidos",
  429: "Too Many Requests - Demasiados pedidos (rate limit)",

  // ── 5xx: ERRO DO SERVIDOR ──
  500: "Internal Server Error - Erro interno do servidor",
  502: "Bad Gateway - Servidor intermediario falhou",
  503: "Service Unavailable - Servidor em manutencao"
};

