let { people } = require("../data");

// GET REQUEST FROM BROWSER
const getPeople = (req, res) => {
  res.status(200).json({
    status: "success",
    data: people,
  });
};

// POST REQUEST FROM BROWSER
const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }

  res.status(201).json({ success: true, data: [...people, name] });
};

// PUT REQUEST FROM BROWSER
const updatePerson = (req, res) => {
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
};

// DELETE REQUEST FROM BROWSER
const deletePerson = (req, res) => {
  const { id } = req.params;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    res.status(404).json({ success: false, msg: `No person with id ${id}` });
  }

  const newPeople = people.filter((person) => person.id !== Number(id));

  res.status(200).json({ status: "Success", data: newPeople });
};

module.exports = {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
};
