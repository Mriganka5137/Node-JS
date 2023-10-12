// Middleware in Express

const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
const morgan = require("morgan");

// app.use --> use is a method that we use to use middleware
//app.use(logger);//---> It will run the logger function for every request

// app.use("/api", logger); // --> It will run the logger function for every request that starts with /api

// app.use([logger, authorize]); //--> It will run the logger and authorize function for every request.. It will run in the order we pass it

app.use(morgan("tiny")); // -->output: GET / 304 - - 2.013 ms

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
  console.log(req.user);
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
