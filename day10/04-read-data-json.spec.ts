import { expect, test } from "@playwright/test";
import loginAppData from "../../data/login.json";
import fs from "fs";
import path from "path";
/**
 * const loginAppData = [{
    "testTitle": "TC_001",
    "username": "ranjini.r@testleaf.com",
    "password": "Testleaf@543"
},
{
    "testTitle": "TC_002",
    "username": "majay3574@gmail.com",
    "password": "Ajaymichael@123"
}]
 * 
 * 
 */
loginAppData.forEach(testDataObject => {

    test(`Test to read the static data using json file ${testDataObject.testTitle}`,async ({page}) => {
    
        await page.goto("https://login.salesforce.com");
        await page.fill("#username", testDataObject.username);
        await page.fill("#password", testDataObject.password);
        await page.click("#Login");
        const title = await page.title();
        console.log(`The title of the page is ${title}`);
        await expect(page).toHaveTitle("Home | Salesforce");
    })
});

//Reading the dynamically
const loginData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/login.json'), 'utf-8'))

for(const credentials of loginData) {

    test.only(`Test to read the dynamic data using json file ${credentials.testTitle}`,async ({page}) => {
    
        await page.goto("https://login.salesforce.com");
        await page.fill("#username", credentials.username);
        await page.fill("#password", credentials.password);
        await page.click("#Login");
        const title = await page.title();
        console.log(`The title of the page is ${title}`);
        await expect(page).toHaveTitle("Home | Salesforce");
    })

}