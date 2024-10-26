import { chromium, test } from "@playwright/test";

test(`Basic Authentication using persistent context`, async () => {
    
    const userDataDir = "./myUserDataDir"
    const context = await chromium.launchPersistentContext(userDataDir, {
        headless:false,
        permissions: ['notifications','geolocation'],
        //executablePath:"C:\Program Files\Google\Chrome\Application\chrome.exe",
        httpCredentials: {
            username:"admin",
            password:"testleaf"
        }
    })
    const page = await context.newPage();
    await page.goto("https://leafground.com/auth.xhtml");
    await page.getByRole("button", {name: "Basic Auth"}).click();
    await page.waitForTimeout(5000);
})