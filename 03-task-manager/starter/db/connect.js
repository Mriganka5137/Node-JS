const mongoose = require("mongoose");
const connectDB = (url) => {
  return mongoose.connect(connectionString);
};

module.exports = connectDB;
