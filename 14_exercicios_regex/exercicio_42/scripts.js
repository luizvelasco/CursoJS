const validarId = /\d+ID\b/;

console.log(validarId.test("31231564ID"));
console.log(validarId.test("asdfasdf"));
console.log(validarId.test("ID"));