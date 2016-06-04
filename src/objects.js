let firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';
    
let person = {
    firstName,
    lastName,
    email,
    sayHello() {
        console.log(`Hi my name is ${this.firstName} ${this.lastName}`);
    },
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
        this.firstName = value;
    }
};

// Object.defineProperty(person, 'fullName', {
//     get: function() {
//         return this.firstName + ' ' + this.lastName;
//     },
//     set: function(value) {
//         this.firstName = value;
//     }
// });

console.log(person);
// person.sayHello();

// person.firstName;
// person['firstName'];

// let property = 'lastName';
// person[property]; // person['firstName']
// person = {
//     [property]: 'Bill'
// };


// function createCar(property, value) {
//     return {
//         [property]: value,
//         ['_' + property]: value,
//         [property.toUpperCase()]: value,
//         ['get' + property]() {
//             return this[property];
//         }
//     };
// }

// console.log(createCar('vin', 1));