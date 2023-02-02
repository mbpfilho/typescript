//desctructuring (array)
const caracteristicas=["Motor 1.8",2020]
// const motor=caracteristicas[0]
// const ano=caracteristicas[1]
const [motor,ano]=caracteristicas
console.log(motor)
console.log(ano)
// const [w,z]=[2,3]

//destructuring (objeto)
const item={
  nome:"SSD 480GB",
  preco:200,
  caracteristicas: {
    w: "Importado"
  }
}
console.log(item.nome)
console.log(item.preco)

const { nome: n, preco, caracteristicas: { w } }=item

console.log(n)
console.log(preco)
console.log(w) 

//desafios

// Abaixo temos um código em JavaScript. "Traduza-o" para TypeScript!
var dobro = function(valor: number):number {
  return valor * 2
}
console.log(dobro(10))

const dobroD = (valor: number): number => valor * 2

console.log(dobroD(20))


// Verifique se há espaço para melhorias nesse trecho de código!
var dizerOla = function (nomeP?:string) {
  if (nomeP === undefined) { nomeP = "Pessoa" }
  console.log("Ola, " + nomeP)
}
dizerOla()
dizerOla("Anna")

const dizerOlaD = (nomeD?:string):void => console.log(`Ola, ${nomeD??"Pessoa"}`)

dizerOlaD()
dizerOlaD("Anna") 


// Dado esse array, imprima o menor valor!
const nums:number[] = [-3, 33, 38, 5]
console.log(Math.min(...nums)) 


//Adicione os elementos de nums em array !
const array = [55, 20,...nums]
console.log(array)


//Simplifique os trechos de código abaixo utilizando o operador Destructuring!
const [ nota1, nota2, nota3 ] = [8.5, 6.3, 9.4]
// var nota1 = notas[0]
// var nota2 = notas[1]
// var nota3 = notas[2]
console.log(nota1, nota2, nota3)

const cientista = {primeiroNome: "Will", experiencia: 12}
// var primeiroNome = cientista.primeiroNome
// var experiencia = cientista.experiencia
// console.log(primeiroNome, experiencia) 
const {primeiroNome,experiencia} = cientista
console.log(primeiroNome, experiencia) 


//callback
function esperar3s(callback:(dado:string)=>void){
  setTimeout(()=>{
    callback("3s depois...")
  },3000)
}
esperar3s((resultado:string)=>console.log(resultado)) 


//promises
function esperar4sPromise(){
  return new Promise((resolve:any)=>{
    setTimeout(()=>{
      resolve("4s depois promise...")
    }, 4000)
  })
}
esperar4sPromise().then(dado=>console.log(dado))


fetch("https://swapi.dev/api/people/1")
  .then(res=>res.json())
  .then(personagem=>personagem.films)
  .then(films=>fetch(films[0]))
  .then(resFilm=>resFilm.json())
  .then(filme=>console.log(filme.title))
  .catch(err=>console.log("Catch!!"+err))