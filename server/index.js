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
// Read all existing contacts
app.get("/contacts", async (req, res) => {
  try {
    // store data from query into allContacts variable
    let allContacts = await pool.query("SELECT * FROM person");
    // convert the data into JSON format
    res.json(allContacts);
    console.log(allContacts);
  } catch (error) {
    console.error(error.message);
  }
});

// Create new contacts
app.post("/contacts", async(req, res) => {
  try {
    // destructure the data recieved from the body
    const { first_name, last_name, email, phone, company } = req.body;
    const newContact = await pool.query("INSERT INTO person(first_name, last_name, email, phone, company) VALUES($1,$2,$3,$4,$5) RETURNING *;",
      [first_name, last_name, email, phone, company]
    );
    res.json(newContact);
    console.log(req.body);
  } catch (error) {
    console.error(error.message);
  }

});

// listener
app.listen(port, () => console.log(`Running on port: ${port}`));
