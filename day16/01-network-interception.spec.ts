import { expect, test } from "@playwright/test";

test(`Network interception using Salesforce login`, async ({page}) => {
    await page.route("**/aura?preloadActions", async (route, request) =>{
        if(request.method()==='POST') {
            console.log(`Request URL: ${request.url()}`);
            console.log(`Request headers:${request.headers()}`);
        } 
        else {
            route.continue();
        }
    })

    //Enter the Username, Password and click on the Login button.
    await page.goto("https://login.salesforce.com");
    await page.fill("#username", "ranjini.r@testleaf.com");
    await page.fill("#password", "Testleaf@543");
    await page.click("#Login");
    const title = await page.title();
    console.log(`The title of the page is ${title}`);
    await expect(page).toHaveTitle("Home | Salesforce");
   
})