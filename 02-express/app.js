const express = require("express");
const app = express();
let { people } = require("./data");

// static assets
app.use(express.static("./methods-public"));

// Parse JSON
app.use(express.json()); //--> middleware to parse JSON data (req.body)

// Parse form data
app.use(express.urlencoded({ extended: false })); //--> middleware to parse form data

app.post("/login", (req, res) => {
  //---make sure "req" is before "res" in the callback function
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please provide credentials");
});
// POST REQUEST FROM BROWSER
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }

  res.status(201).json({ success: true, person: name });
});

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }

  res.status(201).json({ success: true, data: [...people, name] });
});

app.get("/api/people", (req, res) => {
  res.status(200).json({
    status: "success",
    data: people,
  });
});
app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
