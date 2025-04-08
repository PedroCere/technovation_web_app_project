import React from "react";
import "../styles/TradePanel.css";

const TradePanel = () => {
  return (
    <div className="trade-panel">
      <h3>Trade</h3>
      <div className="trade-options">
        <button className="buy-btn">Buy</button>
        <button className="sell-btn">Sell</button>
      </div>
      <label>Order Type</label>
      <select>
        <option>Market Price</option>
        <option>Limit Order</option>
      </select>
      <label>Quantity</label>
      <div className="quantity-buttons">
        <button>10</button>
        <button>50</button>
        <button>100</button>
        <button>500</button>
      </div>
      <label>Stop Price</label>
      <input type="number" placeholder="400.00" />
      <p>Buying Power: <strong>$122,912.50</strong></p>
    </div>
  );
};

export default TradePanel;

