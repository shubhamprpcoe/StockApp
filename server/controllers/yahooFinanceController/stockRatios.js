async function stocksRatios(req, res) {
  try {
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
  } catch (e) {
    return res.json(e).status(500);
  }
}

module.exports = { stocksRatios };
