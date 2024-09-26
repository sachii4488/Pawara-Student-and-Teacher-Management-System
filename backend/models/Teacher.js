const mongoose = require('mongoose');
const { Schema } = mongoose;

const TeacherSchema = new Schema({
    TeacherID: { type: String, required: true },
    Name: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    Grade: { type: String },
    SubjectIDs: [{ type: String }],
    ClassesAssigned: [{ ClassID: { type: String } }],
    Payments: [{
        PaymentID: { type: String },
        Amount: { type: Number },
        Date: { type: Date }
    }]
});

module.exports = mongoose.model('Teacher', TeacherSchema);
