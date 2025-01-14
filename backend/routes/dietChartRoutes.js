const express = require('express');
const { createDietChart, getDietCharts, updateDietChart } = require('../controllers/dietChartController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect(['manager']), createDietChart);
router.get('/', protect(['manager', 'pantry']), getDietCharts);
router.put('/:id', protect(['manager']), updateDietChart);

module.exports = router;
