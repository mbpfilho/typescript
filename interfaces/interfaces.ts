interface Humano {
  nome: string,
  idade?: number,
  [prop: string]:any
}

function saudarComOla(pessoa: Humano){
  console.log("Olá, "+pessoa.nome)
}

function mudarNome(pessoa: Humano){
  pessoa.nome="Joana"
}

const pessoa = {
  nome: "Joäo",
  idade: 27
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa) 

saudarComOla({ nome:"Jonas", idade: 29, altura: 1.75})