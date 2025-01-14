const Delivery = require('../models/Delivery');
const Patient = require('../models/Patient');

exports.createDelivery = async (req, res) => {
  const { patientId, deliveryPersonnel, notes } = req.body;
  try {
    const delivery = await Delivery.create({
      patientId,
      deliveryPersonnel,
      notes,
    });
    res.status(201).json(delivery);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getDeliveries = async (req, res) => {
  try {
    const deliveries = await Delivery.find().populate('patientId', 'name roomNumber bedNumber');
    res.status(200).json(deliveries);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updateDeliveryStatus = async (req, res) => {
  const { id } = req.params;
  const { status, notes } = req.body;
  try {
    const delivery = await Delivery.findByIdAndUpdate(id, { status, notes }, { new: true });
    if (!delivery) {
      return res.status(404).json({ message: 'Delivery not found' });
    }
    res.status(200).json(delivery);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
