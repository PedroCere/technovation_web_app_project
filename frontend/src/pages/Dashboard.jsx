import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChartLine, FaNewspaper, FaFileAlt, FaCog, FaSearch, FaUserCircle, FaWallet, FaHistory } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import Chart from '../components/Chart';
import StockHeaderPanel from '../components/StockHeaderPanel';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('buy');

  const handleNavigation = (tab) => {
    setActiveTab(tab);
    navigate(`/${tab}`);
  };

  return (
    <div className="min-h-screen flex bg-[#07020B] text-white">
     <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Enhanced Top Navbar */}
        <div className="h-16 flex items-center justify-between px-8 border-b-2 border-[#2A2530] bg-bg-[#07020B]">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 group cursor-pointer relative">
              <img 
                src="/foto_usuario.jpg" 
                alt="Usuario" 
                className="h-10 w-10 rounded-full object-cover border-2 border-transparent group-hover:border-[#0070E4] transition-all"
              />
              <span className="font-medium">Mateo Baccillere</span>
              <FiChevronDown className="text-gray-400 group-hover:text-[#0070E4] transition-colors" />
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 w-48 bg-[#1A161F] rounded-lg shadow-2xl mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 invisible group-hover:visible">
                <div className="py-2">
                  <button className="w-full px-4 py-2 text-left hover:bg-[#2A2530]">Profile Settings</button>
                  <button className="w-full px-4 py-2 text-left hover:bg-[#2A2530]">Logout</button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="p-3 bg-bg-[#07020B] rounded-lg">
                <p className="text-[#999999] text-sm">Portfolio Balance</p>
                <p className="text-lg font-bold bg-gradient-to-r from-[#0070E4] to-[#00C4E4] bg-clip-text text-transparent">
                  $623,098.17
                </p>
              </div>
              <div className="p-3 bg-bg-[#07020B] rounded-lg">
                <p className="text-[#999999] text-sm">Available Funds</p>
                <p className="text-lg font-bold text-[#81C784]">$122,912.50</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 bg-[#1F1B23] px-4 py-2 rounded-lg hover:bg-[#2A2530] transition-colors">
              <FaSearch className="text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent outline-none placeholder-[#666666] focus:text-white transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Main Body */}
        <div className="flex-1 grid grid-cols-5 gap-6 p-8 bg-gradient-to-b from-bg-[#07020B] to-[#1A1520]">
          {/* Left Section (Chart & Details) */}
          <div className="col-span-3 space-y-6">
            {/* Chart Tabs */}
            <div className="flex justify-between p-1 bg-[#1F1B23] rounded-xl">
              {['Chart', 'Options', 'News', 'Financials', 'Analysts', 'Risk', 'Releases', 'Notes', 'Profile'].map((tab) => (
                <button 
                  key={tab}
                  className={`flex-1 px-3 py-2 mx-1 rounded-lg transition-all ${
                    activeTab === tab.toLowerCase() 
                      ? 'bg-gradient-to-r from-[#0070E4] to-[#0060C4] text-white' 
                      : 'text-[#999999] hover:text-white hover:bg-[#2A2530]'
                  }`}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                >
                  <span className="text-sm font-medium">{tab}</span>
                </button>
              ))}
            </div>

            {/* Stock Header Panel */}
            <StockHeaderPanel stockData={{
              ticker: 'MSFT',
              companyName: 'Microsoft Corp NASDAQ',
              currentPrice: 406.32,
              change: +2.24,
              changePercent: 0.26,
              afterHoursPrice: 406.83,
              afterHoursChange: -0.27,
              afterHoursChangePercent: 0.07,
              open: 401.23,
              low: 400.10,
              high: 408.36,
              week52High: 430.82,
              week52Low: 273.13,
              avgVolume: '21.73M',
              sharesOutstanding: '7.43B',
              marketCap: '3.02T',
              dividendYield: 0.74
            }} />

            {/* Chart */}
            <div className="rounded-xl border border-[#2a253000] bg-bg-[#07020B]">
              <div className="h-150 p-4">
                <Chart />
              </div>
            </div>
          </div>

          {/* Right Section (Trade Execution) */}
          <div className="col-span-2 space-y-6">
            {/* Trade Execution */}
            <div className="bg-[#121318] p-6 rounded-xl border border-[#2A2530]">
              <div className="bg-gradient-to-r from-[#0070E4] to-[#0060C4] p-4 rounded-t-xl -m-6 mb-4">
                <h2 className="text-2xl font-bold text-white">Trade Execution</h2>
              </div>
              
              <div className="space-y-4 mt-4">
                {/* Order Type Section */}
                <div className="space-y-4">
                  <div className="bg-[#1A161F] p-3 rounded-lg">
                    <label className="block text-[#CCCCCC] mb-2 text-sm font-medium">Order Type</label>
                    <select className="w-full bg-[#2A2530] p-2 rounded-lg border border-[#3A3540] focus:border-[#0070E4] focus:ring-2 focus:ring-[#0070E433] transition-all">
                      <option>Market Price</option>
                    </select>
                  </div>

                  {/* Quantity Section */}
                  <div className="bg-[#1A161F] p-3 rounded-lg">
                    <label className="block text-[#CCCCCC] mb-2 text-sm font-medium">Quantity</label>
                    <div className="grid grid-cols-5 gap-2">
                      {[100, 30, 50, 100, 500].map((qty, index) => (
                        <button
                          key={`qty-${index}`}
                          className="bg-[#2A2530] hover:bg-[#3A3540] p-2 rounded-lg transition-all"
                        >
                          <span className="text-gray-200 text-sm">{qty}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time & Stop Price Section */}
                  <div className="bg-[#1A161F] p-3 rounded-lg">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[#CCCCCC] mb-2 text-sm font-medium">Time in Force</label>
                        <select className="w-full bg-[#2A2530] p-2 rounded-lg border border-[#3A3540] focus:border-[#0070E4] focus:ring-2 focus:ring-[#0070E433] transition-all">
                          <option>Day</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[#CCCCCC] mb-2 text-sm font-medium">Stop Price</label>
                        <input
                          type="number"
                          className="w-full bg-[#2A2530] p-2 rounded-lg border border-[#3A3540] focus:border-[#0070E4] focus:ring-2 focus:ring-[#0070E433] transition-all"
                          defaultValue="400.00"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price Information */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#2A2530] p-3 rounded-lg flex flex-col items-center">
                    <div className="text-sm text-[#999999]">Market Price</div>
                    <div className="text-lg font-bold text-[#81C784]">$402.15</div>
                  </div>
                  <div className="bg-[#2A2530] p-3 rounded-lg flex flex-col items-center">
                    <div className="text-sm text-[#999999]">Last Price</div>
                    <div className="text-lg font-bold text-[#E57373]">$401.80</div>
                  </div>
                </div>

                {/* Transaction Details */}
                <div className="space-y-3 bg-[#1A161F] p-4 rounded-lg">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm text-[#CCCCCC]">Est. Loss:</span>
                    <span className="text-red-400 font-bold">$12,097.36</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-sm text-[#CCCCCC]">Buying Power:</span>
                    <span className="text-green-400 font-bold">$14,097.36</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-sm text-[#CCCCCC]">Fees:</span>
                    <span className="text-sm">$4.00</span>
                  </div>
                  <div className="flex justify-between pt-3 font-bold border-t border-[#2A2530]">
                    <span>Total:</span>
                    <span className="text-lg">$40,000</span>
                  </div>
                </div>

                {/* Buy/Sell Toggle */}
                <div className="flex border-b border-[#2A2530] mb-4">
                  <button className={`flex-1 py-2 text-sm font-bold ${
                    activeTab === 'buy' 
                      ? 'text-blue-400 border-b-2 border-blue-500' 
                      : 'text-gray-400 hover:text-blue-300'
                  }`} onClick={() => setActiveTab('buy')}>
                    BUY
                  </button>
                  <button className={`flex-1 py-2 text-sm font-bold ${
                    activeTab === 'sell' 
                      ? 'text-red-400 border-b-2 border-red-400' 
                      : 'text-gray-400 hover:text-red-300'
                  }`} onClick={() => setActiveTab('sell')}>
                    SELL
                  </button>
                </div>

                {/* Action Button */}
                <button className={`w-full py-3 rounded-lg text-sm font-bold transition-all ${
                  activeTab === 'buy' 
                    ? 'bg-gradient-to-r from-[#0070E4] to-[#0060C4] hover:opacity-90' 
                    : 'bg-gradient-to-r from-[#E53935] to-[#D32F2F] hover:opacity-90'
                } text-white`}>
                  {activeTab === 'buy' ? 'BUY MSFT' : 'SELL MSFT'}
                </button>
              </div>
            </div>

            {/* Time & Sales */}
            <div className="bg-[#121318] rounded-xl border border-[#2A2530]">
              <div className="bg-gradient-to-r from-[#0070E4] to-[#0060C4] p-3 rounded-t-xl">
                <h3 className="text-lg font-bold text-white">Time & Sales</h3>
              </div>
              <div className="p-4">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-[#2A2530]">
                      <th className="pb-2 text-sm text-[#CCCCCC] text-left">Time</th>
                      <th className="pb-2 text-sm text-[#CCCCCC] text-center">Price</th>
                      <th className="pb-2 text-sm text-[#CCCCCC] text-right">Shares</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(5)].map((_, i) => (
                      <tr key={`trade-${i}`} className="border-b border-[#2A2530] hover:bg-[#1A161F]">
                        <td className="py-2 text-sm text-left">16:59:32</td>
                        <td className="py-2 text-sm text-center">420.56</td>
                        <td className="py-2 text-sm text-right">25</td>
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

export default Dashboard;