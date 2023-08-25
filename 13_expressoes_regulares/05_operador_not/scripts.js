const notab = /[^ab]/;

console.log(notab.test("a")); //false
console.log(notab.test("Aqui tem a")); //true

const notatoz = /[^a-z]/;

console.log(notatoz.test("123 as")); //true
console.log(notatoz.test("asd")); //false