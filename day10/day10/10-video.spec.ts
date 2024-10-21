import { chromium, expect, test } from "@playwright/test";

test(`Test to Verify Lead Creation and Conversion to Opportunity`, async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext({
        recordVideo: {
            dir: './videos',
            size: {width: 720,
                height: 1200
            }
        }
    });
    
    const page = await context.newPage();
    //Enter the Username, Password and click on the Login button.
    await page.goto("https://login.salesforce.com");
    await page.fill("#username", "ranjini.r@testleaf.com");
    await page.fill("#password", "Testleaf@543");
    await page.click("#Login");
    const title = await page.title();
    console.log(`The title of the page is ${title}`);
    await expect(page).toHaveTitle("Home | Salesforce");

    await context.close();
    await browser.close();
})