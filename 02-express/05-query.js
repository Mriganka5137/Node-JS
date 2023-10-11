const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send(" <h1>Hello World! </h1> <a href='/api/products'>products</a>");
});

// Send part of the data
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

// Send a single product
app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find((product) => {
    return product.id === Number(productID);
  });

  if (!singleProduct) {
    res.send("Product does not exist");
  }

  res.send(singleProduct);
});

// Params -- in the console
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params); // { productID: '1', reviewID: '2' }
  res.send("hello world");
});

// Query String -- in the console
// app.get("/api/v1/query", (req, res) => {
//   console.log(req.query);
//   /* http://localhost:5137/api/v1/query?search=Mriganka&roll-no=5137
//     {
//       search: 'Mriganka',
//       'roll-no': '5137'
//     }
//   */
//   res.send("Search Query");
// });

// Search for a product based on a query string
app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query; // ---> These query strings have to be the same as the ones in the URL
  let sortedProducts = [...products];

  // id search string is not empty
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  // If there is any limit
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  // If there are no products
  if (sortedProducts.length < 1) {
    // res.status(200).send("No products matched your search");
    return res.status(200).json({ success: true, data: [] });
  }

  return res.status(200).json(sortedProducts);
  // res.send(sortedProducts);
});

app.listen(5137, () => {
  console.log("Server running on http://localhost:5137");
});
