const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ data: "Hello world" });
});

app.listen(666, () => {
  console.log("App is Running");
});
