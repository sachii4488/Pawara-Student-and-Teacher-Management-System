const mongoose = require('mongoose');

// Importing the models
const Admin = require('./models/Admin');
// other imports...

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourdbname', { useNewUrlParser: true, useUnifiedTopology: true });

// Example: Create a new admin
const newAdmin = new Admin({
    AdminID: 'admin001',
    Name: 'Admin Name',
    Email: 'admin@example.com',
    Password: 'securepassword'
});

newAdmin.save().then(() => console.log('Admin Created')).catch(err => console.error(err));
