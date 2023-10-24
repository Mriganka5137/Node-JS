const express = require("express");
const tasks = require("./routes/tasks");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const connectDB = require("./db/connect"); //-----> to connect to the database
require("dotenv").config(); //--- This is required to start

const app = express();
const port = 3000;

// middleware
app.use(express.static("./public")); //-----> to serve static files

app.use(express.json()); //-----> to parse json data

// routes
app.use("/api/v1/tasks", tasks);

app.use(notFound); //--- Not found route
app.use(errorHandlerMiddleware); //----Error Handler Middleware

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
