// Desafio

/*
  Criar um objeto funcionário com:
  - Array de strings com os nomes dos supervisores
  - Função de bater ponto que recebe a hora (número) e retorna uma string: ponto normal( <= 8 ); fora do horário ( > 8 )
 */

let funcionario: { supervisores: Array<string>, ponto: (h: number) => string } = {
  supervisores: ['Ana', 'Maria'],
  ponto: (horario: number): string => {
    return horario <= 8 ? 'Ponto normal' : 'Fora do ponto';
  }
}

console.log(funcionario.supervisores)
console.log(funcionario.ponto(7))
console.log(funcionario.ponto(8))


// Desafio
// Colocar os tipos no código abaixo
/*
  let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
      this.saldo += valor
    }
  }

  let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['123456789','987654321']
  }

  correntista.contaBancaria.depositar(3000)
  console.log(correntista)
*/

type TContaBancaria = {
  saldo: number,
  depositar: (v: number) => void
}

let contaBancaria: TContaBancaria = {
  saldo: 3456,
  depositar(valor: number): void {
    this.saldo += valor
  }
}

let correntista: {
  nome: string,
  contaBancaria: TContaBancaria,
  contatos: Array<string>
} = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria,
  contatos: ['123456789','987654321']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)