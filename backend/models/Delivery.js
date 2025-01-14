const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  deliveryPersonnel: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Delivered'], default: 'Pending' },
  timestamp: { type: Date, default: Date.now },
  notes: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Delivery', deliverySchema);
