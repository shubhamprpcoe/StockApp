const express = require("express");
const axios = require("axios");
const cors = require("cors");
const yahooFinance = require("yahoo-finance");
const routers = require("./router/path");
// const iify  = require('./iify');

require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

const url = "https://query1.finance.yahoo.com/v7/finance/quote?symbols=GOOG,AAPL";

axios({
  method: "get",
  url,
  responseType: "json",
})
  .then((response) => {
    console.log(response.data.quoteResponse.result);
  });

app.use("/listData", routers);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
