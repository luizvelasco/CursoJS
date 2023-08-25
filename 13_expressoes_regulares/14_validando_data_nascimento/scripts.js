const validarDataNasc = /[0-31]{2}[/][0-12]{2}[/][1920-2023]{4}/;

console.log(validarDataNasc.test("07/05/1986")); //true
console.log(validarDataNasc.test("7/05/1986")); //false
console.log(validarDataNasc.test("07-05-1986")); //false