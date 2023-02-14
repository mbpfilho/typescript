class Data{
  // público por padräo
  dia: number
  public mes: number
  ano: number

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970){
    this.dia=dia
    this.mes=mes
    this.ano=ano
  }
}

const aniversario=new Data(3,11,1991)
console.log(aniversario)
aniversario.dia=4
console.log(aniversario)

const casamento = new Data //posso omitir os parênteses
casamento.ano=2017
console.log(casamento)

class DataEsperta {
  constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970){}
}

const aniversarioEsperto=new DataEsperta (3,11,1991)
console.log(aniversarioEsperto)
aniversarioEsperto.dia=4
console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta  //posso omitir os parênteses
casamentoEsperto.ano=2017
console.log(casamentoEsperto)

// desafio classe produto
class Produto {
  constructor(public nome: string, public preco: number, public desconto: number = 0){}

  precoComDesconto(): number {
    return this.preco*(1-this.desconto)
  }

  public resumo(): string {
    return `${this.nome} custa R$ ${this.precoComDesconto()} (${this.desconto*100}% de desconto)`
  }
}
const prod1=new Produto("arroz",15)
prod1.desconto=.06
console.log(prod1.resumo())
const prod2=new Produto("feijäo",25,.1)
console.log(prod2.resumo())

class Carro{
  private velocidadeAtual: number =0

  constructor(public marca:string, public modelo: string, private velocidadeMaxima: number =200){

  }

  protected alterarVelocidade(delta:number):number{
    const novaVelocidade=this.velocidadeAtual + delta
    const velocidadeValida = novaVelocidade >=0 && novaVelocidade<= this.velocidadeMaxima

    if(velocidadeValida) this.velocidadeAtual=novaVelocidade
    else this.velocidadeAtual=delta>0?this.velocidadeMaxima:0

    return this.velocidadeAtual
  }

  public acelerar():number {
    return this.alterarVelocidade(5)
  }

  public frear():number {
    return this.alterarVelocidade(-5)
  }
}

const carro1=new Carro("Ford", "Ka", 185)
Array(50).fill(0).forEach(()=>carro1.acelerar())
console.log(carro1.acelerar())
console.log(carro1.frear())
Array(30).fill(0).forEach(()=>carro1.frear())
console.log(carro1.frear( )) 

class Ferrari extends Carro{

  constructor(modelo: string, velocidadeMaxima: number){
    super("Ferrari", modelo, velocidadeMaxima)
  }

  public acelerar():number {
    return this.alterarVelocidade(20)
  }

  public frear():number {
    return this.alterarVelocidade(-15)
  }

}

const f40= new Ferrari("F40",324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())