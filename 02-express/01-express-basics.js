const express = require("express");
const app = express();

// app.get()
// app.post()
// app.put()
// app.delete()
// app.all()
// app.use()
// app.listen()

app.get("/", (req, res) => {
  res.status(200).send("Hello World from Express");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>");
});

app.listen(5137, () => {
  console.log("Mriganka is Listening on port 5137....");
});
