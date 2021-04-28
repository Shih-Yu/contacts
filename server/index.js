const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(logger("dev"));
// Route
app.get("/contacts", (req, res) => {
  res.send({message: "hello"})
})
app.post("/contacts", (req, res) => {
  console.log(req.body);
  res.end();
})

// listener
app.listen(port, () => console.log(`Running on port: ${port}`))