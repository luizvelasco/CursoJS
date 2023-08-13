class Carro {
    constructor (marca, cor, gasolinaRestante){
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
    }

    dirigirCarro(gasolina){
        this.gasolinaRestante -= gasolina;
    }

}

let carro = new Carro("VW", "Azul", 100);

console.log(carro);

carro.dirigirCarro(20);

console.log(carro);
