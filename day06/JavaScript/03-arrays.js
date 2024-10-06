//push - add one or more elements to the end of an array

let browserActions = ['Login', 'Navigate to Profile'];
browserActions.push('Check Notifications');
console.log(browserActions);

//pop - remove the last element from an array and return it
browserActions.pop();
console.log(browserActions);

//shift - remove the first element from the array 
let browserNames = ["Chrome", "Edge", 'Safari', 'Firefox'];
browserNames.shift();
console.log(browserNames);

//unshift() - adds one or more elements to the beginning of an array
browserNames.unshift('Chrome', 'Opera', 'Brave');
console.log(browserNames);

//forEach - executes a provided function once for each element in the array
let numbers = [1,2,3,4];
numbers.forEach(num => console.log(num*2));

//map - create a new array with the results of calling the function for every array element
let doubled = numbers.map(num => num * 2);
console.log(doubled);


//filter
let evenNumbers = numbers.filter(num => num%2===0);
console.log(evenNumbers);

//splice - to modify an array
let cart = ['Laptop', 'Headphones', 'Keyboard', 'iphone'];
cart.splice(1, 2, 'Speakers');
console.log(cart);

//slice
let modifiedCart = cart.slice(1,3);
console.log(modifiedCart);

//To get the length 
let automationTools = ['Selenium', 'Playwright', 'Cypress'];
console.log(automationTools.length);

automationTools[4] = "WebDriverIO";
automationTools[7] = "AccelQ"
console.log(automationTools);
console.log(automationTools.length);

let array = [];
console.log(array.length);

//join
let browserVersions = [126, 127, 119, 71];
console.log(browserVersions.join('-'));

//concat - merges two arrays into a new array
let array1 = [1,2,3,4,5];
let array2 = [6,7,8,9,10];
let mergedArray = array1.concat(array2);
console.log(mergedArray);

//sort
let num = [6,2,1,8,5,4,11];
console.log(num.sort());

let arr = [45,6,23,5,2];
arr.sort((a,b)=>a-b);
console.log(arr);

let mixedArray = ['Sathish', 1087, 'admin', true, [45.8, false, undefined, null]]















