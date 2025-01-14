const express = require('express');
const { createPantry, getPantries, updatePantry } = require('../controllers/pantryController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect(['manager']), createPantry);
router.get('/', protect(['manager']), getPantries);
router.put('/:id', protect(['manager']), updatePantry);

module.exports = router;
