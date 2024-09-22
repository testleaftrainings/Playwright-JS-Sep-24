function getBrowser() {
    if(browserName==="chrome") {
        console.log("Supported browser");        
    } else {
        console.log("Unsupported browser");        
    }
}
let browserName = 'Chrome';
getBrowser();

function getBrowserVersion() {
    if(browser==='chrome') {
        return 128;
    } else if (browser==='edge') {
        return 127;
    } else if(browser==='safari') {
        return 18;
    } else if(browser==='firefox') {
        return 128;
    } else {
        return 'Unsupported browser'
    }
}

let browser = 'edge';
//Function Expression
let browserFunction = getBrowserVersion();
console.log(browserFunction);

//Switch case
console.log("----------------");
console.log("Executing switch case");
function getVersion() {
    switch (browser) {
        case 'chrome':
            console.log("128");            
            break;
        case 'edge':
            console.log("127");            
            break;
        case 'safari':
            console.log("18");            
            break;
        case 'firefox':
            console.log("128");            
            break;
        default:
            console.log("Unsupported browser"); 
            break;
    }
}
browser = 'safari';
getVersion();

