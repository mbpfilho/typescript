"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo("Joäo").length);
console.log(echo(27).length);
console.log(echo({ nome: "Joao", idade: 27 }));
// Usando Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado("Joäo").length);
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: "Joao", idade: 27 }).nome);
// Generics disponíveis na API
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push("5.5")
console.log(avaliacoes);
// Array
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(["1", "2", "3"]);
imprimir([
    { nome: "Fulano", idade: 22 },
    { nome: "Ciclano", idade: 23 },
    { nome: "Beltrano", idade: 24 }
]);
imprimir([
    { nome: "Fulano", idade: 22 },
    { nome: "Ciclano", idade: 23 },
    { nome: "Beltrano", idade: 24 }
]);
