const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'farmconnect',
  password: process.env.DB_PASSWORD,
  port: 5432,
});

pool.connect()
  .then(() => console.log("PostgreSQL Connected"))
  .catch(err => console.log(err));

module.exports = pool;