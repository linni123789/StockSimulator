import React, { useState } from "react";
import InfoScreen from "./InfoScreen";
import GraphScreen from "./GraphScreen";
const Homescreen = (props) => {
  const [Graph, setGraph] = useState(false);
  const [Stock, setStock] = useState("");
  const [Start_Date, setStart_Date] = useState("");
  const [Shares, setShares] = useState("");

  const [stockData, setStockData] = useState([]);
  const [chartData, setChartData] = useState([]);

  const saveData = (ticker, start_date, shares) => {
    setStock(ticker);
    setStart_Date(start_date);
    setShares(shares);
    setGraph(true);
  };
  const returnToInfo = () => {
    setGraph(false);
  };
  console.log(Stock);

  const fetchStockData = (stock) => {
    console.log(stock);
    fetch("/api/history", {
      method: "POST",
      body: JSON.stringify({
        ticker: stock,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((message) => {
        for (var i = 0; i < message.length; i++) {
          if (message[i].Date == Start_Date) {
            var index = i;
            message.splice(0, index);
            break;
          }
        }
        setStockData(message);
      });
  };
  console.log(stockData);

  return !Graph ? (
    <div>
      <InfoScreen saveDataCallBack={saveData} fetchCallBack={fetchStockData} />
    </div>
  ) : (
    <GraphScreen
      returnToInfoCallBack={returnToInfo}
      stock={Stock}
      start_date={Start_Date}
      share={Shares}
      stockData={stockData}
      chartData={chartData}
      sell={props.sell}
      buy={props.buy}
      skip={props.skip}
    />
  );
};
export default Homescreen;
