const express = require('express');
const port = process.env.PORT || 3000;
const router = require('./routes');

const app = express();

app.use('/api', router);

app.get('/', (req, res) => {
  res.json({message: 'Server is up and running'});
});

app.listen(port, () => {
  console.log(`\nServer is listening at port: ${port}\n`);
});

module.exports = app;