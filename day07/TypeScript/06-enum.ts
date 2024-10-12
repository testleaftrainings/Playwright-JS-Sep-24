/**
 * Enum - a set of named constants (enumeration)
 * 
 * 1. Numeric enum - auto incremented
 * 2. String enum - string values, no auto-increment behaviour
 * 3. Heterogeneous enum 
 */

import { Browser } from "playwright";

//Numeric enum
enum TestResult {
    Pass = 2,
    Fail,
    Skip
}

function logTestResult(testName:string, result:TestResult): void {
    console.log(`Test: ${testName}`, `Result Code: ${result}` );
    
}

logTestResult("Login Test", TestResult.Pass);
logTestResult("SigUp Test", TestResult.Fail);
logTestResult("Update Profile Test", TestResult.Skip);

//String enum
enum BrowserType {
    Chrome = "chrome",
    Firefox = 'firefox',
    Edge = 'edge',
    Webkit = 'safari'
}

function launchBrowser(browserType: BrowserType) {
    console.log(`Launching Browser: ${browserType}`);
    
}

launchBrowser(BrowserType.Chrome);
launchBrowser(BrowserType.Edge);
launchBrowser(BrowserType.Firefox);
launchBrowser(BrowserType.Webkit);

//Heterogeneous enum
enum BrowserStatus {
    Open,
    Crash = -207, 
    Incognito,
    Close = "Closed",
    Unknown = "Unknown"
}

function reportBrowserStatus(status: BrowserStatus): string {
    return `Current browser status is ${status}`
}

console.log(reportBrowserStatus(BrowserStatus.Open));
console.log(reportBrowserStatus(BrowserStatus.Close));
console.log(reportBrowserStatus(BrowserStatus.Crash));
console.log(reportBrowserStatus(BrowserStatus.Unknown));