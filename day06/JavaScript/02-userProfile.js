function fetchUserData(userId) {
    //Create a new promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(userId === 21) {
                resolve({id:21, name:"Asha", email:"ash@gmail.com"})
            } else {
                reject(new Error("User not found"));
            }
        }, 5000)
    })
}

//Consuming the promise
fetchUserData(21)
.then(userDetails => {
    console.log("User Found:", userDetails.name);
    
})
.catch(errorMessage => {
    console.error(errorMessage);
})