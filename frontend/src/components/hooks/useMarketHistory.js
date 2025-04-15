import { useEffect, useState } from 'react';

const useMarketHistory = (symbol) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch(`http://localhost:8082/api/market/quote/${symbol}`);
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    };

    fetchQuote();
    const interval = setInterval(fetchQuote, 10000);
    return () => clearInterval(interval);
  }, [symbol]);

  return data;
};

export default useMarketHistory;
