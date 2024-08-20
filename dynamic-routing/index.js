require("dotenv").config();

const express = require("express");

const app = express();

const PORT = Number(process.env.PORT) || 8000;
const indexRouter = require("./routes");

app.use(express.json());
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`App is Running on port ${PORT}`);
});
