//string
let nome="Joäo"
console.log(nome)
// nome=28

//number
let idade=27
// idade="Ana"
idade=27.4
console.log(idade)

//boolean
let possuiHobbies=false
// possuiHobbies=1
console.log(possuiHobbies)

//tipos explícitos
let minhaIdade: number
minhaIdade=27
console.log(typeof minhaIdade)
// minhaIdade="idade é 27"
// console.log(typeof minhaIdade)

//array
let hobbies:any[]=["cozinhar","esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies=[100,200,300]
// hobbies=100
console.log(hobbies)

//tuplas
let endereco:[string,number,string]=["Av Principal",99,""] 
console.log(endereco)

endereco=["Rua Importante", 1260,"Bloco C"]
console.log(endereco)

//enums
enum Cor{
  Cinza,//0
  Verde=100,//100
  Azul,//101
  Laranja,
  Amarelo,
  Vermelho=100
}

let minhaCor: Cor=Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja)
console.log(Cor.Amarelo)
console.log(Cor.Verde)
console.log(Cor.Vermelho)

///any
let carro:any="BMW"
console.log(carro)
carro={marca:"BMW",ano:2019}
console.log(carro) 

//funcöes
function retornaMeuNome():string{
  return nome
}
console.log(retornaMeuNome())

function digaOi():void{
  console.log("Oi")
}
digaOi()

function multiplicar(numA:number, numB:number):number{
  return numA*numB
}
// console.log(multiplicar(2,"Bia"))
console.log(multiplicar(2,4.7)) 

//tipo funcao
let calculo:(a:number,b:number)=>number
// calculo=digaOi
// calculo()

calculo=multiplicar
console.log(calculo(5,6))

//objetos
let usuario:{nome:string,idade:number}={
  nome:"Joäo",
  idade: 27
}

console.log(usuario)

// usuario={}

// usuario={
//   name: "Maria",
//   age: 21
// }

usuario={
  idade: 21,
  nome: "Maria"
}

console.log(usuario)


//desafio
const funcionario:{supervisores:string[], ponto(n:number):string}={supervisores:["Joao","Jose"],ponto:(n)=>{return n>8?"Fora do horário":"Ponto normal"}}

console.log(funcionario.supervisores) 
console.log(funcionario.ponto(8)) 
console.log(funcionario.ponto(9))

// Alias - tipos personalizados
type Funcionario={supervisores:string[], ponto(n:number):string}

const funcionario2:Funcionario={supervisores:["Joao","Jose"],ponto:(n)=>{return n>8?"Fora do horário":"Ponto normal"}}

//Union Types
let nota:number|string=10
console.log(`Minha nota é ${nota}!`)
nota="10"
console.log(`Minha nota é ${nota}!`)

//never
function falha(msg:string):never{
  throw new Error(msg)
}

const produto={
  nome:"Sabäo",
  preco: 4,
  validarProduto(){
    if(!this.nome||this.nome.trim().length==0)falha("Precisa ter um nome")
    if(this.preco<=0)falha("Preco inválido")

  }
}

produto.validarProduto() 

//desafio atribuir tipos

type ContaBancaria={saldo:number,depositar(n:number):void}

let contaBancaria:ContaBancaria={
  saldo: 3456,
  depositar(valor){
    this.saldo+=valor
  }
}

type Correntista={nome:string,contaBancaria:ContaBancaria,contatos:string[]}

let correntista:Correntista={
  nome:"Ana Silva",
  contaBancaria: contaBancaria,
  contatos: ["344564789","98765421"]
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)