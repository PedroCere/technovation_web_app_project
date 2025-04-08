import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "../styles/Chart.css";

const Chart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Stock Price",
        data: [450, 430, 420, 460],
        borderColor: "#0088ff",
        backgroundColor: "rgba(0, 136, 255, 0.2)",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="chart-container">
      <Line data={data} />
    </div>
  );
};

export default Chart;
