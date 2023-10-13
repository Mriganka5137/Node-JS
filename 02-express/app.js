const express = require("express");
const app = express();

// static assets
app.use(express.static("./methods-public"));

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
