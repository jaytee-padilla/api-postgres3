const router = require('express').Router();
const pool = require('../../db');

// GET all cars
router.get('/', async (req, res) => {
  try {
    const allCars = await pool.query(
      'SELECT * FROM cars'
    );

    res.status(200).json(allCars.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// GET a specific car
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const car = await pool.query(
      'SELECT * FROM cars WHERE id = $1', [id]
    );

    if (car.rows.length > 0) {
      res.status(200).json(car.rows[0]);
    } else {
      res.status(404).json({message: "Could not find car with the specified ID"});
    }
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;