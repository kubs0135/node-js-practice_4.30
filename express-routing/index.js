require("dotenv").config();
const express = require("express");

const app = express();
const indexRouter = require("./routes");

app.use("/", indexRouter);

const PORT = Number(process.env.PORT) || 8000;

app.listen(PORT, () => {
  console.log(`Application is Running on port ${PORT}`);
});
