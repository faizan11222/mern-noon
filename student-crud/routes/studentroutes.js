const express = require('express');

const router = express.Router();
const { addStudent, getAllStudents, getStudentID, updateStudent, deleteStudent } = require('../controllers/studentcontroller');

//defining the route for create student API
router.post('/addstudent',addStudent);

//route of get all students API
router.get('/showstudents',getAllStudents);

//route of getting single student
router.get('/student/:id',getStudentID)

//route of updating the student
router.put("/updatestudent/:id",updateStudent)

//route fro deleting the student
router.delete('/deletestudent/:id',deleteStudent)
module.exports = router;