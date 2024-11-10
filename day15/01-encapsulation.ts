import { Page } from "playwright";

export class ProfilePage {
    private page: Page;
    private username = "#username";
    private password = "#password";
    private loginButton = "#Login";

    constructor(page:Page){
        this.page = page;
    }

    //Getter to retrieve the username that was entered
    public async getUsername() : Promise<string> {
        return await this.page.inputValue(this.username);
    }

    //Setter to enter a username
    public async setUsername(username:string): Promise<void> {
        await this.page.fill(this.username, username);
    }

    public async setPassword(password:string): Promise<void> {
        await this.page.fill(this.password, password);
    }

    //Method to perform the login action
    public async doLogin(username:string, password:string): Promise<void> {
        await this.setUsername(username);   //Sets the username
        await this.setPassword(password);   //Sets the password
        await this.page.click(this.loginButton);
    }
}

