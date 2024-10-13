import { test } from "@playwright/test";

test(`Test to handle the dialog`, async ({page}) => {

    await page.goto("https://leafground.com/alert.xhtml");
    //Simple dialog
    await page.locator("text=Show").first().click();
    await page.waitForTimeout(3000);
    //Confirm dialog
    await page.locator(".card").filter({hasText:"(Confirm Dialog)"}).locator("//span[text()='Show']").click();
    await page.waitForTimeout(3000);
    //Prompt Dialog
    const cardLocator = page.locator(".card").filter({hasText:"(Prompt Dialog)"});
    await cardLocator.locator("button").filter({hasText:"Show"}).click();
    await page.waitForTimeout(3000);
})

test(`Test to handle the dialog using page.on event listeners`, async ({page}) => {

    await page.goto("https://leafground.com/alert.xhtml");
    //Event Listener
    page.on('dialog', async dialog => {
        const message = dialog.message();
        console.log(`The message says ${message}`);
        const type = dialog.type();
        console.log(`The type of the alert is ${type}`);
        if(type==='confirm'){
            await dialog.accept();
        } else if(type==='prompt') {
            await dialog.accept('Nithya');
        } else
            dialog.dismiss();
    })

    //Simple dialog
    await page.locator("text=Show").first().click();
    await page.waitForTimeout(3000);
    //Confirm dialog
    await page.locator(".card").filter({hasText:"(Confirm Dialog)"}).locator("//span[text()='Show']").click();
    await page.waitForTimeout(3000);
    //Prompt Dialog
    const cardLocator = page.locator(".card").filter({hasText:"(Prompt Dialog)"});
    await cardLocator.locator("button").filter({hasText:"Show"}).click();
    await page.waitForTimeout(3000);
   
})

test.only(`Test to handle the dialog using page.once event listeners`, async ({page}) => {

    await page.goto("https://leafground.com/alert.xhtml");

    //Simple dialog
    await page.locator("text=Show").first().click();
    await page.waitForTimeout(3000);
    //Confirm dialog
    await page.locator(".card").filter({hasText:"(Confirm Dialog)"}).locator("//span[text()='Show']").click();
    await page.waitForTimeout(3000);

    //Event Listener
    page.once('dialog', async dialog => {
        const message = dialog.message();
        console.log(`The message says ${message}`);
        const type = dialog.type();
        console.log(`The type of the alert is ${type}`);
        dialog.accept('Nithya');
    })
    //Prompt Dialog
    const cardLocator = page.locator(".card").filter({hasText:"(Prompt Dialog)"});
    await cardLocator.locator("button").filter({hasText:"Show"}).click();
    await page.waitForTimeout(3000);
   
})