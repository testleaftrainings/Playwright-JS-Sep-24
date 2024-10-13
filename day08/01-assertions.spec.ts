import { test, expect } from "@playwright/test";

test(`Test to assert the text box`, async ({page}) => {

    await page.goto("https://leafground.com/input.xhtml");
    const typeName = page.getByPlaceholder("Babu Manickam");
    //To check the text box is enabled
    await expect(typeName).toBeEnabled();
    //Enter the value
    await typeName.fill("Ranjini");
    await page.waitForTimeout(3000);

    const disabledTextbox = page.getByPlaceholder("Disabled");
    await expect(disabledTextbox).toBeDisabled();   
    await disabledTextbox.fill("Ranjini");       
    await page.waitForTimeout(3000);
})

test(`Assertion using hard assert`, async ({page}) => {

    await page.goto("https://leafground.com/input.xhtml");
    const appendTextbox = page.locator("//input[@value='Chennai']");
    await expect(appendTextbox).toBeEnabled({timeout:20000});
    await appendTextbox.fill("India");
    await page.waitForTimeout(3000);
})

test.only(`Assertion using soft assert`, async ({page}) => {

    await page.goto("https://leafground.com/input.xhtml");
    const appendTextbox = page.locator("//input[@value='Chennai']");
    await expect.soft(appendTextbox).toBeDisabled();     //assertion fails
    await appendTextbox.fill("India");
    const clearTextbox = page.locator("//input[@value='Can you clear me, please?']");
    await clearTextbox.clear();
    await clearTextbox.fill("Hi");
    await page.waitForTimeout(3000);
})