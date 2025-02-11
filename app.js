let nomesSorteio = [];

function exibirTextos(tag, texto, cor) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    campo.style.color = cor;
}

function limparNome() {
    let campoNome = document.getElementById("amigo");
    campoNome.value = "";
    if (campoNome.value != "") {

    }
}

function mudarCorErro() {
    let corTexto = document.querySelector("h2");
    corTexto.style.color= "rgb(222, 65, 65)";
}

function adicionarNome() {
    let nome = document.querySelector("input").value;

    if (nomesSorteio.includes(nome)) {
        exibirTextos("h2", `O nome ${nome} já está na lista`, "red");
        limparNome();
    } else if (nome == "") {
        exibirTextos("h2","Digite o nome de um amigo no campo abaixo!", "red");
        } else {
        nomesSorteio.push(nome);
        exibirTextos("h2", "Amigo incluído! Adicione o nome de mais amigos", "green");
        limparNome();
        listaNomes();
        }
}

function listaNomes() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < nomesSorteio.length; i++) {
        const listaNaTela = document.createElement("li");
        listaNaTela.textContent = nomesSorteio[i];
        listaAmigos.appendChild(listaNaTela);
    }
}

function sortearNome() {
    if (nomesSorteio.length <= 1 ) {
        exibirTextos("h2", "Quantidade de amigos insuficiente para sorteio", "red");
    } else {
    let amigoAleatorio = parseInt(Math.random() * nomesSorteio.length);
    let amigoSorteado = nomesSorteio[amigoAleatorio];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
    listaAmigos.innerHTML = ""
    }
}