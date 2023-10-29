const sum = function sum(a,b){
    return a + b;
}

console.log(sum(5,5));

const arrowSum = (a,b) => a + b;

console.log(arrowSum(5,5));

const greeting = (name) => {
    if (name) {
        return "Olá " + name + "!";
    } else {
        return "olá";
    }
}

console.log(greeting("Velasco"));
console.log(greeting());

const testeArrow = () => console.log("testou");

testeArrow();

const user = {
    name: "Theo",
    sayUserName() {
        setTimeout(function() {
            console.log(this);
            console.log("Username:" + this.name);
        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this);
            console.log("Username:" + this.name);
        })
    }
}

user.sayUserNameArrow();