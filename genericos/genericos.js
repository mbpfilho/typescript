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
