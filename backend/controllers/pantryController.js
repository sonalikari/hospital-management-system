const Pantry = require('../models/Pantry');

exports.createPantry = async (req, res) => {
  const { name, contactInfo, location } = req.body;
  try {
    const pantry = await Pantry.create({ name, contactInfo, location });
    res.status(201).json(pantry);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getPantries = async (req, res) => {
  try {
    const pantries = await Pantry.find();
    res.status(200).json(pantries);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updatePantry = async (req, res) => {
  const { id } = req.params;
  const { name, contactInfo, location } = req.body;
  try {
    const pantry = await Pantry.findByIdAndUpdate(
      id,
      { name, contactInfo, location },
      { new: true }
    );
    if (!pantry) {
      return res.status(404).json({ message: 'Pantry not found' });
    }
    res.status(200).json(pantry);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
