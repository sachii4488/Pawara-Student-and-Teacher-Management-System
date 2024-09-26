
const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin'); // Assuming you have an Admin model defined
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/authMiddleware');
const adminController = require('../controllers/adminController');


router.post('/admin', authMiddleware, adminController.createAdmin);
router.get('/admins', authMiddleware, adminController.getAllAdmins);
router.get('/admin/:id', authMiddleware, adminController.getAdminById);
router.put('/admin/:id', authMiddleware, adminController.updateAdmin);
router.delete('/admin/:id', authMiddleware, adminController.deleteAdmin);

// @route   POST /admin/signup
// @desc    Register a new admin
// @access  Public
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if admin already exists
        let admin = await Admin.findOne({ email });
        if (admin) {
            return res.status(400).json({ errors: 'Admin already exists' });
        }

        // Create new admin
        admin = new Admin({
            username,
            email,
            password,
        });

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        admin.password = await bcrypt.hash(password, salt);

        // Save the admin to the database
        await admin.save();

        // Create and return a token
        const payload = {
            admin: {
                id: admin.id,
                role: admin.role
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   POST /admin/login
// @desc    Authenticate admin & get token
// @access  Public
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if admin exists
        let admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(400).json({ errors: 'Invalid credentials' });
        }

        // Match password
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ errors: 'Invalid credentials' });
        }

        // Create and return a token
        const payload = {
            admin: {
                id: admin.id,
                role: admin.role
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   GET /admin/me
// @desc    Get logged-in admin's details
// @access  Private
router.get('/me', authMiddleware, async (req, res) => {
    try {
        const admin = await Admin.findById(req.admin.id).select('-password');
        res.json(admin);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});
module.exports = router;






/*router.get('/me', authMiddleware, async (req, res) => {
    // Your code here to handle the route
    res.json({ admin: req.admin });
});

// Other admin routes can go here*/

