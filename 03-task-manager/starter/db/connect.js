const mongoose = require("mongoose");

const connectionString = `mongodb+srv://mrigankagogoi5137:Z6pgGoHVLP3bxwNT@cluster0.r5ijqes.mongodb.net/03-TASK_MANAGER?retryWrites=true&w=majority`;

const connectDB = (url) => {
  return mongoose.connect(connectionString);
};

module.exports = connectDB;
