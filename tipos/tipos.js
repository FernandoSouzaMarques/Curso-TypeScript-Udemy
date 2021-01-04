"use strict";
// Tipos implicitos
// string
let nome = 'Fernando';
console.log(nome);
// nome = 28 -> Retorna um erro, pois 28 não é do tipo string, onde é inserido implicitamente ao inicializar a variável nome.
// numbers
let idade = 28;
idade = 28.5;
console.log(idade);
// boolean
let possuiHobbies = false;
possuiHobbies = true;
console.log(possuiHobbies);
// Sem inicialização
let minhaIdade; // Quando não se inicializa a variável com um valor, o tipo dela é dinâmico (any), podendo se passar qualquer dado para ela sem mostrar erros.
console.log(typeof minhaIdade); // undefined
minhaIdade = 27;
console.log(typeof minhaIdade); // number
minhaIdade = 'Idade é 27';
console.log(typeof minhaIdade); // string
// Tipos explicitos
let altura;
altura = 1.67;
// altura = '1.67' -> Retorna um erro, pois mesmo não inicializando a variavel, passamos explicitamente qual o tipo dela.
// Array
let hobbies = ['Cozinhar', 'Praticar esportes'];
// hobbies = [0,1,2] -> Retorna um erro, pois além de ser do tipo array, existe o tipo de dados dentro do array, sendo ele string no exemplo acima.
let meusHobbies = ['Ouvir música', 'Estudar']; // Para tipar um array posso usar das seguintes formas: let nomeArray: Array<tipo> ou let nomeArray: tipo[]
meusHobbies = [0, 1, 2]; // Não retorna erros, pois declarei que o tipo de dados dentro do array é any, ou seja, ele pode receber qualquer tipo de dado.
// Tuplas
let endereco = ["Av. Principal", 2000, 15401123];
// endereco = ['Rua principal', 2001] -> Retorna erro, pois a posição e quantidade de itens dentro do array é diferente do tipo de tupula definido acima.
// endereco = ['Rua principal', 2001, 'Teste'] -> Retorna erro, pois a posição e quantidade de itens dentro do array é diferente do tipo de tupula definido acima.
// endereco = [2001, 15432987, 'Rua principal'] -> Retorna erro, pois a posição e quantidade de itens dentro do array é diferente do tipo de tupula definido acima.
// Enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 100] = "Azul";
    Cor[Cor["Vermelho"] = 11] = "Vermelho";
    Cor[Cor["Laranja"] = 12] = "Laranja";
    Cor[Cor["Amarelo"] = 102] = "Amarelo"; // 102
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor); // 1
console.log(Cor.Azul); // 100
console.log(Cor.Vermelho); // 11
console.log(Cor.Laranja); // 12
console.log(Cor.Amarelo); // 102
// Funções
function retornaMeuNome() {
    // return minhaIdade -> Retorna um erro, pois declarei que o retorno da função é uma string e a variável minhaIdade é um number
    return nome;
}
console.log(retornaMeuNome()); // Fernando
function digaOi() {
    console.log('Oi!');
    // return nome -> Retorna um erro, pois como declarei o retorno void, está explicito que não existe um retorno
}
digaOi(); // Oi!
function multiplicar(numA, numB) {
    return numA * numB;
}
// console.log(multiplicar(2, 'Teste')) -> Retorna um erro, pois a função espera como parametro dois númoros e esta recebendo um número e uma string
console.log(multiplicar(2, 2)); // 4
// Tipo função
let calculo;
// calculo = digaOi
// calculo()
calculo = multiplicar;
console.log(calculo(5, 6)); // 30
// objetos
let usuario = {
    nome: 'João',
    idade: 27
};
// usuario = {
//   nome: 'Fernando',
//   idade: '27'
// }
console.log(usuario);
usuario = {
    idade: 12,
    nome: 'Maria'
};
console.log(usuario);
let carro = {
    ano: 2020,
    marca: 'Ford'
};
let carro2 = {
    ano: 2010,
    marca: 'Fiat'
};
//Union types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
// Checando tipos
let valor = '30';
console.log(typeof valor == 'number' ? "É um Número" : typeof valor);
// never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: 1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido');
        }
    }
};
produto.validarProduto();
// tipo Opcional
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'João',
    tel1: '999999999',
    tel2: null
};
console.log(contato1);
//# sourceMappingURL=tipos.js.map