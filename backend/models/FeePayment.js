const mongoose = require('mongoose');
const { Schema } = mongoose;

const FeePaymentSchema = new Schema({
    PaymentID: { type: String, required: true },
    StudentID: { type: String, required: true },
    Amount: { type: Number, required: true },
    Date: { type: Date, required: true }
});

module.exports = mongoose.model('FeePayment', FeePaymentSchema);
