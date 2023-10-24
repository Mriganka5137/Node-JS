require("dotenv").config();
// async errors

const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("<h1>Store API</h1> <a href='/api/v1/products'>Products</a>");
});

// Router

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // Connect to DB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
