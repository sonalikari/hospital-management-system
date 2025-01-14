const express = require('express');
const { createPatient, getPatients, updatePatient } = require('../controllers/patientController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect(['manager']), createPatient);
router.get('/', protect(['manager', 'pantry']), getPatients);
router.put('/:id', protect(['manager']), updatePatient);

module.exports = router;