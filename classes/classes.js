"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
console.log(aniversario);
aniversario.dia = 4;
console.log(aniversario);
const casamento = new Data; //posso omitir os parênteses
casamento.ano = 2017;
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11, 1991);
console.log(aniversarioEsperto);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto);
const casamentoEsperto = new DataEsperta; //posso omitir os parênteses
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);
// desafio classe produto
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa R$ ${this.preco} (${this.desconto * 100}% de desconto)`;
    }
}
const prod1 = new Produto("arroz", 15);
prod1.desconto = .06;
console.log(prod1.resumo());
const prod2 = new Produto("feijäo", 25, .1);
console.log(prod2.resumo());
