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