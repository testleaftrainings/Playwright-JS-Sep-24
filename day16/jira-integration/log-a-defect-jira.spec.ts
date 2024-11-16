import { expect, test } from "@playwright/test";
import { createJiraIssue } from "./jira-integration";

test(`Verify case creation`, async ({page}) => {
    const firstname = "Ranjini";
    const lastname = "R";
    const company = "Qeagle";
    const opportunityName = "Nedbank"
    //Enter the Username, Password and click on the Login button.
    await page.goto("https://login.salesforce.com");
    await page.fill("#username", "ranjini.r@testleaf.com");
    await page.fill("#password", "Testleaf@543");
    await page.click("#Login");
    const title = await page.title();
    console.log(`The title of the page is ${title}`);
    await expect(page).toHaveTitle("Home | Salesforce");
    //Click on the App Launcher toggle button.
    await page.click(".slds-icon-waffle");
    //Click on the View All link.
    await page.getByText("View All").click();
    //Type ‘Marketing’ in the search box and click on the Marketing link.
    await page.getByPlaceholder("Search apps or items...").fill("Marketing");    
    await page.click("//p[@class='slds-truncate']");
    //Navigate to the Leads tab from the Marketing dashboard.
    await page.click("//a[@title='Leads']/span");
    //Click on the New button to create a lead.
    await page.click("//a[@title='New']");
    //Fill in all the mandatory fields (Salutation, First Name, Last Name, Company) with valid data.
    await page.click("//label[text()='Salutation']/following::span[text()='--None--']");
    await page.click("//span[text()='Ms.']");
    await page.fill("//label[text()='First Name']/following::input[@name='firstName']", firstname);
    await page.fill("//label[text()='Last Name']/following::input[@name='lastName']", lastname);
    await page.fill("//label[text()='Company']/following::input[@name='Company']", company);
    //Click on the Save button.
    await page.click("button[name='SaveEdit']");
    //A confirmation message should also be displayed and verified.
    const toastMessage = await page.locator("//div[@class='toastContent slds-notify__content']").innerText();
    console.log(toastMessage);
    await page.waitForTimeout(5000);

    createJiraIssue("Salesforce-Lead Conversion", "Testing it using Playwright");
})