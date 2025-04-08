import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, LineController, LinearScale, PointElement, CategoryScale } from "chart.js";
import "../styles/ChartPanel.css";

Chart.register(LineController, LinearScale, PointElement, CategoryScale);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr"],
  datasets: [
    {
      label: "Stock Price",
      data: [430, 410, 405, 450],
      borderColor: "blue",
      borderWidth: 2,
      pointBackgroundColor: "white",
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: { grid: { color: "#444" } },
    y: { grid: { color: "#444" } },
  },
};

const ChartPanel = () => {
  return (
    <div className="chart-panel">
      <h3>Stock Performance</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartPanel;
