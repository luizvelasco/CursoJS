let carro = {
    portas: 2,
    portamalas: '200l',
    motor: '2.0'
}

let adicionais = {
    tetesolar: true,
    arcondicionado: true
}

console.log(carro);

Object.assign(carro, adicionais);

console.log(carro);