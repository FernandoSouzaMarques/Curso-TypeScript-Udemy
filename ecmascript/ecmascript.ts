// let & const

let seraQuePode = '?'
console.log(seraQuePode)
// var seraQuePode = '?' // hoisting

let estaFrio = true
if(estaFrio) {
  // var acao = 'Colocar casaco'
  let acao = 'Colocar casaco' // Escopo de bloco
  console.log(acao)
}

// console.log(acao) // Declarado com var consegue acessar esse valor


const cpf: string = '123.456.789-00'
// cpf = '987.654.321-00' // Uma constante não pode ser alterada
console.log(cpf)

// Arrow Function

// function somar(n1: number, n2: number): number {
  const somar = function (n1: number, n2: number): number {
  return n1 + n2
}

console.log(somar(2,2))

const subtrair = (n1: number, n2: number) => n1 - n2;
console.log(subtrair(2,3))

const saudacao = () => console.log('Olá')
saudacao()

const falarCom = (pessoa: string) => console.log(`Olá ${pessoa}`)
falarCom('João');

// this
/*
function normalComThis() {
  console.log(this)
}

const normalComThisEBind = normalComThis.bind(2)

normalComThisEBind()

const arrowComThis = () => console.log(this)
arrowComThis()

const arrowComThisEspecial = arrowComThis.bind(3)
arrowComThisEspecial()
*/