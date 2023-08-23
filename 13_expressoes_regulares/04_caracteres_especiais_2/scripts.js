const dia = /\d\d/;

console.log(dia.test("2023")); //true -- tem 2 digitos
console.log(dia.test("2023") && "2023".length == 2); //false
console.log(dia.test("asd")); //false
console.log(dia.test("20")); //true
console.log(dia.test("20") && "20".length == 2); //true
console.log(dia.test("asd1")); //false

const palavraPeloMenosTresLetras = /\w\w\w/;

console.log(palavraPeloMenosTresLetras.test("asd")); //true
console.log(palavraPeloMenosTresLetras.test("asdd")); //true
console.log(palavraPeloMenosTresLetras.test("as")); //false