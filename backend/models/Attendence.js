const mongoose = require('mongoose');
const { Schema } = mongoose;

const AttendanceSchema = new Schema({
    AttendanceID: { type: String, required: true },
    ClassID: { type: String, required: true },
    StudentID: { type: String, required: true },
    Date: { type: Date, required: true },
    Status: { type: String, required: true } // Present, Absent, etc.
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
