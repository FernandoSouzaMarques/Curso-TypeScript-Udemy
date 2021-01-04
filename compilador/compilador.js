"use strict";
var canal = 'Gaveta';
var inscritos = 610234;
// canal = inscritos => Não compila pois foi adicionado ao tsconfig a propriedade noEmitOnError como true
console.log("Canal = " + canal);
// let nome: string = 'Pedro' -> Retorna um erro, pois a variavel nome ja foi declarada no arquivo tipos
function soma(a, b) {
    return a + b;
}
var qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';
function saudar(manha) {
    var saudacao;
    if (manha)
        saudacao = "Bom dia";
    else
        saudacao = "Boa tarde";
    return saudacao;
}
//# sourceMappingURL=compilador.js.map