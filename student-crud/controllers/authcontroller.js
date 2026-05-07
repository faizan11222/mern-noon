const jwt = require('jsonwebtoken');
const User = require('../models/user');
const user = require('../models/user');

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

            //check if the email already exists into database or not
            const existingUser = await User.findOne({email})
            if(existingUser){
                return res.status(400).json({success:false, message:'This email already registered!'})
            }
            //if email is new then save the user data
            const user = await User.create({ name,email,password })
            //generating a token for new registered user
            const token = signToken(user._id);

            res.status(201).json({
                success:true,
                message:'Account created successfully!',
                token,
                user:{id:user._id, name:name, email:email, role:user.role}
            })
        }catch(error){
            return res.status(500).json({
                success:false,
                message:'Something went wrong!'
            })
        }
    }

    module.exports = {register}