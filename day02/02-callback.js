//Calling the function
processUserInput(displayName)

function processUserInput(callback) {
    let name = prompt("Please enter your name");
    callback(name);     //displayName(Sathish)
}

function displayName(name) { //displayName(Sathish)
    alert(`Hello ${name}`)
}

