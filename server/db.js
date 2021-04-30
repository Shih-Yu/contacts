const { Pool } = require("pg");
const dataConfig = require("./configData");

const pool = new Pool({ dataConfig })

pool
  .connect()
  .then(() => console.log("Connect to Postgres DB"))
  .catch((err) => console.error(err.message))

module.exports = pool;