const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 

const PORT = process.env.PORT || 3000

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('615f09e85b0929a713e4e6c2')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

const cors = require('cors') // Place this with other requires (like 'path' and 'express')
const corsOptions = {
    origin: "https://e-commerce-kathy.herokuapp.com/",
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    family: 4
};

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://hansen_kathy2:dzl9BKShIfaRMszI@week4.ckzbr.mongodb.net/test";
                        

mongoose.connect(MONGODB_URL, options)
.then(result => {
  User.findOne().then(user => {
    if (!user) {
      const user = new User({
        name: 'Kathy',
        email: 'kathy@test.com',
        cart: {
          items: []
        }
      });
      user.save();
    }
  });
  app.listen(PORT, function(){
    console.log("Server is running on Port 3000")
  });
}).catch(err => {
  console.log(err); 
})
