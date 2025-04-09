import { createChart } from "lightweight-charts";
import { useEffect, useRef, useState } from "react";

const generateMockData = (timeframe) => {
  const now = new Date();
  const data = [];
  let basePrice = 400;
  
  for (let i = 0; i < 100; i++) {
    const date = new Date(now);
    date.setMinutes(date.getMinutes() - i * 5);
    date.setMilliseconds(i);
    
    const open = basePrice + (Math.random() * 10 - 5);
    const high = open + Math.random() * 5;
    const low = open - Math.random() * 5;
    const close = low + Math.random() * (high - low);
    
    data.push({
      time: date.getTime(),
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
  const sma50 = [];
  const sma200 = [];
  
  for (let i = 0; i < data.length; i++) {
    if (i >= 49) {
      const sum50 = data.slice(i-49, i+1).reduce((sum, d) => sum + d.close, 0);
      sma50.push({ time: data[i].time, value: sum50 / 50 });
    }
    
    if (i >= 199) {
      const sum200 = data.slice(i-199, i+1).reduce((sum, d) => sum + d.close, 0);
      sma200.push({ time: data[i].time, value: sum200 / 200 });
    }
  }
  
  return { sma50, sma200 };
};

const Chart = ({ timeframe = '5m' }) => {
  const containerRef = useRef(null);
  const [priceInfo, setPriceInfo] = useState(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chart = createChart(containerRef.current, {
      width: containerRef.current.clientWidth,
      height: 400,
      layout: {
        background: { color: "#0A0A0F" },
        textColor: "#D9D9D9",
        fontSize: 12,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      },
      grid: {
        vertLines: { color: "rgba(37, 37, 53, 0.5)", visible: true },
        horzLines: { color: "rgba(37, 37, 53, 0.7)" },
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
        borderColor: '#252535',
        tickMarkFormatter: (time) => {
          const date = new Date(time);
          return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        },
      },
      rightPriceScale: {
        borderColor: '#252535',
        entireTextOnly: true,
      },
      crosshair: {
        mode: 1,
        vertLine: {
          color: 'rgba(152, 152, 152, 0.5)',
          labelBackgroundColor: '#121212',
        },
        horzLine: {
          color: 'rgba(152, 152, 152, 0.5)',
          labelBackgroundColor: '#121212',
        },
      },
    });

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: true,
      borderUpColor: "#000000",
      borderDownColor: "#000000",
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
      wickVisible: true,
    });

    const volumeSeries = chart.addHistogramSeries({
      color: "rgba(38, 166, 154, 0.3)",
      priceFormat: { type: 'volume' },
      priceScaleId: '',
    });

    const sma50Series = chart.addLineSeries({
      color: "rgba(255, 152, 0, 0.7)",
      lineWidth: 1,
      lineStyle: 2,
    });

    const sma200Series = chart.addLineSeries({
      color: "rgba(0, 150, 136, 0.7)",
      lineWidth: 1,
    });

    chart.subscribeCrosshairMove(param => {
      if (param.time) {
        const data = param.seriesData.get(candlestickSeries);
        if (data) {
          setPriceInfo({
            open: data.open.toFixed(2),
            high: data.high.toFixed(2),
            low: data.low.toFixed(2),
            close: data.close.toFixed(2),
            volume: (data.volume / 1000).toFixed(1) + 'K'
          });
        }
      }
    });

    const priceData = generateMockData(timeframe);
    const { sma50, sma200 } = calculateIndicators(priceData);
    
    candlestickSeries.setData(priceData);
    volumeSeries.setData(priceData.map(d => ({ time: d.time, value: d.volume })));
    sma50Series.setData(sma50);
    sma200Series.setData(sma200);

    chart.timeScale().fitContent();

    return () => chart.remove();
  }, [timeframe]);

  return (
    <div className="relative h-full" ref={containerRef}>
      {priceInfo && (
        <div className="absolute top-3 right-3 bg-[#0A0A0F] bg-opacity-80 p-2 rounded text-xs">
          <div>O: {priceInfo.open}</div>
          <div>H: {priceInfo.high}</div>
          <div>L: {priceInfo.low}</div>
          <div>C: {priceInfo.close}</div>
          <div>Vol: {priceInfo.volume}</div>
        </div>
      )}
    </div>
  );
};

export default Chart;
