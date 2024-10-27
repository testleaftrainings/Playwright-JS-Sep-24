import { expect, test } from "@playwright/test";

let sysId:any;
test(`Test to create a new incident`, async ({request}) => {
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
    const responseBody = await response.json();
    console.log(responseBody);

    //To get the status code
    const apiStatusCode = response.status();
    console.log(`The status code is ${apiStatusCode}`);
    
    expect(apiStatusCode, `expecting api status to be 201`).toBe(201);

    //To get sys_id
    sysId = responseBody.result.sys_id;
    console.log(`The sys_id is ${sysId}`);
    
    //To get the incident number
    const inc_num = responseBody.result.number;
    console.log(`Incident number is ${inc_num}`);
    
})

test(`Test to get a specific incident`, async ({request}) => {
    const getResponse = await request.get(`https://dev281290.service-now.com/api/now/table/incident/${sysId}`,
        {
            headers: {
               "Authorization": "Basic YWRtaW46aWprb144NkhKWE4t",
                "Content-Type": "application/json"
            }
        })

        //To get the response body
    const respBody = await getResponse.json();
    console.log(respBody);

    //To get the status code
    const apiStatusCode = getResponse.status();
    console.log(`The status code is ${apiStatusCode}`);
    
    expect(apiStatusCode, `expecting api status to be 200`).toBe(200);
    
})

