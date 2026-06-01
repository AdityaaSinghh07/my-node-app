const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Production App");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
