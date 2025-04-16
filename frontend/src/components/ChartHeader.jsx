import React from 'react';

const formatNumber = (value, decimals = 2) => {
  return value != null ? value.toFixed(decimals) : '-';
};

const formatCurrency = (value) => {
  return value != null
    ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
    : '-';
};

const ChartHeader = ({ stock }) => {
  const {
    open,
    high,
    low,
    yearHigh,
    yearLow,
    avgVolume,
    marketCap,
    sharesOutstanding,
    dividendYield
  } = stock || {};

  return (
    <div className="text-white p-4 space-y-2 text-sm md:text-base">
      <div>Open: {formatCurrency(open)}</div>
      <div>High: {formatCurrency(high)}</div>
      <div>Low: {formatCurrency(low)}</div>
      <div>52wk High: {formatCurrency(yearHigh)}</div>
      <div>52wk Low: {formatCurrency(yearLow)}</div>
      <div>Avg Vol: {avgVolume?.toLocaleString() ?? '-'}</div>
      <div>Mkt Cap: {marketCap?.toLocaleString() ?? '-'}</div>
      <div>Shares Out: {sharesOutstanding?.toLocaleString() ?? '-'}</div>
      <div>Div Yield: {dividendYield ? `${(dividendYield * 100).toFixed(2)}%` : '-'}</div>
    </div>
  );
};

export default ChartHeader;