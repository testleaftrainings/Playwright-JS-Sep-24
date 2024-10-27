import { expect, test } from "@playwright/test";
import { getAccessToken } from "./authHelper";

let accessToken:any;
let instUrl:any;
let id: any;

test(`Use access token in the test from the export function getAccessToken`, async () => {
    const authData = await getAccessToken();
    accessToken = authData.accessToken    ;
    instUrl = authData.instUrl;
})

test(`Test to create a new opportunity`, async ({request}) => {
    const oppUrl = `${instUrl}/services/data/v58.0/sobjects/Opportunity`
    const opportunity = await request.post(oppUrl, 
        {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },

            data: {
                "CloseDate" : "2024-12-22",
                "StageName" : "Prospecting",
                "Name" : "Created using PLaywright API"
                }
        })

        const opp_response = await opportunity.json();
        console.log(opp_response);

        //To get the opportunity id
        id = opp_response.id;
        console.log(`Opportunity id is ${id}`);

})

test(`Test to get the created opportunity`, async ({request}) => {
    const oppUrl = `${instUrl}/services/data/v58.0/sobjects/Opportunity/${id}`
    const getOpportunity = await request.get(oppUrl, 
        {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            }
        })

        const get_response = await getOpportunity.json();
        console.log(get_response);

        //To get the status
        const status = getOpportunity.status();
        console.log(`The status is ${status}`);
        
        const statusText = getOpportunity.statusText();
        console.log(`The status text is ${statusText}`);
})

test(`Test to update the opportunity`, async ({request}) => {
    const updateOppUrl = `${instUrl}/services/data/v58.0/sobjects/Opportunity/${id}`
    const updateOpportunity = await request.patch(updateOppUrl, 
        {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },

            data: {
                "Amount": "2000000"
            }
        })

        //To get the status
        const status = updateOpportunity.status();
        console.log(`The status is ${status}`);
        expect(status).toBe(204);
        
        const statusText = updateOpportunity.statusText();
        console.log(`The status text is ${statusText}`);
})

test(`Test to get the updated opportunity`, async ({request}) => {
    const getOppUrl = `${instUrl}/services/data/v58.0/sobjects/Opportunity/${id}`
    const getOpportunity = await request.get(getOppUrl, 
        {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            }
        })

        const get_response = await getOpportunity.json();
        console.log(get_response);

        //To get the status
        const status = getOpportunity.status();
        console.log(`The status is ${status}`);
        
        const statusText = getOpportunity.statusText();
        console.log(`The status text is ${statusText}`);
})
