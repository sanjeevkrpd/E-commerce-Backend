const express = require('express');
const route = express.Router();
const { loginCtrl , registerCtrl } = require('../Controllers/userCtrl.js');


route.post('/login', loginCtrl); 
route.post('/signup', registerCtrl);
route.get('/logout', (req, res) => {
    
    res.send('Hello world');
});

module.exports = route; 
