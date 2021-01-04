"use strict";
// let & const
let seraQuePode = '?';
console.log(seraQuePode);
// var seraQuePode = '?' // hoisting
let estaFrio = true;
if (estaFrio) {
    // var acao = 'Colocar casaco'
    let acao = 'Colocar casaco'; // Escopo de bloco
    console.log(acao);
}
// console.log(acao) // Declarado com var consegue acessar esse valor
const cpf = '123.456.789-00';
// cpf = '987.654.321-00' // Uma constante não pode ser alterada
console.log(cpf);
// Arrow Function
// function somar(n1: number, n2: number): number {
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
const saudacao = () => console.log('Olá');
saudacao();
const falarCom = (pessoa) => console.log(`Olá ${pessoa}`);
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
// Parametro padrão
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
contagemRegressiva(5);
contagemRegressiva(5, 10);
// Rest & Spread
const numbers = [1, 12, 99, 5];
console.log(Math.max(...numbers)); // Nesse caso, é chamado de spread pois ele "espalha" os valores do array, ficando, por exemplo, console.log(Math.max(1,12,99,5))
const turmaA = ['Maria', 'José', 'João'];
const turmaB = ['Pedro', 'Paulo', ...turmaA]; // Nesse caso, é chamado de rest pois ele "junta" os elementos, sendo o mesmo de colocar: const turmaB: Array<string> = ['Pedro', 'Paulo', 'Maria', 'José', 'João']
// Destructuring (Array)
const caracteristicas = ['Motor Zetec 1.8', 2020];
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]
const [motor, ano] = caracteristicas;
console.log(motor, ano);
// Destructuring (Objeto)
const item = {
    nome: 'SSD 480GB',
    preco: 200,
};
// const nomeItem = item.nome
// const precoItem = item.preco
const { nome: n, preco: p } = item;
console.log(n, p);
//# sourceMappingURL=ecmascript.js.map