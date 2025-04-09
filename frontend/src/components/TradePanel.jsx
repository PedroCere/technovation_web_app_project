import React, { useState } from "react";
import "./styles/tradePanel.css";

const TradePanel = () => {
  const [orderType, setOrderType] = useState("Market Price");
  const [quantity, setQuantity] = useState(1);
  const [stopPrice, setStopPrice] = useState("");

  return (
    <div className="trade-panel">
      <h2>Trade</h2>
      <label>Order Type</label>
      <select value={orderType} onChange={(e) => setOrderType(e.target.value)}>
        <option>Market Price</option>
        <option>Limit Order</option>
        <option>Stop Order</option>
      </select>

      <label>Quantity</label>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <label>Stop Price</label>
      <input
        type="number"
        value={stopPrice}
        onChange={(e) => setStopPrice(e.target.value)}
        disabled={orderType !== "Stop Order"}
      />

      <button className="buy-button">Buy</button>
    </div>
  );
};

export default TradePanel;
