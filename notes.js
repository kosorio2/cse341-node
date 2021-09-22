
// function rqListener(req, res) { //You can name the arguments whatever you want
// }

// http.createServer(rqListener); //This is crucial when creating a server 

// http.createServer(function(req, res) {
// }); //This is an anonymous function 


// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method, req.headers); //This is an arrow function example 
//     // process.exit(); hard exits a program but you do not usually want to do this 
//     res.setHeader('Content-Type', 'text/html'); //This attaches a header to the response that tells the browser that the information is HTML 
//     res.write('<html>');
//     res.write('<head><title>My First Page</title><head</title></head>');
//     res.write('<body><h1>Hello From My Node.js Server</h1></body>')
//     res.write('</html>');
//     res.end(); //This means that we are no longer writing code because it will be sent back to the browser
// }); //This is a complicated way to send a response 

// const routes = require('./routes') //This is a custom file that node will look into to find what is registered 

// app.use((req, res, next) => {
//     console.log('In the middle ware')
//     next(); //This allows the request to continue to the next middleware in line 
// }); This allows us to use a middle ware software. The function will run for every request 