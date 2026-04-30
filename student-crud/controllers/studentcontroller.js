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
        if(error.code === 11000){
            return res.status(400).json({
                success:false,
                message:'Email already exists'
            })
        }
        return res.status(500).json({
            success:false,
            message:'Server error',
            error: error.message
        })
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

//API for getting data of any specific student
const getStudentID = async (req,res) => {
    try{
        const student = await Student.findById(req.params.id)
        if(!student){
            return res.status(404).json({
                success:false,
                message:'Student not found'
            })
        }
        //if student found
        res.status(200).json({
            success:true,
            message:'Student Found!',
            data:student
        })

    }catch(error){
        //checking if the ID is in valid format or not
        if(error.name === 'CastError'){
            return res.status(400).json({
                success:false,
                message:'Invalid ID format'
            })
        }

    }
}

//API for updating the data
const updateStudent = async(req,res) => {
    try{
    const {name,email,course,city,marks} = req.body;
    
   
    //getting the student previous data to update
    const updateData = {};
    //getting the previous values from database
    updateData.name = name;
    updateData.email = email;
    updateData.course = course;
    updateData.marks = marks;
    updateData.city = city;

    //finally updating the data into database
    const student = await Student.findByIdAndUpdate(
        req.params.id, updateData,
        
    )
    //validating if student not found
    if(!student){
        return res.status(404).json({
            success:false,
            message:'Student not found!'
        })
    }
    return res.status(200).json({
            success:true,
            message:'Student data updated successfully!',
            data:student
        })
    }catch(error){
         if(error.name == 'CastError'){
        return res.status(400).json({
            success:false,
            message:'Invalid ID format'
        })
        res.status(500).json({
            success:false,
            message:'Server error'
        })
    }
    }
}

//API for deleting the student record
const deleteStudent = async (req,res) => {
    try{
        const student = await Student.findByIdAndDelete(req.params.id);
    //    if(!student){
    //     return res.status(404).json({
    //         success:false,
    //         message:'Student do not exist'
    //     })
    //}
        res.status(200).json({
            success:true,
            message:'Student deleted successfully!'
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:'Server error',
            error: error.message
        })
    }
}

module.exports = {addStudent, getAllStudents, getStudentID, updateStudent, deleteStudent};