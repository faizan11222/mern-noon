//import student schema/model file

const Student = require('../models/student')

//function which can add the student data into database
const addStudent = async(req,res) => {
    try{
        //getting data from user as a body
        const {name, email, course, marks, city} = req.body;

        //validating my data
        if(!name || !email || !course || !marks || !city){
            return res.status(400).json({
                success:false,
                message:'Please provide all fields'
            })
        }

        //insert data into database
        const student = await Student.create({name, email, course, marks, city})
        return res.status(201).json({
            success:true,
            message:'Student has been created successfully'
        })
    }catch(error){

    }
}
module.exports = {addStudent};