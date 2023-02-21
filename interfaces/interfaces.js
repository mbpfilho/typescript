"use strict";
function saudarComOla(pessoa) {
    console.log("Olá, " + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Joana";
}
const pessoa = {
    nome: "Joäo",
    idade: 27,
    saudar(sobrenome) {
        console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome:"Jonas", idade: 29, altura: 1.75})
pessoa.saudar("Skywalker");
