function echo(objeto: any) {
  return objeto
}

console.log(echo("Joäo").length)
console.log(echo(27).length)
console.log(echo({ nome: "Joao", idade: 27 }))

// Usando Generics
function echoMelhorado<T>(objeto: T): T{
  return objeto
}
console.log(echoMelhorado("Joäo").length)
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({ nome: "Joao", idade: 27 }).nome)