// Middleware in Express

const express = require("express");
const app = express();

const logger = (req, res, next) => {
  const url = req.url;
  const method = req.method;
  const time = new Date().getFullYear();

  console.log(url, method, time);
  next(); //--> next is a function that we call to move on to the next middleware
};

app.get("/", logger, (req, res) => {
  res.send("Home Page");
});

app.get("/about", logger, (req, res) => {
  res.send("About Page");
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
