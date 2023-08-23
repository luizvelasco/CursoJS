const reg1 = new RegExp('bola');

console.log(reg1.test("tem bola?")); //true
console.log(reg1.test("não tem")); //false

const reg2 = /bola/;

let text = 'Tem bola na cesta';

console.log(reg2.test("tem bola?")); //true
console.log(reg2.test("não tem")); //false
console.log(reg2.test(text)); //true

console.log(/quadrado/.test("onde tem quadrado")); // true
console.log(/quadrado/.test("adkjhagsdjhasgdquadradoasdasdasd")); // true