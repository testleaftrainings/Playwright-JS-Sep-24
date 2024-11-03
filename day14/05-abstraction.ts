abstract class BasePage {

    protected url:string;
    constructor(url: string){
        this.url = url;
    }
    //Concrete method with full implementation
    public openPage(): void {
        console.log(`Navigating to ${this.url}`);
        //Example: this.page.goto(this.url)
    }

    //Abstract method - no implementation
    abstract getTitle(): string;
}

//Login Page inherits from BasePage
class Login extends BasePage {

    constructor() {
        super("https://www.amazon.in/login")
    }
    //Implements the abtract method
    getTitle(): string {
        return 'Login Page';
    }

}
const loginPage = new Login();
loginPage.openPage();
console.log(loginPage.getTitle());

interface PageActions {
    open(): void;
    close(): void; 
}

class DashboardPage implements PageActions {
    open(): void {
      console.log("Opening the Dashboard Page");
      
    }
    close(): void {
        console.log("Closing the Dashboard Page");
    }
}

const dashboard = new DashboardPage();
dashboard.open();
dashboard.close();