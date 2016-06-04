let user = {
    firstname: 'John',
    lastname: 'Doe',
    social: {
        facebook: 'johndoe',
        twitter: 'jdoe'
    }
};

let {firstname: first, lastname: last, age = 25} = user;

console.log(first, last, age);