"use strict"

// const robotron = document.querySelector("#robotron");

// const subtrair = document.querySelector("#subtrair");
// const somar = document.querySelector("#somar");
// const braco = document.querySelector("#braco");

const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');

controle.forEach(elemento => {
    elemento.addEventListener("click", (evento) => {
        manupularDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizarEstatisticas(evento.target.dataset.peca);
    });
});


// somar.addEventListener("click", () => {
//     manupularDados("somar");
// });

// subtrair.addEventListener("click", () => {
//     manupularDados("subtrair");
// });


// function manupularDados(operacao) {

//     if (operacao === "-") {
//         braco.value = parseInt(braco.value) - 1;       
//     }
//     else {
//         braco.value = parseInt(braco.value) + 1;
//     }    
// }

function manupularDados(operacao, controle) {

    const peca = controle.querySelector("[data-contador]");

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;       
    }
    else {
        peca.value = parseInt(peca.value) + 1;
    }    
}

function atualizarEstatisticas(peca) {
    console.log(pecas);
    console.log(pecas[peca]);

    estatisticas.forEach(elemento => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    });
}