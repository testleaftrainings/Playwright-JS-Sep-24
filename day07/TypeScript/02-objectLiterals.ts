/**
 * collection of key-value pairs --> properties
 * Syntax
 * 
 * let objectName {
 *      key1: datatype,
 *      key2: datatype
 * } = {
 *      key1: value,
 *      key2: value
 * }
 */

let user: {
    firstname: string,
    lastname: string,
    age: number,
    email: string|number,
    isActive: boolean
} = {
    firstname : "Aneel",
    lastname: "Rajesh",
    age: 28,
    email: "aneel@gmail.com",
    isActive: true
}

//To access the different properties, you can use the dot notation or square bracket
//console.log(objectName.property);
console.log(user.firstname);
console.log(user.age);
console.log(user.isActive);

//console.log(objectName["property"]); //-,_, numbers
console.log(user["lastname"]);

console.log(`${user.firstname} ${user.age} `);

//Using square brackets
let userProfile: {
    "first-name": string,
    "last-name": string,
    age: number,
    email: string|number,
    isActive: boolean
} = {
    "first-name": "Aneel",
    "last-name": "Rajesh",
    age: 28,
    email: "aneel@gmail.com",
    isActive: true
}

console.log(userProfile["first-name"]);
console.log(userProfile["last-name"]);


