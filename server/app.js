const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("We are at Bank");
});

app.get("*", (req, res) => {
  res.send("404 error");
});

//IMPORTS ROUTES
const banksRoute = require("./routes/banks");

//USING ROUTES
app.use("/banks", banksRoute);

//DB
mongoose.connect(process.env.DB_CONNECTION,
{useNewUrlParser: true}, () =>
console.log("DB CONNECTED!")
);

//SERVER
app.listen(3005, () => {
  console.log("SERVER UP!");
});
