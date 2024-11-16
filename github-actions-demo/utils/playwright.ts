import { Page, BrowserContext,test } from "@playwright/test";
export abstract class PlaywrightWrapper {
    readonly page:Page;
    readonly context: BrowserContext;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
    }

    async loadApp(url: string): Promise<void> {
        try{
            await test.step(`The ${url} is loaded`, async () => {
                await this.page.goto(url);
              });
        } catch (error) {
            console.error(`Error loading the page`, error);
        }
    }

    async type(locator: string, name: string, data: string): Promise<void> {
        try {
            await test.step(`Textbox ${name} filled with ${data}`, async () => {
                await this.page.locator(locator).fill(data);
            })
        } catch (error) {
            console.error (`Failed to locate the textbox`, error);
        }
    }

    async click(locator: string, name: string, type: string) {
        await test.step(`The ${name} ${type} is clicked`, async () => {
            await this.page.waitForSelector(locator, {state: 'attached'});
            await this.page.locator(locator).click();
        })
    }
}