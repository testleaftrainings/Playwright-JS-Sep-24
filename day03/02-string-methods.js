// String - sequence of characters
/**
 * 1. String literal 
 * '', "", ``
 * let username = 'demosalesmanager';
 * string pool memory
 * immutable
 * effective memory utilization
 * 2. String object
 * declared using String constructor
 * let username = new String('demosalesmanager);
 * username consumes memory
 * 
 * let name1 = "Asha";
 * let name2 = "Asha";
 * name1 === name2 
 * 
 * let name1 = new String('Asha');
 * let name2 = new String("Asha");
 * name1 === name2 //false
 */

let username = 'demosalesmanager';
console.log(typeof username);

let firstname = new String('Asha');
console.log(typeof firstname);

//Escape sequence
let testType = 'It\'s a regression test';
//let testType = "It's a regression test";
let name = "Hello, This is a \"double quote\"";

//Concatenation
let testcaseName = "Create a new lead";
let testcaseId = 231;
let result = testcaseId + "-" +testcaseName+ ":passed in the last execution";
console.log(result);

//Template literal - introsuced in ES6
let testcases = 2400;
let output = `There are ${testcases}
testcases automated in our project`;
console.log(output);
console.log(`There are ${testcases} testcases automated in our project`);

//String methods
//How to get the count of characters in the string?
let courseName = "Playwright";
//length - starts from 1
//index - starts from 0
console.log(`The length of the string is ${courseName.length}`);

//Find the first character of the given string
console.log(`The first character in the string is ${courseName.charAt(0)}`);
console.log(`The character in the fifth index is ${courseName.charAt(5)}`);
console.log(`The second character from the last is ${courseName.charAt(courseName.length-2)}`);
/**
 * Playwright
 * 12345678910
 * 0123456789
 */

//indexOf - index of the character
console.log(`The index of a is ${courseName.indexOf('a')}`);
console.log(`The index of z is ${courseName.indexOf('z')}`);
//No match = -1

//includes - true / false
courseName = 'Selenium';
console.log(`${courseName.includes('nium')}`);
console.log(`${courseName.includes('eeum')}`);

//slice - extracts a part of the string and returns a new string
let welcomeMessage = 'Welcome to Testleaf & Happy Learning!'
let outputMessage = welcomeMessage.slice(7, 15);
console.log(outputMessage);

//split - splits the string into array of substrings
let companyName = "Testleaf Qeagle Chennai";
console.log(companyName.split(""));

//substring
let outputString = welcomeMessage.substring(2, 15);
console.log(outputString);

//String reversal
let compName = "Testleaf";

function reverseString() {
    let chars = compName.split("");
    console.log(chars);
    let reversed = "";
    for (let index = chars.length-1; index >= 0; index--) {        
        reversed = reversed + chars[index]
    }
    return reversed;
}
console.log(reverseString());


let originalString  = "Welcome to Testleaf";
let reverse = originalString.split("").reverse().join("");
console.log(reverse);













