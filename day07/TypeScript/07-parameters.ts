/**
 * Mandatory fields
 * firstname
 * email
 * nationality
 * age
 * sex
 * date of birth
 * 
 * Optional parameters
 * secondary address
 * landline
 * height
 * 
 * Default parameters
 * 
 */

function userRegistration(fName: string, lName: string, year: number, height?:number, gender?:string) {
    console.log(`Sign up with ${fName}, ${lName}, ${year}, ${gender}, ${height}`);
    
}

userRegistration('Manjushree', 'Angel', 2020, 175);

//Default parameter
function profile(username:string, isValid:boolean,dob?:string,profieStatus:string = 'Available') {
    console.log(`Profile Details: ${username}, ${isValid}, ${profieStatus}, ${dob}`); 
}

profile('Srikanth', true,'Aug 03 1993')