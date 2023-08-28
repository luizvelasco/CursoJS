function parOuImpar (num) {
    if (num % 2 == 0){
        return "Par";
    } else {
        return "Ímpar";
    }
}

console.log(parOuImpar(2));
console.log(parOuImpar(3));
console.log(parOuImpar(4));