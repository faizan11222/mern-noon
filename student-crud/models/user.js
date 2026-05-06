const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,'Name is required'],
        minlength:[2,'Name must be 2 characters long']
    },
    email:{
        type:String,
        trim:true,
        unique:true,
        lowercase:true,
        required:[true,'Name is required']
    },
    password:{
        type:String,
        required:[true,'Name is required'],
        minlength:[6,'Password must be 6 characters long'],
        select:false
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }
},{timestamps:true})

//pre saving. hash the password before saving
UserSchema.pre('save', async function(){
    //hash if the password field was not changed
    if(!this.isModified('password')) return
    //hashing/encrypting the password
    const salt = await bcrypt.salt(10)
    this.password = await bcrypt.hash(this.password,salt)
})

//compare entered password vs stored password
UserSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

module.exports = mongoose.model('User',UserSchema)