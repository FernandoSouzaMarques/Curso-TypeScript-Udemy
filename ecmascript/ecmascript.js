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
//# sourceMappingURL=ecmascript.js.map