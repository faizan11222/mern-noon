const jwt = require('jsonwebtoken');
const User = require('../models/user')

const protect = async (req,res,next) => {
   //read the authorization header
   const authHeader = req.headers.authorization;

   //check the header exists and starting with "Bearer"
   if(!authHeader || !authHeader.startsWith('Bearer ')){
    return res.status(401).json({success:false, message:'no token found. please login'})
   }

   //extracting the token without word Bearer from start
   const token = authHeader.split(' ')[1];

   try{
    //verify the token using our secret key from env file
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    //find the user by id from decoded token and attach to req object
    const user = await User.findById(decoded.id).select('-password');
    if(!user){
        return res.status(401).json({success:false, message:'user not found'})
    }
    req.user = user;
    next();
   }catch(error){
    return res.status(401).json({success:false, message:'invalid token'})
   }

}
module.exports = protect;