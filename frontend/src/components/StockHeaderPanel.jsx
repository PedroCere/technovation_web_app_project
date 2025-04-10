import React from 'react';

const StockHeaderPanel = ({ stockData }) => {
  return (
    <div className="stock-header-panel p-4 rounded-lg mb-6">
      <div className="flex gap-8">
        {/* Left Column */}
        <div className="flex-1">
          <div className="mb-2">
            <h2 className="text-3xl font-bold text-white">{stockData.ticker}</h2>
            <p className="text-[#999999] text-sm">{stockData.companyName}</p>
          </div>
          
          <div className="mb-1">
            <span className={`text-2xl font-bold ${stockData.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {stockData.currentPrice}
            </span>
            <span className={`ml-2 text-sm ${stockData.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {stockData.change >= 0 ? '+' : ''}{stockData.change} ({stockData.changePercent}%)
            </span>
          </div>

          <div className={`text-xs ${stockData.afterHoursChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            After Hours: {stockData.afterHoursPrice} ({stockData.afterHoursChange >= 0 ? '+' : ''}{stockData.afterHoursChange} | {stockData.afterHoursChangePercent}%)
          </div>
        </div>

        {/* Right Column - Stats Grid */}
        <div className="flex-1 grid grid-cols-2 gap-y-2 text-sm">
          <div>
            <span className="text-[#999999]">Open:</span> <span className="text-[#8AC8FF]">{stockData.open}</span>
          </div>
          <div>
            <span className="text-[#999999]">High:</span> <span className="text-[#8AC8FF]">{stockData.high}</span>
          </div>
          <div>
            <span className="text-[#999999]">Low:</span> <span className="text-[#8AC8FF]">{stockData.low}</span>
          </div>
          <div>
            <span className="text-[#999999]">52wk High:</span> <span className="text-[#8AC8FF]">{stockData.week52High}</span>
          </div>
          <div>
            <span className="text-[#999999]">52wk Low:</span> <span className="text-[#8AC8FF]">{stockData.week52Low}</span>
          </div>
          <div>
            <span className="text-[#999999]">Avg Vol:</span> <span className="text-[#8AC8FF]">{stockData.avgVolume}</span>
          </div>
          <div>
            <span className="text-[#999999]">Shares Out:</span> <span className="text-[#8AC8FF]">{stockData.sharesOutstanding}</span>
          </div>
          <div>
            <span className="text-[#999999]">Mkt Cap:</span> <span className="text-[#8AC8FF]">{stockData.marketCap}</span>
          </div>
          <div>
            <span className="text-[#999999]">Div Yield:</span> <span className="text-[#8AC8FF]">{stockData.dividendYield}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockHeaderPanel;
