"use strict";
// Desafio
/*
  Criar um objeto funcionário com:
  - Array de strings com os nomes dos supervisores
  - Função de bater ponto que recebe a hora (número) e retorna uma string: ponto normal( <= 8 ); fora do horário ( > 8 )
 */
var funcionario = {
    supervisores: ['Ana', 'Maria'],
    ponto: function (horario) {
        return horario <= 8 ? 'Ponto normal' : 'Fora do ponto';
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.ponto(7));
console.log(funcionario.ponto(8));
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['123456789', '987654321']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
