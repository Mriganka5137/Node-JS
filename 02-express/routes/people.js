const express = require("express");
const router = express.Router();
let { people } = require("../data");

// POST REQUEST FROM BROWSER
router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }

  res.status(201).json({ success: true, data: [...people, name] });
});

// GET REQUEST FROM BROWSER
router.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    data: people,
  });
});

// PUT REQUEST FROM BROWSER
router.put("/:id", (req, res) => {
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
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    res.status(404).json({ success: false, msg: `No person with id ${id}` });
  }

  const newPeople = people.filter((person) => person.id !== Number(id));

  res.status(200).json({ status: "Success", data: newPeople });
});

module.exports = router;
