const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClassSchema = new Schema({
    ClassID: { type: String, required: true },
    ClassName: { type: String, required: true },
    Schedule: [{
        DayOfWeek: { type: String },
        StartTime: { type: String },
        EndTime: { type: String }
    }],
    Students: [{ StudentID: { type: String } }],
    Subjects: [{ SubjectID: { type: String } }]
});

module.exports = mongoose.model('Class', ClassSchema);
