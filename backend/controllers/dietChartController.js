const DietChart = require('../models/DietChart');

exports.createDietChart = async (req, res) => {
  const { patientId, morningMeal, eveningMeal, nightMeal, instructions } = req.body;
  try {
    const dietChart = await DietChart.create({
      patientId,
      morningMeal,
      eveningMeal,
      nightMeal,
      instructions,
    });
    res.status(201).json(dietChart);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getDietCharts = async (req, res) => {
  try {
    const dietCharts = await DietChart.find().populate('patientId', 'name roomNumber');
    res.status(200).json(dietCharts);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updateDietChart = async (req, res) => {
  const { id } = req.params;
  const { morningMeal, eveningMeal, nightMeal, instructions } = req.body;
  try {
    const dietChart = await DietChart.findByIdAndUpdate(
      id,
      { morningMeal, eveningMeal, nightMeal, instructions },
      { new: true }
    );
    if (!dietChart) {
      return res.status(404).json({ message: 'Diet Chart not found' });
    }
    res.status(200).json(dietChart);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
