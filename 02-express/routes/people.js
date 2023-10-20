const express = require("express");
const router = express.Router();
const {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

/*
// POST REQUEST FROM BROWSER
router.post("/", createPerson);

// GET REQUEST FROM BROWSER
router.get("/", getPeople);

// PUT REQUEST FROM BROWSER
router.put("/:id", updatePerson);

// DELETE REQUEST FROM BROWSER
router.delete("/:id", deletePerson);
*/

// Alternate way of writing the above code

router.route("/").post(createPerson).get(getPeople);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
