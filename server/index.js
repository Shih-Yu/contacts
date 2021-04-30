require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const pool = require("./db");
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(logger("dev"));
app.use(express.json());

// ROUTES//
// get all contacts
app.get("/", async (req, res) => {
  try {
    let contacts = await pool.query("SELECT * FROM person");
    res.json(contacts);
  } catch (error) {
    console.error(err.message);
  }
});

// app.post("/contacts", async(req, res) => {
//   try {
//     const { fname, lname, email, phone, company } = req.body;
//     const newContact = await pool.query("INSERT INTO person(fname, lname, email, phone, company) VALUES($1,$2,$3,$4,$5);",
//       [fname, lname, email, phone, company]
//     );
//     console.log(req.body);

//   } catch (error) {
//     console.error(err.message);
//   }

// });

// listener
app.listen(port, () => console.log(`Running on port: ${port}`));
