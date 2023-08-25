const ouOuMaisNumeros = /\d+/;
console.log(ouOuMaisNumeros.test("2321")); //true
console.log(ouOuMaisNumeros.test("")); //false
console.log(ouOuMaisNumeros.test("asdasdf")); //false
console.log(ouOuMaisNumeros.test("132465879465312")); //true