import { Browser, BrowserContext, Page, chromium } from "playwright";

export class BasePage {

//access modifier property name: type
    protected browser: Browser;
    protected context: BrowserContext;
    protected page: Page;

    constructor() {
        //this refers to the instance of the class
        this.browser = null as any;
        this.context = null as any;
        this.page = null as any;
    }

    //Method to initialize the browser and page
    //access modifier async methodName() : return type
    public async initialize(): Promise<void> {
        this.browser = await chromium.launch({headless:false});
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }

    //Method to navigate to a specific URL
    public async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    // Method to close the browser
    public async close(): Promise<void> {
        await this.browser.close();
    }
}