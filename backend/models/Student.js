const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentSchema = new Schema({
    StudentID: { type: String, required: true },
    Name: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    Grade: { type: String },
    Medium: { type: String },
    Classes: [{ ClassID: { type: String } }],
    Attendance: [{
        ClassID: { type: String },
        Date: { type: Date },
        Status: { type: String } // Present/Absent
    }],
    FeePayments: [{
        PaymentID: { type: String },
        Amount: { type: Number },
        Date: { type: Date }
    }],
    QRCode: {
        CodeID: { type: String },
        LinkTo: { type: String } // URL or data encoded in the QR code
    }
});

module.exports = mongoose.model('Student', StudentSchema);
