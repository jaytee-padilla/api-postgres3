require('dotenv').config();
// const Pool = require('pg').Pool;

// const pool = new Pool ({
//   user: process.env.DB_USER,
//   password: process.env.DB_PW,
//   database: process.env.DB_DATABASE,
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT
// });

// module.exports = pool;

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

module.exports = client;