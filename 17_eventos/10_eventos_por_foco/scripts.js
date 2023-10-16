let input = document.querySelector("#input1");

input.addEventListener("focus", function(e){
    console.log("Entrou no input");
});

input.addEventListener("blur", function(e){
    console.log("saiu no input");
});