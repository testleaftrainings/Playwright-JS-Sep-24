import { expect, test } from "@playwright/test";

let sysId:any;
test(`Test to parse the response`, async ({request}) => {
  
    const response = await request.post("https://dev281290.service-now.com/api/now/table/incident",
        {
            headers: {
                "Authorization": "Basic YWRtaW46aWprb144NkhKWE4t",
                "Content-Type": "application/json"
            },

            data: {
                "short_description": "Created using Playwright API"
            }            
        })

    //To get the json response
    const responseBody = await response.text();
    console.log(responseBody);
    
    const parsedJSON = JSON.parse(responseBody);
    console.log(parsedJSON);    
    
})