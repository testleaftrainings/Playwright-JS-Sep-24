import { test } from "@playwright/test";

test(`Test to create a lead`, async ({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Enter username
    await page.locator("#username").fill("demosalesmanager");
   // await page.fill("#username", 'demosalesmanager');

   /* //Using XPath
    await page.locator("//input[@id='username']").fill("demosalesmanager");
    //Using getByLabel
    await page.getByLabel("Username").fill('demosalesmanager');
    //Reusability
    const username = page.locator("#username");
    await username.fill('demosalesmanager');

    const username = page.locator("input[id='usernmae']");
    await username.fill('demosalesmanager'); */

    //Enter password
    await page.fill("#password", "crmsfa");

    //Click Login
    await page.click(".decorativeSubmit");
    //await page.locator(".decorativeSubmit").click();

    //Click CRM/SFA (legacy text)
    await page.locator("text=CRM/SFA").click({timeout:10000});

    //Click Leads
    await page.click("//a[text()='Leads']");
    //await page.getByRole('link', {name:'Leads'}).click();

    //Click Create Lead
    await page.click("//a[text()='Create Lead']");

    //Enter company name
    const companyName = page.locator("#createLeadForm_companyName");
    await companyName.fill("Testleaf");

    //Enter first name
    await page.fill("input[id='createLeadForm_firstName']", "Ranjini");

    //Enter last name
    await page.fill("input[id='createLeadForm_lastName']", "R");

    //Select the Source dropdown
    //Locate the dropdown by value
    await page.selectOption("#createLeadForm_dataSourceId", {value:"LEAD_DIRECTMAIL"});

    //Get the values in the dropdown
    const dropdown = page.locator("#createLeadForm_dataSourceId>option");
    const dropdownCount = await dropdown.count();
    console.log(`No of values present ${dropdownCount}`);
    
    for (let index = 0; index < dropdownCount; index++) {
       console.log(await dropdown.nth(index).innerText());     
    }

    await page.waitForTimeout(3000);

    //Select Currency dropdown by index
    await page.selectOption("#createLeadForm_currencyUomId", {index:13});
    await page.waitForTimeout(3000);
    
    //Select Country dropdown by label
    await page.selectOption("#createLeadForm_generalCountryGeoId", {label:"India"});
    await page.waitForTimeout(3000);

    //Click Create Lead
    await page.click(`[name='submitButton']`);

    //Get the status
    console.log(`The status is ${await page.locator("#viewLead_statusId_sp").innerText()}`);
    
})



