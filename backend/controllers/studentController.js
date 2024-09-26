const Student = require('../models/Student'); 

// Create a new student
exports.createStudent = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Implement password hashing if needed

        let student = await Student.findOne({ email });
        if (student) {
            return res.status(400).json({ msg: 'Student already exists' });
        }

        student = new Student({ name, email, password });
        await student.save();
        res.status(201).json({ msg: 'Student created successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// Get all students
exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// Get a student by ID
exports.getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ msg: 'Student not found' });
        }
        res.json(student);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// Update a student by ID
exports.updateStudent = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        let student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ msg: 'Student not found' });
        }

        if (name) student.name = name;
        if (email) student.email = email;
        if (password) student.password = password; // Implement password hashing

        await student.save();
        res.json({ msg: 'Student updated successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// Delete a student by ID
exports.deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({ msg: 'Student not found' });
        }
        res.json({ msg: 'Student deleted successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};
