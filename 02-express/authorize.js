const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === "mriganka") {
    req.user = { name: "mriganka", id: 5137 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
