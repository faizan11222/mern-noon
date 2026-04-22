const express = require('express');

const router = express.Router();
const { addStudent } = require('../controllers/studentcontroller');

//defining the route for create student API
router.post('/add',addStudent);

module.exports = router;