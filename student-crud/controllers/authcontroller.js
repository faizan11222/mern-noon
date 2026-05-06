const jwt = require('jsonwebtoken');
const User = require('../models/user');

//registering the jwt for apis
const signToken = (id) => 
    jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRES_IN
    })

    //creating resigter POST API
    const register = async(req,res) => {
        try{
            const {name,email,password} = req.body;

            //validation
            if(!name || !email || !password){
                return res.status(400).json({success:false, message:'please enter the required fields'})
            }
        }catch(error){

        }
    }