import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";

type salesFixture = {
    login: LoginPage
    home: HomePage
}

export const test = baseTest.extend<salesFixture>({
login: async({page,context}, use) => {
    const login = new LoginPage(page,context);
    await use(login);
},

home: async({page,context}, use) =>{
    const home = new HomePage(page,context);
    await use(home);
}
})