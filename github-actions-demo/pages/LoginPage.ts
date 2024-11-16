/**
 * Enter username
 * Enter password
 * Click Login
 */

import { PlaywrightWrapper } from "../utils/playwright";
import { Page, BrowserContext } from "@playwright/test";
import { URLConstants } from "../constants/url-constants";

export class LoginPage extends PlaywrightWrapper {

    static pageUrl = URLConstants.baseURL;
    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    async doLogin(username: string, password: string) {
        await this.loadApp(LoginPage.pageUrl);
        await this.type("#username", "Username", username);
        await this.type("#password", "Password", password);
        await this.click("#Login", "Login", "Button");
    }
}
