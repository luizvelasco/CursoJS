let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("mousedown", function(e) {
    console.log("Apertou o botão");
});

btn1.addEventListener("mouseup", function(e) {
    console.log("Soltou o botão");
});

btn2.addEventListener("dblclick", function(e) {
    console.log("Clicou duas vezes");
});

btn2.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    console.log("Botão direito");
});