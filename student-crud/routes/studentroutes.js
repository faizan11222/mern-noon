const express = require('express');

const router = express.Router();
const { addStudent, getAllStudents } = require('../controllers/studentcontroller');

//defining the route for create student API
router.post('/addstudent',addStudent);

//route of get all students API
router.get('/showstudents',getAllStudents);

module.exports = router;