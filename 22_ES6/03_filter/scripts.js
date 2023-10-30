const arr = [1,2,3,4,5];

const highNumber = arr.filter((n) => {
    if (n >= 3){
        return n;
    }
})

console.log(highNumber);

const users = [
    {
        name: 'Luiz',
        available: true
    },
    {
        name: 'Antonio',
        available: false
    },

    {
        name: 'Braga',
        available: false
    },

    {
        name: 'Velasco',
        available: true
    }

]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers);
console.log(notAvailableUsers);