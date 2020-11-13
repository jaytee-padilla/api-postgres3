const router = require('express').Router();
const client = require('../../db');

// GET all car models
router.get('/', async (req, res) => {
  try {
    const allModels = await client.query(
      'SELECT * FROM models'
    );

    res.status(200).json(allModels.rows);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;