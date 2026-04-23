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

//API for getting all the data of student
const getAllStudents = async(req,res) =>{
    try{
        const students = await Student.find();

        res.status(200).json({
            success:true,
            message:'All students fetched successfully!',
            //getting students count
            count: students.length,
            //displaying the students data
            data:students
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:'Server error!',
            error: error.message
        })
    }
}

module.exports = {addStudent, getAllStudents};