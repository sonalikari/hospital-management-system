const mongoose = require('mongoose');

const pantrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactInfo: { type: String },
  location: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Pantry', pantrySchema);