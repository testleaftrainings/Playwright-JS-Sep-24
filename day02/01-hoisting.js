/**
 * 1. Variable Hoisting
 * 2. Function Hoisting
 * 
 */
/*Before Hoisting*/
console.log(username);      //undefined
var username = "Testleaf";

//Internally, declaration has moved to the top
var username;
console.log(username);
username = "Testleaf"; 

console.log(employeeName);
let employeeName = "Srini";

/*Internally, hoisting occurs when you use let
let employeeName;
console.log(employeeName); // ReferenceError: Cannot access 'employeeName' before initialization
employeeName = "Srini";*/

console.log(password);
const password = "crmsfa";

/**
 * const password; //Variable declaration is moved to top of the block
 * console.log(password);
 * password = "crmsfa";
 * 
 */

