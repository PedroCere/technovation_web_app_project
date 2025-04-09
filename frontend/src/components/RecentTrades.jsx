import React from "react";
import "./styles/RecentTrades.css";

const RecentTrades = () => {
  return (
    <div className="recent-trades">
      <h3>Time & Sales</h3>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Price</th>
            <th>Shares</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>16:59:32</td><td>420.56</td><td>25</td></tr>
          <tr><td>16:58:21</td><td>419.75</td><td>30</td></tr>
          <tr><td>16:57:45</td><td>418.90</td><td>15</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecentTrades;
