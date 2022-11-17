const express = require("express");
const cors = require("cors");
const yahooFinance = require("yahoo-finance");
const routers = require("./router/path");
// const iify  = require('./iify');

require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use("/listData", routers);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
