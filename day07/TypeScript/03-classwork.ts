/**
 * Define the type supportedBrowser = Chrome|Edge
 * Define the browserVersion = 127|128
 * Define the type browserProfile = supportedBrowser & browserVersion (object literals)
 * Define the function and pass the argument (browser)
 * Launch the Chrome browser
 * Call the function
 */

type supportedBrowser = "Chrome"|"Edge";
type browserVersion = "127"|"128";
type browserProfile = {
    browserName: supportedBrowser;
    version: browserVersion;
}

function callBrowser(browser: browserProfile):void {
    if(browser.browserName==="Chrome" && browser.version==="127"){
        console.log(`Launch the Chrome browser`);
    } else
    console.log(`Launch Edge browser`);    
}

const chromeBrowser: browserProfile = {
    browserName: "Chrome",
    version: "127"
}

const edgeBrowser: browserProfile = {
    browserName: "Edge",
    version: "128"
}

callBrowser(edgeBrowser);