import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaChartLine, FaNewspaper, FaFileAlt, FaCog, FaSearch, FaUserCircle, FaWallet, FaShieldAlt, FaHistory } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
const Markets = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarActiveTab, setSidebarActiveTab] = useState(
    location.pathname === '/dashboard' ? 'dashboard' : 'markets'
  );

  const handleNavigation = (tab) => {
    console.log(`Navigating to ${tab}`);
    setSidebarActiveTab(tab);
    navigate(`/${tab}`, { replace: true });
  };

  const [topGainers, setTopGainers] = useState([
    { symbol: 'AAPL', name: 'Apple Inc', price: 185.34, change: 2.45 },
    { symbol: 'MSFT', name: 'Microsoft Corp', price: 406.21, change: 1.89 },
    { symbol: 'NVDA', name: 'NVIDIA Corp', price: 726.13, change: 4.32 },
    { symbol: 'TSLA', name: 'Tesla Inc', price: 172.63, change: 3.15 },
    { symbol: 'AMZN', name: 'Amazon.com Inc', price: 178.75, change: 1.23 }
  ]);

  const [topNews, setTopNews] = useState([
    { title: 'Fed signals potential rate cuts in 2024', time: '2 hours ago' },
    { title: 'Tech stocks rally as AI boom continues', time: '4 hours ago' },
    { title: 'Bitcoin surges past $50,000 mark', time: '6 hours ago' },
    { title: 'New regulations proposed for big tech', time: '8 hours ago' },
    { title: 'Retail sales show unexpected growth', time: '10 hours ago' }
  ]);

  const [mostActive, setMostActive] = useState([
    { symbol: 'SPY', name: 'SPDR S&P 500', price: 502.34, change: 0.45 },
    { symbol: 'QQQ', name: 'Invesco QQQ', price: 432.12, change: 0.89 },
    { symbol: 'AMD', name: 'Advanced Micro', price: 176.45, change: -1.32 },
    { symbol: 'INTC', name: 'Intel Corp', price: 43.21, change: -0.15 },
    { symbol: 'META', name: 'Meta Platforms', price: 485.76, change: 2.23 }
  ]);


  const sortByChangeDesc = (data) => {
    return [...data].sort((a, b) => b.change - a.change);
  };


  const handleRefresh = () => {

    setTopGainers(sortByChangeDesc(topGainers));
    setMostActive(sortByChangeDesc(mostActive));
  };
  useState(() => {
    setTopGainers(sortByChangeDesc(topGainers));
    setMostActive(sortByChangeDesc(mostActive));
  }, []);

  return (
    <div className="min-h-screen flex bg-[#07020B] text-white">
      <Sidebar />

      {/* Contenido Principal */}
      <div className="flex-1 flex flex-col">
      <Navbar />
        
        {/* Contenido Principal - 3 Secciones */}
        <div className="flex-1 p-6 space-y-6">
          {/* Sección Top Gainers */}
          <div className="bg-[#121318] rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Top Gainers</h2>
              <button 
                className="text-blue-400 hover:text-blue-300"
                onClick={handleRefresh}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#2A2530]">
                    <th className="pb-2 text-left">Symbol</th>
                    <th className="pb-2 text-left">Name</th>
                    <th className="pb-2 text-right">Price</th>
                    <th className="pb-2 text-right">% Change</th>
                  </tr>
                </thead>
                <tbody>
                  {topGainers.map((item, index) => (
                    <tr key={index} className="border-b border-[#2A2530] hover:bg-[#1F1B23]">
                      <td className="py-3 font-bold">{item.symbol}</td>
                      <td className="py-3">{item.name}</td>
                      <td className="py-3 text-right text-blue-400">{item.price}</td>
                      <td className={`py-3 text-right ${item.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {item.change}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Sección Top News */}
            <div className="bg-[#121318] rounded-lg p-6 h-full">
              <h2 className="text-xl font-bold mb-4">Top News</h2>
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {topNews.map((news, index) => (
                  <div key={index} className="border-b border-[#2A2530] pb-3 last:border-0">
                    <h3 className="text-gray-300 hover:text-white cursor-pointer">{news.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{news.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sección Most Active */}
            <div className="bg-[#121318] rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Most Active</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#2A2530]">
                      <th className="pb-2 text-left">Symbol</th>
                      <th className="pb-2 text-left">Name</th>
                      <th className="pb-2 text-right">Price</th>
                      <th className="pb-2 text-right">% Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mostActive.map((item, index) => (
                      <tr key={index} className="border-b border-[#2A2530] hover:bg-[#1F1B23]">
                        <td className="py-3 font-bold">{item.symbol}</td>
                        <td className="py-3">{item.name}</td>
                        <td className="py-3 text-right text-blue-400">{item.price}</td>
                        <td className={`py-3 text-right ${item.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {item.change}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Markets;
