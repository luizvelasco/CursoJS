const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("luizvelasco@gmail.com")); //true
console.log(validarEmail.test("luizvelasco@gmail")); //false
console.log(validarEmail.test("gmail.com")); //false