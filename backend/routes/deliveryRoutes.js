const express = require('express');
const { createDelivery, getDeliveries, updateDeliveryStatus } = require('../controllers/deliveryController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect(['manager', 'pantry']), createDelivery);
router.get('/', protect(['manager', 'pantry']), getDeliveries);
router.put('/:id', protect(['pantry', 'delivery']), updateDeliveryStatus);

module.exports = router;
