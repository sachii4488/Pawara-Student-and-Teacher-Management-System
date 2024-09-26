const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Create a new admin
exports.createAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if the admin already exists
        let admin = await Admin.findOne({ email });
        if (admin) {
            return res.status(400).json({ msg: 'Admin already exists' });
        }

        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new admin
        admin = new Admin({
            name,
            email,
            password: hashedPassword
        });

        await admin.save();
        res.status(201).json({ msg: 'Admin created successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// Get all admins
exports.getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.find();
        res.json(admins);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// Get an admin by ID
exports.getAdminById = async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id);
        if (!admin) {
            return res.status(404).json({ msg: 'Admin not found' });
        }
        res.json(admin);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// Update an admin by ID
exports.updateAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Find the admin by ID
        let admin = await Admin.findById(req.params.id);
        if (!admin) {
            return res.status(404).json({ msg: 'Admin not found' });
        }

        // Update fields
        if (name) admin.name = name;
        if (email) admin.email = email;
        if (password) {
            const salt = await bcrypt.genSalt(10);
            admin.password = await bcrypt.hash(password, salt);
        }

        await admin.save();
        res.json({ msg: 'Admin updated successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// Delete an admin by ID
exports.deleteAdmin = async (req, res) => {
    try {
        const admin = await Admin.findByIdAndDelete(req.params.id);
        if (!admin) {
            return res.status(404).json({ msg: 'Admin not found' });
        }
        res.json({ msg: 'Admin deleted successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};
