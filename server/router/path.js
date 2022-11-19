const { json } = require("express");
const express = require("express");
const axios = require("axios").default;

const router = express.Router();
// const yahooFinance = require('yahoo-finance2');
const yahooFinance = require("yahoo-finance2").default;

const objData = require("../objdata");

//  -----------------------IIFY function -----------------------

let userStock;
let globalUserStockCode = "";
let userStockCode;

router.all("/leftBar", async (req, res) => {
  if (req.body.propCmpcode) {
    userStockCode = req.body.propCmpcode;
    globalUserStockCode = req.body.propCmpcode;
  } else {
    userStockCode = "INFY";
  }
  const leftBarJsonData = [];
  const leftBarJsonObj = {};

  // ======METHOD 2 YAHOOFINANCE2 =====================
  const results = await yahooFinance.quoteSummary(`${userStockCode}.NS`, {
    // 1. Try adding, removing or changing modules
    // You'll get suggestions after typing first quote mark (")
    modules: [
      "price",
      "financialData",
      "earningsHistory",
      "balanceSheetHistory",
    ],
  });

  //    -------------EPS Calculation for left list------------
  let eps = 0;
  if (results.earningsHistory) {
    console.log(results);
    results.earningsHistory.history.map((curVal) => {
      eps += curVal.epsActual;
    });
    leftBarJsonData.push({ EPS: eps });
  } else {
    leftBarJsonData.push({ eps: "nodata" });
  }
  //    -------------IntrencisVal Calculation for lrft list------------
  if (results.earningsHistory && eps) {
    const IntrencisVal = eps * (7 + results.earningsHistory.history[3].epsEstimate) * (5.4 / 6.06);
    leftBarJsonData.push({ IntrencisVal });
    // console.log( results)
  } else {
    leftBarJsonData.push({ IntrencisVal: "nodata" });
  }
  userStockCode = "";
  // leftBarJsonObj["leftBarArrData"] = [leftBarJsonData];

  res.send(JSON.stringify(leftBarJsonData));
});

// --------------------POST---------------
router.post("/stockName", async (req, res) => {
  try {
    userStock = req.body.stockName;
    let fetchStockList = {};
    const arr = [];

    for (const item in objData.objdata) {
      const i = item.toLowerCase();
      const searchstring = i.startsWith(userStock);

      if (i.includes(userStock) && userStock != "" && searchstring) {
        fetchStockList.companyName = item;
        fetchStockList.compnyCode = objData.objdata[item];
        //  fetchStockList[item]=objData.objdata[item];
        arr.push(fetchStockList);
        fetchStockList = {};
      }
    }

    res.send(arr);
  } catch (error) {
    throw error;
  }
});

// -------------Stock Price Graph Api------------

router.all("/stockPriceGraph", async (req, res) => {
  // userStock = req.body.stockName;
  // console.log(req.body)
  try {
    const xyAxisSata = [];
    const query = `${req.body.compnyCode}.NS`;
    // searchCmpName =  `${req.body.compnyCode}.NS`;

    const queryOptions = { period1: "2021-09-20" /* ... */ };
    const result = await yahooFinance._chart(query, queryOptions);
    // console.log(result);
    result.quotes.map((val) => {
      const myDate = new Date(`${val.date}`);
      const miliSecDate = myDate.getTime();
      xyAxisSata.push([miliSecDate, val.high]);
    });

    res.send(xyAxisSata);
  } catch (error) {
    // console.log("no dtata found");
  }
});

router.all("/yahooFinanceQuoteSummary", async (req, res) => {
  userStock = req.body.compnyCode;
  try {
    const results = await yahooFinance.quoteSummary(`${userStock}.NS`, {
      // 1. Try adding, removing or changing modules
      // You'll get suggestions after typing first quote mark (")
      modules: [
        "price",
        "financialData",
        "earningsHistory",
        "balanceSheetHistory",
      ],
    });
    // delete results[earningsHistory]
    userStock = "";
    res.send(results);
  } catch (error) {
    console.log("no data found at api yahooFinanceQuoteSummary", error);
  }
});

module.exports = router;
