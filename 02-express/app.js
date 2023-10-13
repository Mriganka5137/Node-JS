const express = require("express");
const app = express();

const people = require("./routes/people");
const auth = require("./routes/auth");

// using the people router
app.use("/api/people", people);
// using the auth router
app.use("/login", auth);

// static assets
app.use(express.static("./methods-public"));

// Parse JSON
app.use(express.json()); //--> middleware to parse JSON data (req.body)

// Parse form data
app.use(express.urlencoded({ extended: false })); //--> middleware to parse form data

// POST REQUEST FROM BROWSER

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
