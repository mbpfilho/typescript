"use strict";
//string
let nome = "Joäo";
console.log(nome);
// nome=28
//number
let idade = 27;
// idade="Ana"
idade = 27.4;
console.log(idade);
//boolean
let possuiHobbies = false;
// possuiHobbies=1
console.log(possuiHobbies);
//tipos explícitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade="idade é 27"
// console.log(typeof minhaIdade)
//array
let hobbies = ["cozinhar", "esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies=100
console.log(hobbies);
//tuplas
let endereco = ["Av Principal", 99, ""];
console.log(endereco);
endereco = ["Rua Importante", 1260, "Bloco C"];
console.log(endereco);
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul";
    Cor[Cor["Laranja"] = 102] = "Laranja";
    Cor[Cor["Amarelo"] = 103] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja);
console.log(Cor.Amarelo);
console.log(Cor.Verde);
console.log(Cor.Vermelho);
///any
let carro = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);
//funcöes
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log("Oi");
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
// console.log(multiplicar(2,"Bia"))
console.log(multiplicar(2, 4.7));
//tipo funcao
let calculo;
// calculo=digaOi
// calculo()
calculo = multiplicar;
console.log(calculo(5, 6));
//objetos
let usuario = {
    nome: "Joäo",
    idade: 27
};
console.log(usuario);
// usuario={}
// usuario={
//   name: "Maria",
//   age: 21
// }
usuario = {
    idade: 21,
    nome: "Maria"
};
console.log(usuario);
//desafio
const funcionario = { supervisores: ["Joao", "Jose"], ponto: (n) => { return n > 8 ? "Fora do horário" : "Ponto normal"; } };
console.log(funcionario.supervisores);
console.log(funcionario.ponto(8));
console.log(funcionario.ponto(9));
