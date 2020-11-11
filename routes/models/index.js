const router = require('express').Router();
const data = require('../../data.json');

router.get('/', (req, res) => {
  return res.status(200).json(data.models);
});

module.exports = router;