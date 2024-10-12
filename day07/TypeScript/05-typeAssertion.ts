//Using angular brackets
let response: any = "Record created successfully";
let myResponse = (<string>response);
console.log(myResponse.length);
console.log(typeof myResponse);

//Using as keyword
let sCode: any = "Success";
let statusLength= sCode as string;
console.log(statusLength.length);



