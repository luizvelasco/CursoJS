let numero = prompt("Digite um número");
let x = 0;

for(i = 0; i <= numero; i++)
{
    if (numero % i == 0){
        x++;
    }
}

if (x == 2){
    console.log(`O número ${numero} é primo`);
} else {
    console.log(`O número ${numero} não é primo`);
}
