function lembraSoma(x){
    return function (y) {
        return x + y;
    }
}

let soma1 = lembraSoma(2);

console.log(soma1(5));

let soma2 = lembraSoma(5);

console.log(soma2(7));

function contador(i) {
    let cont = i;
    let somarContador = function() {
        console.log(cont);
        cont ++;
    }

    return somarContador;
}

let meuContador = contador(5);

meuContador();
meuContador();

meuContador();
meuContador();