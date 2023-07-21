function soma (a,b){
    if (a === undefined || b === undefined){
        console.log("Esta função precisa ter os 2 argumentos");
    } else {
        return a + b;
    }
}

console.log(soma(1));

console.log(soma(2,3));

function saudacao (nome, idade){
    if (idade === undefined){
        console.log("Olá " + nome);
    } else {
        console.log("Olá " + nome) + " você tem " + idade + " anos";
    }
}

saudacao("Velasco");

saudacao("Velasco, 30");