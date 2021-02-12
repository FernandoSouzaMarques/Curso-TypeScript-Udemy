"use strict";
// Exercicio 1 - Abaixo temos um código em JavaScript. "Traduza-o" para TypeScript!
const dobro = (valor) => valor * 2;
console.log(dobro(10));
// Exercicio 2 - Verifique se há espaço para melhorias nesse trecho de código!
const dizerOla = (nome = 'Pessoa') => {
    console.log("Ola, " + nome);
};
dizerOla();
dizerOla("Anna");
// Exercicio 3 - Dado esse array, imprima o menor valor!
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
// Exercicio 4 - Adicione os elementos de nums em array !
const nums2 = [-3, 33, 38, 5];
const array = [55, 20];
array.push(...nums2);
console.log(array);
// Exercício 5 - Simplifique os trechos de código abaixo utilizando o operador Destructuring!
const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);
const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);
//# sourceMappingURL=desafios.js.map