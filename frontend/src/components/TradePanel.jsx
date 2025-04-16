import React, { useState } from 'react';

const formatCurrency = (value) => {
  return value != null
    ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
    : '-';
};

const TradePanel = ({ marketPrice, lastPrice, buyingPower }) => {
  const [orderType, setOrderType] = useState('Market Price');
  const [quantity, setQuantity] = useState(100);
  const [timeInForce, setTimeInForce] = useState('Day');
  const [stopPriceStr, setStopPriceStr] = useState('400.00');

  const stopPrice = parseFloat(stopPriceStr.replace(',', '.'));
  const estimatedLoss = (marketPrice && stopPrice)
    ? (marketPrice - stopPrice) * quantity
    : 0;

  const total = marketPrice ? marketPrice * quantity + 4 : 0;

  return (
    <div className="text-white p-4 bg-[#111827] rounded-lg space-y-4">
      <h2 className="text-xl font-bold text-blue-400">Trade Execution</h2>

      <div>
        <label className="block mb-1">Order Type</label>
        <select value={orderType} onChange={(e) => setOrderType(e.target.value)} className="w-full p-2 rounded">
          <option>Market Price</option>
          <option>Limit</option>
          <option>Stop Loss</option>
        </select>
      </div>

      <div className="space-x-2 flex flex-wrap">
        {[30, 50, 100, 500].map((q) => (
          <button key={q} className={`p-2 ${quantity === q ? 'bg-blue-500' : 'bg-gray-700'}`}
            onClick={() => setQuantity(q)}>
            {q}
          </button>
        ))}
      </div>

      <div className="flex space-x-4">
        <div>
          <label>Time in Force</label>
          <select value={timeInForce} onChange={(e) => setTimeInForce(e.target.value)} className="w-full p-2 rounded">
            <option>Day</option>
            <option>GTC</option>
          </select>
        </div>
        <div>
          <label>Stop Price</label>
          <input type="text" value={stopPriceStr} onChange={(e) => setStopPriceStr(e.target.value)}
            className="p-2 rounded w-full" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-green-400">
        <div>Market Price: {formatCurrency(marketPrice)}</div>
        <div>Last Price: {formatCurrency(lastPrice)}</div>
      </div>

      <div className="text-red-400">
        Est. Loss: {formatCurrency(estimatedLoss)}
      </div>

      <div className="text-green-400">
        Buying Power: {formatCurrency(buyingPower)}
      </div>

      <div>Fees: $4.00</div>
      <div className="font-bold">Total: {formatCurrency(total)}</div>

      <div className="flex justify-between space-x-2">
        <button className="w-full bg-green-500 p-2 rounded">BUY</button>
        <button className="w-full bg-red-600 p-2 rounded">SELL MSFT</button>
      </div>
    </div>
  );
};

export default TradePanel;
