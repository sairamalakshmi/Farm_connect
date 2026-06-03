const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  max:10,
  idleTimeoutMillis: 30000,
});

pool.connect()
  .then(() => console.log("PostgreSQL Connected"))
  .catch((err) => console.log(err));

module.exports = pool;