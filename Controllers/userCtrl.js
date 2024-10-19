const User = require('../Models/User.js');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');

const loginCtrl = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (email === '' || password === '') {
            return res.status(400).send({
                message: "Please enter your email and password 😒",
                success: false
            });
        }

    const user = await User.findOne({email});
        if (!user) { 
            return res.status(404).send({
                message: "User Not Found. Please Register first.😒",
                success: false
            });
        }

       

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({
                message: "Invalid Email or Password 😒",
                success: false,
            });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.SECRET_KEY,
            { expiresIn: "14d" }
        );

        res.status(200).send({
            message: "Login Successful 😊",
            success: true,
            token,
            user: user.username,
            isLogged : true
        });
        
    } catch (error) {
        console.error(error.message); 
        res.status(500).send({
            message: "Internal Server Error 😢. Please Try after some time",
            success: false
        });
    }
}



const registerCtrl = async (req ,res)=>{
    const {username , email, password} = req.body;

    
    try{

        if(!username || !email || !password){
            return res.status(400).send({
                message: "Please fill all the fields 😒",
                success: false
            });
        }
        // existing user

        const existingUser = await User.findOne({email});

        console.log(existingUser);

        if(existingUser){
            return res.status(400).send({
                message: "Email already exists 😒",
                success: false
            });
        }

        const hashPassword = await bcrypt.hash(password,10);
        const newUser = new User({
            username,
            email,
            password: hashPassword
            });
            await newUser.save();
           
             const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, {
               expiresIn: "14d"
             });


            res.status(201).send({
              message: "User created successfully 😊",
              success: true,
              token,
              user: newUser.username
            });
    }catch(error){
        console.log(error);
        res.status(500).send({
            message: "Internal Server Error 😢. Please Try after some time",
            success: false
        });
    }
}


module.exports = { 
    loginCtrl,
    registerCtrl
};
