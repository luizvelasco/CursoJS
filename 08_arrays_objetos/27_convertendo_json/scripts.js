let pessoa = {
    "nome": "Velasco",
    "idade": 37,
    "profissao": "Militar",
    "hobbies": ["Video Game", "Leitura", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJson = JSON.parse(pessoaTexto);

console.log(pessoaJson);

console.log(pessoaJson.hobbies[2]);