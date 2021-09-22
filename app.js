// server.listen(3000); //This starts a process where node keeps listening for incoming requests 

// const http = require('http'); //This imports files in node js
const path = require('path');

const express = require('express'); // 3rd party package 
const bodyParser = require('body-parser');

const app = express(); //App object

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//The parsing of the body should go first 
app.use(bodyParser.urlencoded({extended: false})); //This registers a middleware. This parses through the body
app.use(express.static(path.join(__dirname, 'public'))); //This allows us to access the css files 


app.use('/admin', adminData.routes); //This allows us to put a common starting point 
app.use(shopRoutes); //The order does matter when you are using the word "use"

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000); 

// const server = http.createServer(app);
// server.listen(3000); 
