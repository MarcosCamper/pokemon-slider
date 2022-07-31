// Criando as constantes para evitar re-trabalho //

const btnAvancar = document.getElementById("btn-avancar") /*criando a variavel */
const btnVoltar = document.getElementById("btn-voltar")
const cartoes = document.querySelectorAll(".cartao");
var cartaoAtual = 0; /* setando o cartao 0 como padrao */

function mostraCartao (indiceCartao) {
    cartoes[indiceCartao].classList.add("selecionado"); // Adicionando selecionado no próximo cartão //
}

function esconderCartaoSelecionado () {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado"); /*removendo o selecionado do cartao anterior */
}


// Definindo a ação do botão //

btnAvancar.addEventListener("click", function () {
    if(cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado(); //ao clicar, esconde o cartão que estava selecionado //
    cartaoAtual++; /*ao clicar ele soma + 1 no proximo cartao e coloca ele como selecionado */
    cartoes[cartaoAtual].classList.add("selecionado");    
});


btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return; // Se o cartão zero for o selecionado, não tem como voltar mais do que isso.//
    
    esconderCartaoSelecionado();
    cartaoAtual--; /*ao clicar ele subtrai -1, no caso se tiver no cartão 3, ele volta pro 2, e coloca ele como selecionado */
    mostraCartao(cartaoAtual);
    
})


