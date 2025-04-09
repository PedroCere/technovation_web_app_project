import { createChart } from "lightweight-charts";
import { useEffect, useRef, useState } from "react";
import { FaChartLine, FaChartArea, FaChartBar } from "react-icons/fa";

const generateMockData = (timeframe) => {
  const now = new Date();
  const data = [];
  let basePrice = 400;
  
  // Generate 100 data points
  for (let i = 0; i < 100; i++) {
    const date = new Date(now);
    // Create unique timestamps by subtracting minutes and adding milliseconds
    date.setMinutes(date.getMinutes() - i * 5);
    date.setMilliseconds(i);
    
    const open = basePrice + (Math.random() * 10 - 5);
    const high = open + Math.random() * 5;
    const low = open - Math.random() * 5;
    const close = low + Math.random() * (high - low);
    
    data.push({
      time: date.getTime(), // Unix timestamp in milliseconds
      open,
      high,
      low,
      close,
      volume: Math.floor(Math.random() * 10000)
    });
    
    basePrice = close;
  }
  
  return data.reverse();
};

const calculateIndicators = (data) => {
  // Calculate SMA50 and SMA200
  const sma50 = [];
  const sma200 = [];
  const rsi = [];
  
  for (let i = 0; i < data.length; i++) {
    if (i >= 49) {
      const sum50 = data.slice(i-49, i+1).reduce((sum, d) => sum + d.close, 0);
      sma50.push({ time: data[i].time, value: sum50 / 50 });
    }
    
    if (i >= 199) {
      const sum200 = data.slice(i-199, i+1).reduce((sum, d) => sum + d.close, 0);
      sma200.push({ time: data[i].time, value: sum200 / 200 });
    }
    
    // Simple RSI calculation
    if (i > 0) {
      const change = data[i].close - data[i-1].close;
      rsi.push({ 
        time: data[i].time, 
        value: Math.min(100, Math.max(0, 50 + (change > 0 ? 10 : -10)))
      });
    }
  }
  
  return { sma50, sma200, rsi };
};

const Chart = ({ timeframe = '5m' }) => {
  const chartRef = useRef(null);
  const [activeIndicators, setActiveIndicators] = useState({
    sma50: true,
    sma200: true,
    rsi: true
  });

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = createChart(chartRef.current, {
      width: chartRef.current.clientWidth,
      height: 400,
      layout: {
        background: { color: "#0A0A0F" },
        textColor: "#FFFFFF",
      },
      grid: {
        vertLines: { color: "#1E1E2D" },
        horzLines: { color: "#1E1E2D" },
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    });

    // Price chart
    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#0070E4",
      downColor: "#FF3B30",
      borderVisible: false,
      wickUpColor: "#0070E4",
      wickDownColor: "#FF3B30",
    });

    // Volume chart
    const volumeSeries = chart.addHistogramSeries({
      color: "#0070E480",
      priceFormat: {
        type: 'volume',
      },
      priceScaleId: '',
    });

    // RSI series on main chart
    const rsiSeries = chart.addLineSeries({
      color: "#FFA500",
      lineWidth: 2,
      priceScaleId: 'rsi',
    });
    chart.priceScale('rsi').applyOptions({
      scaleMargins: {
        top: 0.85,
        bottom: 0.05,
      },
    });

    // Generate and set data
    const priceData = generateMockData(timeframe);
    const { sma50, sma200, rsi } = calculateIndicators(priceData);
    
    candlestickSeries.setData(priceData);
    volumeSeries.setData(priceData.map(d => ({
      time: d.time,
      value: d.volume
    })));

    // Add indicators if active
    if (activeIndicators.sma50) {
      const sma50Series = chart.addLineSeries({
        color: "#FFA500",
        lineWidth: 2,
      });
      sma50Series.setData(sma50);
    }

    if (activeIndicators.sma200) {
      const sma200Series = chart.addLineSeries({
        color: "#00E676",
        lineWidth: 2,
      });
      sma200Series.setData(sma200);
    }

    if (activeIndicators.rsi) {
      rsiSeries.setData(rsi);
    }

    // Auto-scaling
    chart.timeScale().fitContent();

    return () => chart.remove();
  }, [timeframe, activeIndicators]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex gap-4 mb-2">
      {['1m', '5m', '15m', '1h', '4h', '1d'].map((tf, index) => (
          <button
            key={`${tf}-${index}`}
            className={`px-3 py-1 rounded ${timeframe === tf ? 'bg-[#0070E4] text-white' : 'bg-[#2A2530]'}`}
            onClick={() => setTimeframe(tf)}
          >
            {tf}
          </button>
        ))}
      </div>
      <div ref={chartRef} className="flex-1" />
      <div className="flex gap-4 mt-2">
        <button
          className={`flex items-center gap-2 px-3 py-1 rounded ${activeIndicators.sma50 ? 'bg-[#0070E4] text-white' : 'bg-[#2A2530]'}`}
          onClick={() => setActiveIndicators(prev => ({...prev, sma50: !prev.sma50}))}
        >
          <FaChartLine /> SMA 50
        </button>
        <button
          className={`flex items-center gap-2 px-3 py-1 rounded ${activeIndicators.sma200 ? 'bg-[#0070E4] text-white' : 'bg-[#2A2530]'}`}
          onClick={() => setActiveIndicators(prev => ({...prev, sma200: !prev.sma200}))}
        >
          <FaChartArea /> SMA 200
        </button>
        <button
          className={`flex items-center gap-2 px-3 py-1 rounded ${activeIndicators.rsi ? 'bg-[#0070E4] text-white' : 'bg-[#2A2530]'}`}
          onClick={() => setActiveIndicators(prev => ({...prev, rsi: !prev.rsi}))}
        >
          <FaChartBar /> RSI
        </button>
      </div>
    </div>
  );
};

export default Chart;
