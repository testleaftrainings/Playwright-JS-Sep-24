import { test } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

test(`Test to login using valid credentials`, async () => {
    //Create an object for LoginPage
    const loginPage = new LoginPage();
    await loginPage.initialize();
    await loginPage.navigateTo("https://login.salesforce.com");
    await loginPage.login("majay3574@gmail.com", "Ajaymichael@123");
    await loginPage.close();
})