import { expect } from "@playwright/test";
import { test } from "./retry-logic.spec";

test(`Test to Verify Lead Creation and Conversion to Opportunity`, async ({page}) => {
   
    //Enter the Username, Password and click on the Login button.
    await page.goto("https://login.salesforce.com");
    await page.delayedFill("#username", "ranjini.r@testleaf.com");
    await page.delayedFill("#password", "Testleaf@543");
    await page.clickAndDelay("#Login");
    const title = await page.title();
    console.log(`The title of the page is ${title}`);
    await expect(page).toHaveTitle("Home | Salesforce");
   
})