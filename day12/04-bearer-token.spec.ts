import { test } from "@playwright/test";

let accessToken:any;
let instUrl:any;
let id: any;

test(`To generate the access token`, async ({request}) => {
    const url = "https://login.salesforce.com/services/oauth2/token";
    const clientID = "3MVG9fe4g9fhX0E5hbGhek7Fp9ijXU30Q2eWnfUpEFvJ1mkEJCNcHmE01luXmSbgA73HgGRy5Ouj3c1IE2SLZ";
    const clientSecret = "0184AC8597512459A6BF96E1F46CB699EAEA1CEC34212BDDF383F28F99CCB376";
    const username = "majay3574@gmail.com";
    const password = "Ajaymichael@123";
    const grantType = "password";

    const generatingToken = await request.post(url,
        {
            headers: {
                "Connection-Type": "application/x-www-form-urlencoded",
                "Connection": "keep-alive"
            },

            form: {
                "grant_type": grantType,
                "client_id": clientID,
                "client_secret": clientSecret,
                "username": username,
                "password": password
            }
        })
        const generatingTokenJSON = await generatingToken.json();
        console.log(generatingTokenJSON);

        //Access Token
        accessToken = generatingTokenJSON.access_token;
        console.log(`Access token generated: ${accessToken}`);

        //Instance url
        instUrl = generatingTokenJSON.instance_url;
        console.log(`Instance url is ${instUrl}`);
        
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