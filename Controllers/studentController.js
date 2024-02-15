const students = require('../Models/studentModel')


// register
exports.register = async (req, res) => {
    console.log("Inside Register API");
    const { firstname, lastname, address, email, gender, mobile, password, dob, course } = req.body
    console.log(firstname, lastname, address, email, gender, mobile, password, dob, course);
    try {
        const existingStudent = await students.findOne({ email })
        if (existingStudent) {
            res.status(406).json("Student already exists!!!")
        }
        else {
            const newStudent = new students({
                firstname, lastname, address, email, gender, mobile, password, dob, course
            })
            await newStudent.save()
            res.status(200).json(newStudent)
        }
    } catch (err) {
        res.status(401).json(err)
    }
}

exports.getRegister = async (req, res) => {
    console.log("Inside Get Register Api");
    try {
        const allStudents = await students.find()
        if (allStudents) {
            
            res.status(200).json(allStudents)
        } else {
            res.status(406).json("No Students Found!!!")
        }
    }
    catch (err) {
        res.status(406).json(err)
    }
}