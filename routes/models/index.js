const router = require('express').Router();
const pool = require('../../db');

// GET all car models
router.get('/', async (req, res) => {
  try {
    const allModels = await pool.query(
      'SELECT * FROM models'
    );

    res.status(200).json(allModels.rows);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;