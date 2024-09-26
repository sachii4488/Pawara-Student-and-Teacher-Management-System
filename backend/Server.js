
const express = require('express');
const mongoose = require('mongoose');
const adminRoutes = require('./routes/adminRoutes'); 
const studentRoutes = require('./routes/studentRoutes'); 
const teacherRoutes = require('./routes/teacherRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use('/api', adminRoutes);
app.use('/api', studentRoutes);
app.use('/api', teacherRoutes);

// Database connection
mongoose.connect(process.env.MONGO_URI, {})
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => console.log('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/test', async (req, res) => {
    const result = await mongoose.connection.db.collection('test').insertOne({ name: 'Test User' });
    res.send(result);
});