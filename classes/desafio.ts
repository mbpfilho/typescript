// Exercício 1 - Classe
class Moto {
   velocidade: number = 0

  constructor(nome: string){
  }

  buzinar(): void{
    console.log('Toooooooooot!')
  }
  
  acelerar(delta: number): void{
    this.velocidade = this.velocidade + delta
  }
}

var moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)


// Exercício 2 - Herança
abstract class Objeto2D {
  protected resultado: number = 0

  abstract area(base: number, altura: number): void

  getResultado(): number {
    return this.resultado
  }
  
}

class Retangulo extends Objeto2D{
  area(base: number, altura: number): void {
    this.resultado = base * altura
  }
}

const r1 = new Retangulo()
r1.area(5, 7)
console.log(r1.getResultado())


// Exercício 3 - Getters & Setters
class Estagiario{
  _primeiroNome: string = ''

  get primeiroNome(): string {
    return this._primeiroNome
  }

  set primeiroNome(valor: string){
    if (valor.length >= 3) {
      this._primeiroNome = valor
  } else {
      this._primeiroNome = ''
  }
  }
}

const estagiario = new Estagiario

console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)