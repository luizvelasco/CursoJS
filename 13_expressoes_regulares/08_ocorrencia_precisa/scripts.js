const cep = /\d{5}-\d{3}/;

console.log(cep.test("88054-470"));//true
console.log(cep.test("8805-470"));//false
console.log(cep.test("asdas-470"));//false

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test("(48)999-9999")); //false
console.log(tel.test("(48)9999-9999")); //true
console.log(tel.test("(48)99999-9999")); //true