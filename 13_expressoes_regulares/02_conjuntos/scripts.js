const reg1 = /[12345]/;

console.log(reg1.test("Temos o número 6")); //false
console.log(reg1.test("Temos o número 2")); //true
console.log(reg1.test("Temos o número 23")); //true
console.log(reg1.test("Temos o número 60")); //false

const reg2 = /[0-9]/; //se tem qualquer número

console.log(reg1.test("Temos o número 65")); //true