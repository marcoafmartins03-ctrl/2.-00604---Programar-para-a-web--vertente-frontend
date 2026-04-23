// ========================================
// Tutorial de DOM - Document Object Model
// Guia completo para novos estudantes
// ========================================

console.log("🚀 Iniciando Tutorial de DOM");

// ========================================
// 1. INTRODUÇÃO AO DOM
// ========================================
console.log("\n=== 1. INTRODUÇÃO AO DOM ===");

/*
O DOM (Document Object Model) é uma representação em árvore da estrutura HTML de uma página web.
Permite-nos manipular o conteúdo, estrutura e estilo de uma página web usando JavaScript.

Estrutura básica:
- document: O objeto raiz que representa toda a página
- elements: Os elementos HTML (div, p, span, etc.)
- attributes: Os atributos dos elementos (id, class, src, etc.)
- text: O texto dentro dos elementos
*/

// Verificar se estamos num ambiente de browser
if (typeof document !== 'undefined') {
    console.log("✅ DOM disponível - estamos num browser");
    
    // Aceder ao elemento raiz
    console.log("Documento completo:", document);
    console.log("Título da página:", document.title);
    console.log("URL da página:", document.URL);
    console.log("Elemento body:", document.body);
} else {
    console.log("❌ DOM não disponível - estamos fora do browser");
}

// ========================================
// 2. SELETORES DE ELEMENTOS
// ========================================
console.log("\n=== 2. SELETORES DE ELEMENTOS ===");

// Funções para demonstrar diferentes métodos de seleção
function demonstrarSeletores() {
    // getElementById - seleciona por ID (único)
    const elementoPorId = document.getElementById('meuId');
    
    // getElementsByClassName - seleciona por classe (pode ser múltiplo)
    const elementosPorClasse = document.getElementsByClassName('minhaClasse');
    
    // getElementsByTagName - seleciona por tag (pode ser múltiplo)
    const elementosPorTag = document.getElementsByTagName('div');
    
    // querySelector - primeiro elemento que corresponde ao seletor CSS
    const primeiroElemento = document.querySelector('.minhaClasse');
    
    // querySelectorAll - todos os elementos que correspondem ao seletor CSS
    const todosElementos = document.querySelectorAll('.minhaClasse');
}

// ========================================
// 3. MANIPULAÇÃO DE CONTEÚDO
// ========================================
console.log("\n=== 3. MANIPULAÇÃO DE CONTEÚDO ===");

function demonstrarManipulacaoConteudo() {
    // innerHTML - obtém ou define o HTML interno
    let elemento = document.querySelector('.exemplo');
    if (elemento) {
        elemento.innerHTML = "<strong>Texto alterado com innerHTML</strong>";
    }
    
    // textContent - obtém ou define apenas o texto (sem HTML)
    if (elemento) {
        elemento.textContent = "Texto simples sem HTML";
    }
    
    // innerText - similar ao textContent (mais antigo)
    if (elemento) {
        elemento.innerText = "Texto com innerText";
        console.log("Texto com innerText:", elemento.innerText);
    }
}

// ========================================
// 4. MANIPULAÇÃO DE ATRIBUTOS
// ========================================
console.log("\n=== 4. MANIPULAÇÃO DE ATRIBUTOS ===");

function demonstrarAtributos() {
    const elemento = document.querySelector('.exemplo-imagem');
    
    if (elemento) {
        // getAttribute - obter valor de um atributo
        const srcOriginal = elemento.getAttribute('src');
        console.log("Atributo src original:", srcOriginal);
        
        // setAttribute - definir valor de um atributo
        elemento.setAttribute('src', 'nova-imagem.jpg');
        console.log("Atributo src alterado:", elemento.getAttribute('src'));
        
        // removeAttribute - remover um atributo
        elemento.removeAttribute('alt');
        console.log("Atributo alt removido");
        
        // classList - manipular classes CSS
        elemento.classList.add('nova-classe');
        elemento.classList.remove('classe-antiga');
        elemento.classList.toggle('classe-toggle');
        console.log("Classes após manipulação:", elemento.classList.toString());
        
        // hasAttribute - verificar se tem um atributo
        const temId = elemento.hasAttribute('id');
        console.log("Tem atributo id?", temId);
    }
}

// ========================================
// 5. CRIAÇÃO E REMOÇÃO DE ELEMENTOS
// ========================================
console.log("\n=== 5. CRIAÇÃO E REMOÇÃO DE ELEMENTOS ===");

function demonstrarCriacaoElementos() {
    // createElement - criar um novo elemento
    const novoParagrafo = document.createElement('p');
    novoParagrafo.textContent = "Este é um parágrafo criado dinamicamente";
    novoParagrafo.className = 'paragrafo-novo';
    
    // appendChild - adicionar como filho no final
    const container = document.querySelector('.container');
    if (container) {
        container.appendChild(novoParagrafo);
        console.log("Novo parágrafo adicionado");
    }
    
    // insertBefore - inserir antes de um elemento específico
    const novoDiv = document.createElement('div');
    novoDiv.textContent = "Div inserido antes do parágrafo";
    
    if (container && novoParagrafo) {
        container.insertBefore(novoDiv, novoParagrafo);
        console.log("Novo div inserido antes do parágrafo");
    }
    
    // removeChild - remover um elemento filho
    if (container && novoDiv) {
        container.removeChild(novoDiv);
        console.log("Div removido");
    }
    
    // remove() - método mais moderno para remover
    if (novoParagrafo) {
        novoParagrafo.remove();
        console.log("Parágrafo removido com remove()");
    }
}

// ========================================
// 6. NAVEGAÇÃO NO DOM
// ========================================
console.log("\n=== 6. NAVEGAÇÃO NO DOM ===");

function demonstrarNavegacao() {
    const elemento = document.querySelector('.elemento-teste');
    
    if (elemento) {
        // parentNode - elemento pai
        const pai = elemento.parentNode;
        console.log("Elemento pai:", pai);
        
        // childNodes - todos os nós filhos (incluindo texto)
        const nosFilhos = elemento.childNodes;
        console.log("Nós filhos:", nosFilhos);
        
        // children - apenas elementos filhos
        const elementosFilhos = elemento.children;
        console.log("Elementos filhos:", elementosFilhos);
        
        // firstChild / firstElementChild
        console.log("Primeiro nó filho:", elemento.firstChild);
        console.log("Primeiro elemento filho:", elemento.firstElementChild);
        
        // lastChild / lastElementChild
        console.log("Último nó filho:", elemento.lastChild);
        console.log("Último elemento filho:", elemento.lastElementChild);
        
        // nextSibling / nextElementSibling
        console.log("Próximo nó irmão:", elemento.nextSibling);
        console.log("Próximo elemento irmão:", elemento.nextElementSibling);
        
        // previousSibling / previousElementSibling
        console.log("Nó irmão anterior:", elemento.previousSibling);
        console.log("Elemento irmão anterior:", elemento.previousElementSibling);
    }
}

// ========================================
// 7. EVENTOS DO DOM
// ========================================
console.log("\n=== 7. EVENTOS DO DOM ===");

function demonstrarEventos() {
    const botao = document.querySelector('.botao-teste');
    
    if (botao) {
        // addEventListener - adicionar um evento
        botao.addEventListener('click', function(evento) {
            console.log("Botão clicado!");
            console.log("Evento:", evento);
            console.log("Elemento clicado:", evento.target);
        });
        
        // Evento com função arrow
        botao.addEventListener('mouseover', (evento) => {
            console.log("Rato sobre o botão");
            evento.target.style.backgroundColor = 'yellow';
        });
        
        botao.addEventListener('mouseout', (evento) => {
            console.log("Rato saiu do botão");
            evento.target.style.backgroundColor = '';
        });
        
        // removeEventListener - remover um evento
        const funcaoDoEvento = () => console.log("Este evento será removido");
        botao.addEventListener('dblclick', funcaoDoEvento);
        
        // Remover após alguns segundos
        setTimeout(() => {
            botao.removeEventListener('dblclick', funcaoDoEvento);
            console.log("Evento de duplo clique removido");
        }, 5000);
    }
}

// ========================================
// 8. MANIPULAÇÃO DE ESTILOS
// ========================================
console.log("\n=== 8. MANIPULAÇÃO DE ESTILOS ===");

function demonstrarEstilos() {
    const elemento = document.querySelector('.elemento-estilo');
    
    if (elemento) {
        // style - aceder a estilos inline
        elemento.style.backgroundColor = 'lightblue';
        elemento.style.color = 'darkblue';
        elemento.style.padding = '10px';
        elemento.style.border = '2px solid blue';
        elemento.style.borderRadius = '5px';
        
        console.log("Estilos aplicados via JavaScript");
        
        // getComputedStyle - obter estilos calculados
        const estilosCalculados = window.getComputedStyle(elemento);
        console.log("Cor de fundo calculada:", estilosCalculados.backgroundColor);
        console.log("Altura calculada:", estilosCalculados.height);
        
        // Alternar classes para estilos
        elemento.classList.add('destaque');
        setTimeout(() => {
            elemento.classList.remove('destaque');
            elemento.classList.add('alternativo');
        }, 2000);
    }
}

// ========================================
// 9. VALIDAÇÃO DE FORMULÁRIOS
// ========================================
console.log("\n=== 9. VALIDAÇÃO DE FORMULÁRIOS ===");

function demonstrarValidacao() {
    const formulario = document.querySelector('.formulario-teste');
    
    if (formulario) {
        // Interceptar envio do formulário
        formulario.addEventListener('submit', function(evento) {
            evento.preventDefault(); // Impedir envio padrão
            
            const nome = document.querySelector('#nome').value;
            const email = document.querySelector('#email').value;
            
            // Validação simples
            if (nome.trim() === '') {
                alert('Por favor, introduza o seu nome');
                return;
            }
            
            if (!email.includes('@')) {
                alert('Por favor, introduza um email válido');
                return;
            }
            
            console.log("Formulário válido - Nome:", nome, "Email:", email);
            alert('Formulário enviado com sucesso!');
        });
        
        // Validação em tempo real
        const campoNome = document.querySelector('#nome');
        if (campoNome) {
            campoNome.addEventListener('input', function() {
                if (this.value.trim() === '') {
                    this.style.borderColor = 'red';
                } else {
                    this.style.borderColor = 'green';
                }
            });
        }
    }
}

// ========================================
// 10. EXERCÍCIOS PRÁTICOS
// ========================================
console.log("\n=== 10. EXERCÍCIOS PRÁTICOS ===");

// Exercício 1: Criar uma lista dinâmica
function criarListaDinamica() {
    const itens = ['Maçã', 'Laranja', 'Banana', 'Uva'];
    const lista = document.createElement('ul');
    
    itens.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        lista.appendChild(li);
    });
    
    const container = document.querySelector('.container-exercicios');
    if (container) {
        container.appendChild(lista);
        console.log("Lista dinâmica criada");
    }
}

// Exercício 2: Contador interativo
function criarContador() {
    const contador = document.createElement('div');
    contador.innerHTML = `
        <h3>Contador: <span id="numero">0</span></h3>
        <button onclick="incrementar()">+</button>
        <button onclick="decrementar()">-</button>
        <button onclick="resetar()">Reset</button>
    `;
    
    const container = document.querySelector('.container-exercicios');
    if (container) {
        container.appendChild(contador);
        console.log("Contador criado");
    }
}

// Funções do contador
window.incrementar = function() {
    const numero = document.querySelector('#numero');
    if (numero) {
        numero.textContent = parseInt(numero.textContent) + 1;
    }
};

window.decrementar = function() {
    const numero = document.querySelector('#numero');
    if (numero) {
        numero.textContent = parseInt(numero.textContent) - 1;
    }
};

window.resetar = function() {
    const numero = document.querySelector('#numero');
    if (numero) {
        numero.textContent = '0';
    }
};

// Exercício 3: Carrinho de compras simples
function criarCarrinho() {
    const carrinho = document.createElement('div');
    carrinho.innerHTML = `
        <h3>Carrinho de Compras</h3>
        <div id="itens-carrinho"></div>
        <p>Total: €<span id="total">0</span></p>
        <button onclick="adicionarItem('Produto 1', 10)">Adicionar Produto 1 (€10)</button>
        <button onclick="adicionarItem('Produto 2', 15)">Adicionar Produto 2 (€15)</button>
        <button onclick="limparCarrinho()">Limpar Carrinho</button>
    `;
    
    const container = document.querySelector('.container-exercicios');
    if (container) {
        container.appendChild(carrinho);
        console.log("Carrinho criado");
    }
}

// Variáveis globais para o carrinho
window.itensCarrinho = [];
window.totalCarrinho = 0;

window.adicionarItem = function(nome, preco) {
    window.itensCarrinho.push({ nome, preco });
    window.totalCarrinho += preco;
    atualizarCarrinho();
};

window.limparCarrinho = function() {
    window.itensCarrinho = [];
    window.totalCarrinho = 0;
    atualizarCarrinho();
};

function atualizarCarrinho() {
    const itensDiv = document.querySelector('#itens-carrinho');
    const totalSpan = document.querySelector('#total');
    
    if (itensDiv) {
        itensDiv.innerHTML = window.itensCarrinho.map(item => 
            `<div>${item.nome} - €${item.preco}</div>`
        ).join('');
    }
    
    if (totalSpan) {
        totalSpan.textContent = window.totalCarrinho;
    }
}

// ========================================
// 11. BOAS PRÁTICAS E DICAS
// ========================================
console.log("\n=== 11. BOAS PRÁTICAS E DICAS ===");

console.log(`
📚 DICAS IMPORTANTES:

1. SEMPRE verificar se o elemento existe antes de o manipular
2. Usar querySelector/querySelectorAll para seletores CSS flexíveis
3. Preferir addEventListener sobre onclick inline
4. Usar classList para manipular classes CSS
5. Evitar innerHTML para conteúdo dinâmico (risco de XSS)
6. Usar textContent em vez de innerText para melhor performance
7. Sempre limpar event listeners quando não são necessários
8. Usar try/catch para operações DOM que podem falhar
9. Preferir CSS classes sobre estilos inline
10. Testar em diferentes browsers
`);

// ========================================
// 12. EXEMPLO COMPLETO DE APLICAÇÃO
// ========================================
console.log("\n=== 12. EXEMPLO COMPLETO DE APLICAÇÃO ===");

function criarAplicacaoCompleta() {
    const app = document.createElement('div');
    app.className = 'aplicacao-dom';
    app.innerHTML = `
        <header>
            <h1>Tutorial de DOM</h1>
            <nav>
                <button onclick="mostrarSecao('info')">Informações</button>
                <button onclick="mostrarSecao('exercicios')">Exercícios</button>
                <button onclick="mostrarSecao('exemplos')">Exemplos</button>
            </nav>
        </header>
        
        <main>
            <section id="info" class="secao ativa">
                <h2>Informações sobre DOM</h2>
                <p>O DOM permite manipular páginas web dinamicamente.</p>
                <div class="card">
                    <h3>Vantagens do DOM:</h3>
                    <ul>
                        <li>Interatividade dinâmica</li>
                        <li>Validação de formulários</li>
                        <li>Atualização de conteúdo sem recarregar</li>
                        <li>Animações e transições</li>
                    </ul>
                </div>
            </section>
            
            <section id="exercicios" class="secao">
                <h2>Exercícios Práticos</h2>
                <div class="exercicios-container">
                    <div class="exercicio">
                        <h4>1. Alterar Cor</h4>
                        <button onclick="alterarCor()">Clicar para alterar cor</button>
                        <div id="caixa-cor" style="width: 100px; height: 100px; background: blue; margin: 10px;"></div>
                    </div>
                    
                    <div class="exercicio">
                        <h4>2. Adicionar/Remover Elementos</h4>
                        <button onclick="adicionarItemLista()">Adicionar Item</button>
                        <button onclick="removerItemLista()">Remover Item</button>
                        <ul id="lista-dinamica">
                            <li>Item 1</li>
                            <li>Item 2</li>
                        </ul>
                    </div>
                    
                    <div class="exercicio">
                        <h4>3. Toggle de Visibilidade</h4>
                        <button onclick="toggleVisibilidade()">Mostrar/Ocultar</button>
                        <div id="conteudo-toggle" style="padding: 20px; background: lightgray;">
                            Conteúdo que pode ser mostrado ou ocultado
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="exemplos" class="secao">
                <h2>Exemplos Avançados</h2>
                <div class="exemplo-avancado">
                    <h4>Drag and Drop Simples</h4>
                    <div id="area-origem" style="border: 2px dashed gray; padding: 20px; margin: 10px;">
                        <div id="elemento-arrasto" draggable="true" style="width: 50px; height: 50px; background: red; cursor: move;"></div>
                    </div>
                    <div id="area-destino" style="border: 2px dashed blue; padding: 20px; margin: 10px; min-height: 100px;">
                        Área de Destino
                    </div>
                </div>
            </section>
        </main>
        
        <footer>
            <p>Tutorial de DOM - Criado para estudantes</p>
        </footer>
    `;
    
    const container = document.querySelector('.container-exercicios');
    if (container) {
        container.appendChild(app);
        configurarDragAndDrop();
        console.log("Aplicação completa criada");
    }
}

// Funções da aplicação
window.mostrarSecao = function(id) {
    // Ocultar todas as secções
    document.querySelectorAll('.secao').forEach(secao => {
        secao.classList.remove('ativa');
    });
    
    // Mostrar a secção selecionada
    const secao = document.querySelector(`#${id}`);
    if (secao) {
        secao.classList.add('ativa');
    }
};

window.alterarCor = function() {
    const caixa = document.querySelector('#caixa-cor');
    if (caixa) {
        const cores = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
        const corAtual = caixa.style.background;
        const proximaCor = cores[(cores.indexOf(corAtual) + 1) % cores.length];
        caixa.style.background = proximaCor;
    }
};

window.adicionarItemLista = function() {
    const lista = document.querySelector('#lista-dinamica');
    if (lista) {
        const novoItem = document.createElement('li');
        novoItem.textContent = `Item ${lista.children.length + 1}`;
        lista.appendChild(novoItem);
    }
};

window.removerItemLista = function() {
    const lista = document.querySelector('#lista-dinamica');
    if (lista && lista.children.length > 0) {
        lista.removeChild(lista.lastElementChild);
    }
};

window.toggleVisibilidade = function() {
    const conteudo = document.querySelector('#conteudo-toggle');
    if (conteudo) {
        if (conteudo.style.display === 'none') {
            conteudo.style.display = 'block';
        } else {
            conteudo.style.display = 'none';
        }
    }
};

function configurarDragAndDrop() {
    const elemento = document.querySelector('#elemento-arrasto');
    const areaDestino = document.querySelector('#area-destino');
    
    if (elemento && areaDestino) {
        elemento.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text', e.target.id);
            console.log('Arrasto iniciado');
        });
        
        areaDestino.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        
        areaDestino.addEventListener('drop', (e) => {
            e.preventDefault();
            const id = e.dataTransfer.getData('text');
            const elemento = document.getElementById(id);
            if (elemento) {
                areaDestino.appendChild(elemento);
                console.log('Elemento largado na área de destino');
            }
        });
    }
}

// ========================================
// INICIALIZAÇÃO
// ========================================
console.log("\n=== INICIALIZAÇÃO DO TUTORIAL ===");

// Função para inicializar o tutorial quando o DOM estiver carregado
function inicializarTutorial() {
    console.log("🎯 Tutorial de DOM inicializado!");
    
    // Executar demonstrações se estamos num browser
    if (typeof document !== 'undefined') {
        // Aguardar um pouco para garantir que o DOM está pronto
        setTimeout(() => {
            demonstrarSeletores();
            demonstrarManipulacaoConteudo();
            demonstrarAtributos();
            demonstrarCriacaoElementos();
            demonstrarNavegacao();
            demonstrarEventos();
            demonstrarEstilos();
            demonstrarValidacao();
            
            // Criar exercícios práticos
            criarListaDinamica();
            criarContador();
            criarCarrinho();
            criarAplicacaoCompleta();
            
            console.log("✅ Todas as demonstrações foram executadas!");
        }, 1000);
    }
}

// Executar quando o script for carregado
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inicializarTutorial);
    } else {
        inicializarTutorial();
    }
} else {
    console.log("📝 Tutorial preparado - abrir num browser para ver as demonstrações");
}

console.log("🎓 Tutorial de DOM concluído! Abrir o ficheiro HTML para ver as demonstrações interativas.");
