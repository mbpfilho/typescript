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
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
    resumo() {
        return `${this.nome} custa R$ ${this.precoComDesconto()} (${this.desconto * 100}% de desconto)`;
    }
}
const prod1 = new Produto("arroz", 15);
prod1.desconto = .06;
console.log(prod1.resumo());
const prod2 = new Produto("feijäo", 25, .1);
console.log(prod2.resumo());
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida)
            this.velocidadeAtual = novaVelocidade;
        else
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro("Ford", "Ka", 185);
Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());
console.log(carro1.frear());
Array(30).fill(0).forEach(() => carro1.frear());
console.log(carro1.frear());
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super("Ferrari", modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari("F40", 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
// getters & setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120)
            this._idade = valor;
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1.idade);
pessoa1.idade = -8;
console.log(pessoa1.idade);
// atributos e métodos estáticos
class Matematica {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
// const m1=new Matematica()
// m1.PI=4.2
// console.log(m1.areaCirc(4))
// const m2=new Matematica()
// console.log(m2.areaCirc(4))
console.log(Matematica.areaCirc(4));
// classe abstrata
class X {
    w(b) {
        console.log(b);
    }
}
// console.log(new X())
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let s1 = new Soma();
s1.executar(2, 3, 4, 5);
console.log(s1.getResultado());
s1 = new Multiplicacao();
s1.executar(2, 3, 4, 5);
console.log(s1.getResultado());
