const router = require('express').Router();
const data = require('../../data.json');

router.get('/', (req, res) => {
  res.status(200).json(data.cars);
});

module.exports = router;