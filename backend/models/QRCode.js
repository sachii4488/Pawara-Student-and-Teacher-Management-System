const mongoose = require('mongoose');
const { Schema } = mongoose;

const QRCodeSchema = new Schema({
    CodeID: { type: String, required: true },
    ClassID: { type: String, required: true },
    Date: { type: Date, required: true },
    LinkTo: { type: String } // The actual data or URL encoded in the QR code
});

module.exports = mongoose.model('QRCode', QRCodeSchema);
