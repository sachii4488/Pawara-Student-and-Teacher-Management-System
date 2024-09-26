const mongoose = require('mongoose');
const { Schema } = mongoose;

const SubjectSchema = new Schema({
    SubjectID: { type: String, required: true },
    SubjectName: { type: String, required: true },
    Grade: { type: String },
    Teachers: [{ TeacherID: { type: String } }],
    Classes: [{ ClassID: { type: String } }],
    LearningMaterials: [{
        MaterialID: { type: String },
        URL: { type: String },
        Content: { type: String },
        MaterialType: { type: String } // PDF, Video, etc.
    }]
});

module.exports = mongoose.model('Subject', SubjectSchema);
