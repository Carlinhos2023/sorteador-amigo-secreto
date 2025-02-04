//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        input.value = "";
    } else {
        alert("Nome inválido ou já adicionado!");
    }
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }
    
    let sorteio = [...amigos];
    let resultado = [];
    
    for (let i = 0; i < amigos.length; i++) {
        let disponiveis = sorteio.filter(nome => nome !== amigos[i]);
        
        if (disponiveis.length === 0) {
            return sortearAmigo(); // Evita que alguém pegue a si mesmo
        }
        
        let sorteado = disponiveis[Math.floor(Math.random() * disponiveis.length)];
        resultado.push({ amigo: amigos[i], sorteado });
        sorteio = sorteio.filter(nome => nome !== sorteado);
    }
    
    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    resultado.forEach(par => {
        const li = document.createElement("li");
        li.textContent = `${par.amigo} --> ${par.sorteado}`;
        listaResultado.appendChild(li);
    });
}
