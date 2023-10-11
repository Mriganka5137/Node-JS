const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1> <a href='/api/products/'>Products </a>");
});

// get All Products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// get Single Product
app.get("/api/products/:productId", (req, res) => {
  const { productId } = req.params;

  const singleProduct = products.find((product) => {
    return product.id === Number(productId);
  });

  // Check if the product exists
  if (!singleProduct) {
    res.status(404).send("Product Does Not Exist");
  } else {
    res.json(singleProduct);
  }
});

app.listen(5137, () => {
  console.log("Server is running on http://localhost:5137");
});
