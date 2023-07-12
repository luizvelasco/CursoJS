let nome = "Velasco";

for (let i = 0; i < 10; i++) {

    if (i == 3){
        nome = "Luiz";
    }

    if (i == 5 && nome == "Luiz"){
        console.log("O nome é Luiz, pode parar");
        break;
    }

    console.log(i);

}