const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();


// Authentication middleware function
function authMiddleware(req, res, next) {
    const token = req.header('auth-token');

    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = decoded.admin;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
}

// Example route using the authMiddleware
router.get('/me', authMiddleware, async (req, res) => {
    try {
        // Here, req.admin contains the authenticated admin's data
        res.json({ admin: req.admin });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

module.exports = router;
module.exports = authMiddleware;