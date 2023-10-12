// Middleware in Express

const express = require("express");
const app = express();
const logger = require("./logger");

// app.use --> use is a method that we use to use middleware
//app.use(logger);//---> It will run the logger function for every request

app.use("/api", logger); // --> It will run the logger function for every request that starts with /api

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
