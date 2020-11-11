const express = require('express');
const router = express.Router();

// /api/models
router.use('/models', require('./models'));

// /api/cars
router.use('/cars', require('./cars'));

module.exports = router;