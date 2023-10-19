const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require('dotenv').config()

const port = process.env.PORT;

const { authenticateDb } = require("./db/connection");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

authenticateDb();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
