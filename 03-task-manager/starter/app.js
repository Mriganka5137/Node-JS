const express = require("express");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect"); //-----> to connect to the database
require("dotenv").config();

const app = express();
const port = 3000;

// middleware

app.use(express.json()); //-----> to parse json data

// routes
app.use("/api/v1/tasks", tasks);

// app.get("/hello", (req, res) => {
//   res.send("Task Manager App");
// });

// app.get("/api/v1/tasks") -----------> get all the tasks
// app.post("/api/v1/tasks") ----------> create new task
// app.get("/api/v1/tasks/:id") -------> get single task
// app.patch("/api/v1/tasks/:id") -----> update task
// app.delete("/api/v1/tasks/:id")-----> delete task

const start = async (url) => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
