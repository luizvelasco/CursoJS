let b = 0;
try {
    let a = 2 + b;
} catch (e) {
    console.log(e);
} finally {
    console.log("Executou");
}

// console.log("Teste");