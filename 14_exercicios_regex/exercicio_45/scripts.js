let validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarNomeUsuario.test("velasco_123"));
console.log(validarNomeUsuario.test("12"));
console.log(validarNomeUsuario.test("12a"));
console.log(validarNomeUsuario.test("asdkjhagsdjhasgdjhasgdjhasdg"));