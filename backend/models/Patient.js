const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  diseases: { type: String },
  allergies: { type: String },
  roomNumber: { type: Number, required: true },
  bedNumber: { type: Number },
  floorNumber: { type: Number },
  age: { type: Number },
  gender: { type: String },
  contactInfo: { type: String },
  emergencyContact: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);
