class Banco {
    constructor(saldo) {
        this.saldo = saldo;
    }
    deposito(valor){
        this.saldo += valor;
    }
    saque(valor){
        this.saldo -= valor;
    }
}

let operacao = new Banco(50);

operacao.deposito(20);
console.log(operacao.saldo);

operacao.saque(20);
console.log(operacao.saldo);
