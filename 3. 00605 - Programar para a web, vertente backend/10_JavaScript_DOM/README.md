# 10 - JavaScript DOM (Notas de Execucao)

## Regra principal
- Ficheiros deste modulo usam `document` e `window`.
- Devem ser executados no browser atraves dos ficheiros `.html`.
- Se correr com `node`, vai aparecer mensagem orientativa (sem crash).

## Percurso recomendado para iniciantes

### Etapa 1 - Lite (base)
1. `10_JavaScript_DOM/10.3_lite_lista_tarefas.html`
2. `10_JavaScript_DOM/10.4_lite_catalogo_dinamico.html`

Objetivo da etapa Lite
- Entender fluxo minimo: estado em memoria -> render no DOM -> evento -> atualizar DOM.
- Evitar sobrecarga cognitiva nas primeiras sessoes.

### Etapa 2 - Avancado (evolucao do Lite)
1. `10_JavaScript_DOM/10.3_avancado_lista_tarefas.html`
2. `10_JavaScript_DOM/10.4_avancado_catalogo_dinamico.html`

Objetivo da etapa Avancado
- Adicionar filtros, ordenacao, estado extra e estrutura mais proxima de projeto real.

## Ficheiros de base do modulo (conceitos)
- `10_JavaScript_DOM/10.1_selecionar.html`
- `10_JavaScript_DOM/10.2_modificar.html`

## Porque aparece "document is not defined"
- Esse erro aparece quando corres scripts DOM com `node`.
- Node.js nao tem DOM nativo.
- O objeto `document` existe apenas no ambiente do browser.

## Como validar corretamente
1. Abrir o ficheiro `.html` no browser.
2. Abrir DevTools (F12).
3. Ver separador `Console` para logs e testes.
4. Opcional: usar `Live Server` no VS Code para recarregar automaticamente.

## Boas praticas
- Confirmar existencia de elementos antes de usar.
- Preferir `textContent` para texto (mais seguro que `innerHTML`).
- Evitar logica grande fora de funcoes.
- Manter estado em arrays/objetos claros para facilitar integracao com backend depois.

## Compatibilidade (ficheiros existentes)
- `10.3_dom_lista_tarefas.*` e `10.4_dom_catalogo_dinamico.*` continuam no diretorio.
- Para percurso pedagogico novo, preferir sempre os pares `lite` e `avancado`.
