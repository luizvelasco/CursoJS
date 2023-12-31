class Conta {
    constructor (saldoCC, saldoCP, juros){
        this.saldoCC = saldoCC;
        this.saldoCP = saldoCP;
        this.juros = juros
    }

    deposito(valor){
        this.saldoCC += valor;
    }

    saque(valor){
        this.saldoCC -= valor;
    }

    transferirCP(valor){
        this.saldoCP += valor;
        this.saldoCC -= valor;
    }

    transferirCC(valor){
        this.saldoCC += valor;
        this.saldoCP -= valor;
    }

    jurosAniversario(){
        let juros = (this.saldoCP * this.juros) / 100;
        this.saldoCP += juros;
    }
}

class ContaEspecial extends Conta {
    constructor (saldoCC, saldoCP, juros){
        super (saldoCC, saldoCP, juros * 2)
    }
}

let conta = new Conta(1000, 5000, 1);

conta.saque(500);
conta.deposito(5000);
conta.transferirCP(3000);
conta.jurosAniversario();

console.log(conta);

let conta2 = new ContaEspecial(10000, 50000, 1);

conta2.saque(5000);
conta2.jurosAniversario();

console.log(conta2);