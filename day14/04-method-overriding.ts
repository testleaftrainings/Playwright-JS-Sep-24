class Page {

    public loadUrl(): void {
        console.log("Loading the base page");
    }
}

class LoginPage extends Page {

    public loadUrl(): void {
        console.log("Laoding the login page");  
    }
}

const login = new LoginPage();
login.loadUrl();
