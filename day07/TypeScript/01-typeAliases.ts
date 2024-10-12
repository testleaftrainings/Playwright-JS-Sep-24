//let productId : number = 7654;

let productId: number|string = 7654;
productId = "R7654";

//type AliasName = typeDefinition
/**
 * Type Alias - creating a new names for the types
 * 
 */

type stringOrNumber = string|number;
let accountNumber: stringOrNumber = "0097546768SBIN000961";
accountNumber = 76653786889;

type supportedBrowsers = "Chromium"|"Firefox";
function invokeBrowsers(browserName: supportedBrowsers) {
    if(browserName==="Chromium"){
        console.log("Launch Chromium browser");
        
    } else
    console.log("Launch Firefox browser");
    
}

invokeBrowsers("Chromium");

//Intersection type
//Type Alias
type Admin = {
    adminName: string,
    privileges: string[]
};

//Type Alias
type Employee = {
    name: string,
    empId: number,
    date: string
}

type QA = Admin & Employee

const user1: QA = {
    adminName: "Testleaf", //from Admin type
    name: "Pushpalatha",    //from Employee type
    privileges: ['server'], //from Admin type
    empId: 1001, //from Employee type
    date: "03 Aug 2023" //from Employee type
}

console.log(user1.privileges);
