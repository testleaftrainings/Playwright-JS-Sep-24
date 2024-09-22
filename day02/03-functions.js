//Types of function

//Function Declaration
function userCredentials(username){
    return `Hi ${username}`
}
//Call the function
console.log(userCredentials("Shanmuga Kesavan"));

//Function Expression
let user = function (name) {
    console.log(`Hi ${name}`);
}
user('Chithambara Thanu');

//Arrow Function
const welcomeMessage = () => 'Hello Angel';
console.log(welcomeMessage());

console.log("---------------------");
console.log("Function Hoisting");

//Function Declaration
//Before Hoisting
console.log(userCredentials());
  function userCredentials() {
    return `Hi, Karthik`
  }

  /**
   * Internally,
   * After Hoisting
   * function userCredentials() {
    return `Hi, Karthik`
    }

    console.log(userCredentials());
   */

// Function Expression
console.log(sayHi);    
let sayHi = function () {
    return `Hi`
}

/**
 * After Hoisting
 * var sayHi;           //undefined
 * console.log(sayHi);    
    var sayHi = function () {
    return `Hi`
}
 */