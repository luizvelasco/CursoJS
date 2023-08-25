const validaDominio = /[?www.]\w+\.com.br|.com/;

console.log(validaDominio.test("www.google.com")); //true
console.log(validaDominio.test("www.horadecpdar.com")); //true
console.log(validaDominio.test("www.google.online")); //false
console.log(validaDominio.test("google.com")); //true