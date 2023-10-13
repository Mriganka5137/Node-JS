const express = require("express");
const router = express.Router();
router.use(express.urlencoded({ extended: false })); //--> middleware to parse form data

router.post("/", (req, res) => {
  //---make sure "req" is before "res" in the callback function
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please provide credentials");
});

module.exports = router;
