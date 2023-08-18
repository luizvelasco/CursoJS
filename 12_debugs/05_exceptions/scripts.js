function saudacao(nome){
    if (typeof nome != 'string'){
        throw new Error("Nome precisa ser string");

    } else {
        console.log(`Olá ${nome}`);
    }
}

saudacao("Velasco");
saudacao(5);
console.log("Teste");