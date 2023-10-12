const logger = (req, res, next) => {
  const url = req.url;
  const method = req.method;
  const time = new Date().getFullYear();

  console.log(url, method, time);
  next(); //--> next is a function that we call to move on to the next middleware
};

module.exports = logger;
