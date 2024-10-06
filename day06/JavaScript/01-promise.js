let promise = new Promise ((resolve, reject) => {
    let success = true; //This is whether your food will arrive or not
    if(success) {
        resolve("Your food arrived!"); //The food arrive, promise is resolved
    } else {
        reject("Your food didn't arrive"); //Promise is rejected
    }
})

promise 
    .then(result => {
        console.log(result);  
    })
    .catch(error => {
        console.log(error); 
    })
    