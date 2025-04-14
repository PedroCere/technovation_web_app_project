import { useEffect, useState } from 'react';

const useMarketHistory = (symbol) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch(`http://localhost:8082/api/market/history/${symbol}`);
        const json = await res.json();
        setHistory(json.historical || []);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    fetchHistory();
  }, [symbol]);

  return history;
};

export default useMarketHistory;