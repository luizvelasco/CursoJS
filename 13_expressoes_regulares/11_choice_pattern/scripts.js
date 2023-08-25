const reg = /\w+: (Luiz|Velasco)/;

console.log(reg.test("Nome: Velasco")); //true
console.log(reg.test("Nome: Braga")); //False