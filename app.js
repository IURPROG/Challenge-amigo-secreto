// Array para armazenar os nomes dos amigos
let amigos = [];

// Funções auxiliares preenchidas
function atualizarLista() {
    let listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = amigos.join(', ');
}

function limparCampo() {
    let nomeCampo = document.getElementById('amigo');
    nomeCampo.value = '';
}

// Função que adiciona um nome ao array
function adicionar() {
    let nomeAmigo = document.getElementById('amigo').value;

    if (nomeAmigo == '') {
        alert('Informe o nome do amigo!');
        return;
    }
    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    amigos.push(nomeAmigo);
    atualizarLista();
    limparCampo();
}

// A função sortear foi totalmente reescrita para a nova lógica
function sortear() {
    if (amigos.length < 3) {
        alert('Adicione pelo menos 3 amigos para o sorteio!');
        return;
    }

    // Gerei um índice aleatório para selecionar um único nome
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceSorteado];

    // Peguei o elemento onde o resultado será exibido
    let resultadoSorteio = document.getElementById('resultado');

    // Criei o novo HTML com o nome sorteado, formatado como <h2> e em negrito
    resultadoSorteio.innerHTML = `<h2>O nome sorteado é: <b>${nomeSorteado}</b></h2>`;
}

// A função embaralhar e a lógica de amigo secreto foram removidas
// já que não são mais necessárias para o novo objetivo

// Funções para o HTML chamar
function adicionarAmigo() {
    adicionar();
}

function sortearAmigo() {
    sortear();
}