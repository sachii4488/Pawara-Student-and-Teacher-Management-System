const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');
const authMiddleware = require('../middleware/authMiddleware'); 

// Define routes
router.post('/teachers', authMiddleware, teacherController.createTeacher);
router.get('/teachers', authMiddleware, teacherController.getAllTeachers);
router.get('/teachers/:id', authMiddleware, teacherController.getTeacherById);
router.put('/teachers/:id', authMiddleware, teacherController.updateTeacher);
router.delete('/teachers/:id', authMiddleware, teacherController.deleteTeacher);

module.exports = router;
