/*
1. dotenv
2. populate js
3. connectToDB
4. Model
*/

require("dotenv").config();
const Product = require("./models/product");
const connectToDB = require("./db/connect");
const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectToDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log("Success");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
