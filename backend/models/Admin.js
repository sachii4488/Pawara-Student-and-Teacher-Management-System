const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AdminSchema = new Schema({
    AdminID: { type: String, required: true },
    Name: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    Posts: [{ 
        PostID: { type: String },
        Title: { type: String },
        Content: { type: String },
        DatePosted: { type: Date, default: Date.now }
    }],
    Announcements: [{
        AnnouncementID: { type: String },
        Content: { type: String },
        DatePosted: { type: Date, default: Date.now }
    }]
});

module.exports = mongoose.model('Admin', AdminSchema);
