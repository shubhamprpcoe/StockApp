const express = require("express");
const axios = require("axios");
const cors = require("cors");
const yahooFinance = require("yahoo-finance");
const cookieParser = require("cookie-parser");
const { connect } = require("mongoose");
const connectToDataBase = require("./config/connectdb");
const routers = require("./router/path");

require("dotenv").config();

const app = express();

// CORS policy
app.use(cors(
  { credentials: true, origin: "http://localhost:3000" },
));

// cookieParser
app.use(cookieParser());

const { DATABASE_URL, PORT } = process.env;
const port = PORT || 5000;

// Connect to Database
connectToDataBase(DATABASE_URL);

app.use(express.json());

// const url = "https://query1.finance.yahoo.com/v7/finance/quote?symbols=AAPL?include=revenue,grossMargin,debtToEquity,currentRatio";

// axios({
//   method: "get",
//   url,
//   responseType: "json",
// })
//   .then((response) => {
//     console.log(response.data.quoteResponse.result);
//   });

app.use("/listData", routers);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
