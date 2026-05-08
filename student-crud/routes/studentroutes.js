const express = require('express');
const protect = require('../middleware/authmiddleware');


const router = express.Router();
const { addStudent, getAllStudents, getStudentID, updateStudent, deleteStudent } = require('../controllers/studentcontroller');

//defining the route for create student API
router.post('/addstudent', protect, addStudent);

//route of get all students API
router.get('/showstudents',getAllStudents);

//route of getting single student
router.get('/student/:id', protect, getStudentID)

//route of updating the student
router.put("/updatestudent/:id", protect, updateStudent)

//route fro deleting the student
router.delete('/deletestudent/:id', protect,deleteStudent)
module.exports = router;