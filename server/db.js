const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST,
  database: process.env.DB,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: 5432,
  ssl: {rejectUnauthorized: false}
 })

pool
  .connect()
  .then(() => console.log("Connect to Postgres DB"))
  .catch((err) => console.error(err.message))

module.exports = pool;