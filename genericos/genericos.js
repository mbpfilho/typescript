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
const chamarEcho = echoMelhorado;
console.log(chamarEcho("Alguma coisa"));
// Class com Generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
// console.log(new OperacaoBinaria("Bom ", "dia").executar())
// console.log(new OperacaoBinaria(3, 7).executar())
// console.log(new OperacaoBinaria(3, " opa").executar())
// console.log(new OperacaoBinaria({}, null).executar())
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 4).executar());
