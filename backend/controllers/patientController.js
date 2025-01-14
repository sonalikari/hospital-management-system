const Patient = require('../models/Patient');

exports.createPatient = async (req, res) => {
  const {
    name,
    diseases,
    allergies,
    roomNumber,
    bedNumber,
    floorNumber,
    age,
    gender,
    contactInfo,
    emergencyContact,
  } = req.body;
  try {
    const patient = await Patient.create({
      name,
      diseases,
      allergies,
      roomNumber,
      bedNumber,
      floorNumber,
      age,
      gender,
      contactInfo,
      emergencyContact,
    });
    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updatePatient = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    const patient = await Patient.findByIdAndUpdate(id, updatedData, { new: true });
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
