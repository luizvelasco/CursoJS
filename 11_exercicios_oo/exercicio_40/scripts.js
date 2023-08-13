class Carro {
    constructor (marca, cor, gasolinaRestante, consumo){
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumo = consumo;
    }

    dirigirCarro(km){
        let listroConsumidos = km / this.consumo;
        this.gasolinaRestante -= listroConsumidos;
    }

    abastecerCarro(litros){
        this.gasolinaRestante += litros;
    }

}

let carro = new Carro("VW", "Azul", 100, 14);

console.log(carro);

carro.dirigirCarro(100);

console.log(carro);

carro.abastecerCarro(10);

console.log(carro);