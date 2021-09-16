//Async code 
//It is a callback function, which means it will move onto the next code and then return to run the answer 

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done'); //This code is mostly given to us
        }, 1500); 
    });
    return promise;  //This will return the promise 

};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData().then(text => { //This returns the first promise 
        console.log(text); 
        return fetchData(); 
    }) //This is good so that we do not have nested promises 
    .then(text => {
        console.log(text);
        return fetchData(); //This returns the second promise 
    }); //This allows us to return the callback function 
}, 2000); //This is built into node.js 




