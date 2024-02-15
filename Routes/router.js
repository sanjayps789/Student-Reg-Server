const express = require('express')
const studentController = require('../Controllers/studentController')
const router = new express.Router()

// register API
router.post('/register',studentController.register)

// get allStudents API
router.get('/all-students',studentController.getRegister)
module.exports = router