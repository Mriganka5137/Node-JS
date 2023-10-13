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

// PUT REQUEST FROM BROWSER
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id, name);

  const person = people.find((person) => person.id === Number(id));

  // If id doesn't exist
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }

  // If  id exists -- Update the data
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json({
    success: true,
    newPeople,
  });
});

// DELETE REQUEST FROM BROWSER
app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    res.status(404).json({ success: false, msg: `No person with id ${id}` });
  }

  const newPeople = people.filter((person) => person.id !== Number(id));

  res.status(200).json({ status: "Success", data: newPeople });
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
