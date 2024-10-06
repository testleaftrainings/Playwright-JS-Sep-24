/**
 * Type inference - infering the data type
 * 1. Implicit type inference - When the compiler is able to infer the datatype on its 
 * own from the value that the user assigns
 * 2. Explicit type inference
 */

//Implicit type inference
let username = "democsr";
let hadCoffee = true;

//Explicit type inference
let statusCode:number = 200;
console.log(statusCode);

let message:any = "Hi";
message = null;
console.log(message);




