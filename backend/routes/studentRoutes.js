const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const authMiddleware = require('../middleware/authMiddleware'); 

// Define routes
router.post('/students', authMiddleware, studentController.createStudent);
router.get('/students', authMiddleware, studentController.getAllStudents);
router.get('/students/:id', authMiddleware, studentController.getStudentById);
router.put('/students/:id', authMiddleware, studentController.updateStudent);
router.delete('/students/:id', authMiddleware, studentController.deleteStudent);

module.exports = router;
