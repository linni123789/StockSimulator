import React, { useEffect } from "react";
import Chart from "./Chart.js";
const GraphScreen = (props) => {
  return (
    <div>
      {props.start_date + "  " + props.end_date + "  " + props.stock}
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full sell"
        onClick={props.returnToInfoCallBack}
      >
        SELL
      </button>
      <Chart />
    </div>
  );
};
export default GraphScreen;
