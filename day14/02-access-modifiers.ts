import { firefox } from "@playwright/test";

class Browser {

    private browserType: string;

    constructor(browserType: string) {
        this.browserType = browserType;
    }

    private logSession() {
        console.log(`Browser session for ${this.browserType}`);
    }

    public launchBrowser(): string {
        this.logSession(); //Private method can be called within the class
        return `Launching ${this.browserType} browser`
    }
}

const browserSession = new Browser('edge');
console.log(browserSession.launchBrowser());

class BaseClass {

    protected browserType: string;

    constructor(browserType: string) {
        this.browserType = browserType;
    }

    protected logSession() {
        console.log(`This is from the base class`);
        console.log(`Browser session for ${this.browserType}`);
    }
    
    public launchBrowser(): string {
        this.logSession(); //Private method can be called within the class
        return `Launching ${this.browserType} browser`
    }
}

class Dashboard extends BaseClass {

    protected logSession(): void {
        console.log(`This is from Dashboard class`);
    }

    public captureScreenshot() {
           this.logSession ();
           console.log(`Capturing screenshot in ${this.browserType}`);
           
    }
}

const session = new Dashboard('firefox');
session.captureScreenshot();