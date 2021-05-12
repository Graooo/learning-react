import React from "react";
import "./ChartBar.css";

const ChartBar = ({ label, maxValue, value }) => {
  let fillBar = "0%";
  if (maxValue > 0) {
    fillBar = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: fillBar }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
