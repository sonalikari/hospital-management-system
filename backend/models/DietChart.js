const mongoose = require('mongoose');

const dietChartSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  morningMeal: { type: String, required: true },
  eveningMeal: { type: String, required: true },
  nightMeal: { type: String, required: true },
  instructions: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('DietChart', dietChartSchema);
