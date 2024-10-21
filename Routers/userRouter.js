const express = require('express');
const route = express.Router();
const { loginCtrl , registerCtrl, verifyCtrl } = require('../Controllers/userCtrl.js');


route.post('/login', loginCtrl); 

route.post('/signup', registerCtrl);


route.get('/logout', (req, res) => {
    
    res.send('Hello world');
});

route.post('/verifyUser',verifyCtrl);

module.exports = route; 
