var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BasePage = /** @class */ (function () {
    function BasePage(url) {
        this.url = url;
    }
    //Concrete method with full implementation
    BasePage.prototype.openPage = function () {
        console.log("Navigating to ".concat(this.url));
        //Example: this.page.goto(this.url)
    };
    return BasePage;
}());
//Login Page inherits from BasePage
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        return _super.call(this, "https://www.amazon.in/login") || this;
    }
    //Implements the abtract method
    Login.prototype.getTitle = function () {
        return 'Login Page';
    };
    return Login;
}(BasePage));
var loginPage = new Login();
loginPage.openPage();
console.log(loginPage.getTitle());
var DashboardPage = /** @class */ (function () {
    function DashboardPage() {
    }
    DashboardPage.prototype.open = function () {
        console.log("Opening the Dashboard Page");
    };
    DashboardPage.prototype.close = function () {
        console.log("Closing the Dashboard Page");
    };
    return DashboardPage;
}());
var dashboard = new DashboardPage();
dashboard.open();
dashboard.close();
