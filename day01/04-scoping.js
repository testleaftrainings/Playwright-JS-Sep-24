/**
 * scoping - level of accessibility of the variable
 * 1. Global scoping
 * 2. Function scoping
 * 3. Block level scoping
 * 
 */


var gender = 'female';      //Global variable
function printGender() {
    var age = 28;           //Function scoped variable
    if(gender.startsWith('female')) {
        let color = "blue";  //Block scoped variable
        console.log("She/Her");
        console.log("Inside the if block: " + color);
       
    } else {
        var phoneNumber = "88282423";
        console.log("He/Him");        
    }
    console.log("Inside the function block: " + age);  
    console.log("Inside the function block using let: " + color);  
}
//console.log("Outside the function block: " + age);

//To call the function,
printGender();

/**
 * var - function scoped variable
 * let - block scoped
 * const - block scoped
 */