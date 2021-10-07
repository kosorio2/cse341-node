const fs = require('fs'); //This allows us to work with the file system 

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method; 

    if (url === '/') { //The === sign means that it will only work if url is spelled correctly and if it is a string value 
        res.write('<html>');
        res.write('<head><title>My First Page</title><head</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'); //This will send a POST Request to /message
    
        res.write('</html>');
        return res.end(); //The word return makes it so that it quits the function so that the other res.write is not executed 
    }
    if (url === '/message' && method === 'POST'){
        const body = []; //Request body we are working with 
        req.on('data', (chunk) => { //We receive a chunk of data 
            console.log(chunk); // Will tell us how many times it is executed 
            body.push(chunk); //This will be pushed until all the data is loaded  
        }); //This allows us to listen to certain events. The data event will be fired every time there is a new chunk of information 

        return req.on('end', () => { //This will help work with all the chunks 
            //The bus stops and we can interact with it
            const parsedBody = Buffer.concat(body).toString(); //parsedBody is a buffer 
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302; //This sets the status code
                res.setHeader('Location', '/'); //This sets the header 
                return res.end(); //This makes it so that the next code will not be executed immediately 
            }); 
            //The writeFileSync blocks the execution of the rest of the code until the file is created. So its better to use writeFile    
        });    
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head</title></head>');
    res.write('<body><h1>Hello From My Node.js Server</h1></body>')
    res.write('</html>');
    res.end(); 
}; 

module.exports = requestHandler //This allows us to export and it is used by Node

// module.exports = {
    // handler: requestHandler,
    // someText: 'Some Hard Coded Text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some Hard coded text'; 

//Shortcut offered by Node.js 
//exports.handler = requestHandler 
