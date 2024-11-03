import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

    private usernameSelector: string;
    private passwordSelector: string;
    private loginButtonSelector: string;

    constructor() {
        super(); //Calls the BasePage constructor
        this.usernameSelector = "#username";
        this.passwordSelector = "#password";
        this.loginButtonSelector = "#Login";
    }

    //Method to login using username and password
    public async login(username: string, password:string): Promise<void> {
        await this.page.fill(this.usernameSelector, username);
        await this.page.fill(this.passwordSelector, password);
        await this.page.click(this.loginButtonSelector);
    }
}