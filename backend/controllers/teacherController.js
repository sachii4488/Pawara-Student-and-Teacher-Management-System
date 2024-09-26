const Teacher = require('../models/Teacher');

// Create a new teacher
exports.createTeacher = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Implement password hashing if needed

        let teacher = await Teacher.findOne({ email });
        if (teacher) {
            return res.status(400).json({ msg: 'Teacher already exists' });
        }

        teacher = new Teacher({ name, email, password });
        await teacher.save();
        res.status(201).json({ msg: 'Teacher created successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// Get all teachers
exports.getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();
        res.json(teachers);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// Get a teacher by ID
exports.getTeacherById = async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.params.id);
        if (!teacher) {
            return res.status(404).json({ msg: 'Teacher not found' });
        }
        res.json(teacher);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// Update a teacher by ID
exports.updateTeacher = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        let teacher = await Teacher.findById(req.params.id);
        if (!teacher) {
            return res.status(404).json({ msg: 'Teacher not found' });
        }

        if (name) teacher.name = name;
        if (email) teacher.email = email;
        if (password) teacher.password = password; // Implement password hashing

        await teacher.save();
        res.json({ msg: 'Teacher updated successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// Delete a teacher by ID
exports.deleteTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.findByIdAndDelete(req.params.id);
        if (!teacher) {
            return res.status(404).json({ msg: 'Teacher not found' });
        }
        res.json({ msg: 'Teacher deleted successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};
