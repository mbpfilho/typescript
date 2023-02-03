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

