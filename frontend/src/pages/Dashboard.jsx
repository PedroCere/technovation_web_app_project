import React, { useState } from 'react';
import { FaChartLine, FaNewspaper, FaFileAlt, FaCog, FaSearch, FaUserCircle } from 'react-icons/fa';
import Chart from '../components/Chart';
import StockHeaderPanel from '../components/StockHeaderPanel';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('buy');
  return (
    <div className="min-h-screen flex bg-[#07020B] text-white">
      {/* Sidebar */}
      <div className="w-64 p-6 border-r border-[#2A2530]">
        <div className="w-full">
          <img src="/logo (2).png" alt="MarketVision.AI Logo" className="h-24 w-full object-cover" />
        </div>

        {/* Navegación */}
        <nav className="space-y-6">
          <div className="border-b border-[#2A2530] pb-4">
            <h3 className="text-[#90CAF9] text-sm uppercase mb-3 font-medium">Trading</h3>
            <div className="space-y-3">
              {[
                { icon: <FaChartLine size={20} />, label: 'Dashboard', tab: 'dashboard' },
                { icon: <FaChartLine size={20} />, label: 'Markets', tab: 'markets' },
                { icon: <FaSearch size={20} />, label: 'Watchlist', tab: 'watchlist' }
              ].map((item) => (
                <button
                  key={item.label}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg ${(activeTab === item.tab || item.tab === 'dashboard') ? 'bg-[#0070E4] text-white' : 'hover:bg-[#2A2530]'}`}
                  onClick={() => setActiveTab(item.tab)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="border-b border-[#2A2530] pb-4">
            <h3 className="text-[#90CAF9] text-sm uppercase mb-3 font-medium">Portfolio</h3>
            <div className="space-y-3">
              {[
                { icon: <FaFileAlt size={20} />, label: 'Overview', tab: 'overview' },
                { icon: <FaFileAlt size={20} />, label: 'Holdings', tab: 'holdings' },
                { icon: <FaFileAlt size={20} />, label: 'Performance', tab: 'performance' }
              ].map((item) => (
                <button
                  key={item.label}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg ${activeTab === item.tab ? 'bg-[#0070E4] text-white' : 'hover:bg-[#2A2530]'}`}
                  onClick={() => setActiveTab(item.tab)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pb-4">
            <h3 className="text-[#90CAF9] text-sm uppercase mb-3 font-medium">Settings</h3>
            <div className="space-y-3">
              {[
                { icon: <FaCog size={20} />, label: 'Preferences', tab: 'preferences' },
                { icon: <FaUserCircle size={20} />, label: 'Account', tab: 'account' }
              ].map((item) => (
                <button
                  key={item.label}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg ${activeTab === item.tab ? 'bg-[#0070E4] text-white' : 'hover:bg-[#2A2530]'}`}
                  onClick={() => setActiveTab(item.tab)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Contenido Principal */}
      <div className="flex-1 flex flex-col">
        {/* Navbar Superior */}
        <div className="h-16 flex items-center justify-between px-8 border-b-2 border-[#2A2530]">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <img src="/foto_usuario.jpg" alt="Usuario" className="h-8 w-8 rounded-full object-cover" />
              <span>Mateo Baccillere</span>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <p className="text-[#999999] text-sm">Account:</p>
                <p>4453729992</p>
              </div>
              <div>
                <p className="text-[#999999] text-sm">Portfolio Balance</p>
                <p className="text-lg">$623,098.17</p>
              </div>
              <div>
                <p className="text-[#999999] text-sm">Available Funds</p>
                <p className="text-lg">$122,912.50</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 bg-[#1F1B23] px-4 py-2 rounded-lg">
              <FaSearch className="text-white" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent outline-none"
              />
            </div>
          </div>
        </div>

        {/* Cuerpo Principal */}
        <div className="flex-1 grid grid-cols-5 gap-6 p-8">
          {/* Sección Izquierda (Gráfico y Detalles) */}
          <div className="col-span-3 space-y-6">
            {/* Chart Tabs */}
            <div className="flex justify-between p-2 bg-[#1F1B23] rounded-lg">
              {['Chart', 'Options', 'News', 'Financials', 'Analysts', 'Risk', 'Releases', 'Notes', 'Profile'].map((tab) => (
                <button 
                  key={tab}
                  className={`flex-1 px-3 py-1 mx-1 rounded-md transition-all ${activeTab === tab.toLowerCase() 
                    ? 'bg-[#0070E4] text-white' 
                    : 'text-[#999999] hover:text-white hover:bg-[#2A2530]'}`}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                >
                  {tab}
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

            {/* Gráfico */}
            <div className="rounded-lg">
              {/* Área del Gráfico */}
              <div className="h-96 p-4">
                <Chart />
              </div>
            </div>

          </div>

          {/* Sección Derecha (Trade Execution) */}
          <div className="col-span-2 space-y-6">
            {/* Trade Execution */}
            <div className="bg-[#121318] p-6 rounded-lg">
              <div className="bg-[#1F1B23] p-4 rounded-t-lg -m-6 mb-4">
                <h2 className="text-2xl font-bold text-white">Trade</h2>
              </div>
              
              <div className="space-y-3 mt-3">
                {/* Order Type Section */}
                <div className="bg-[#1A161F] p-2 rounded-lg">
                  <label className="block text-[#999999] mb-1 text-xs font-medium">Order Type</label>
                  <select className="w-full bg-[#2A2530] p-1.5 rounded-sm border border-[#2A2530] text-sm">
                    <option>Market Price</option>
                  </select>
                </div>

                {/* Quantity Section */}
                <div className="bg-[#1A161F] p-2 rounded-lg">
                  <label className="block text-[#999999] mb-1 text-xs font-medium">Quantity</label>
                  <div className="grid grid-cols-5 gap-1">
                    {[100, 30, 50, 100, 500].map((qty, index) => (
                      <button
                        key={`qty-${index}`}
                        className="bg-[#2A2530] hover:bg-[#3A3540] py-1.5 rounded-sm transition-all"
                      >
                        <span className="text-gray-200 text-sm">{qty}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time & Stop Price Section */}
                <div className="bg-[#1A161F] p-2 rounded-lg">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[#999999] mb-1 text-xs font-medium">Time in Force</label>
                      <select className="w-full bg-[#2A2530] p-1.5 rounded-sm border border-[#2A2530] text-sm">
                        <option>Day</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[#999999] mb-1 text-xs font-medium">Stop Price</label>
                      <input
                        type="number"
                        className="w-full bg-[#2A2530] p-1.5 rounded-sm border border-[#2A2530] text-sm"
                        defaultValue="400.00"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="bg-[#2A2530] p-1.5 rounded-md flex flex-col items-center">
                      <div className="text-xs text-[#999999]">Market Price</div>
                      <div className="text-base font-bold">$402.15</div>
                    </div>
                    <div className="bg-[#2A2530] p-1.5 rounded-md flex flex-col items-center">
                      <div className="text-xs text-[#999999]">Last Price</div>
                      <div className="text-base font-bold">$401.80</div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between items-center py-1 border-b border-[#2A2530]">
                      <span className="text-xs">Est. Loss:</span>
                      <span className="text-red-500 text-sm font-bold">$12,097.36</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#2A2530]">
                      <span className="text-xs">Buying Power:</span>
                      <span className="text-green-500 text-sm font-bold">$14,097.36</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#2A2530]">
                      <span className="text-xs">Fees:</span>
                      <span className="text-sm">$4.00</span>
                    </div>
                    <div className="flex justify-between py-1 font-bold text-sm">
                      <span>Total:</span>
                      <span>$40,000</span>
                    </div>
                  </div>
                </div>

                <div className="flex border-b border-gray-700 mb-2">
                  <button className={`flex-1 py-1 text-sm font-bold ${activeTab === 'buy' ? 'text-blue-400 border-b-2 border-blue-500' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('buy')}>
                    BUY
                  </button>
                  <button className={`flex-1 py-1 text-sm font-bold ${activeTab === 'sell' ? 'text-red-400 border-b-2 border-red-400' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('sell')}>
                    SELL
                  </button>
                </div>
                <button className={`w-full py-1.5 rounded-sm text-sm font-bold transition-all ${activeTab === 'buy' 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-red-600 hover:bg-red-700'} text-white`}>
                  {activeTab === 'buy' ? 'BUY MSFT' : 'SELL MSFT'}
                </button>
              </div>
            </div>

            {/* Time & Sales */}
            <div className="bg-[#121318] rounded-lg">
              <div className="bg-[#1F1B23] p-3 rounded-t-lg mb-3">
                <h3 className="text-lg font-bold text-white">Time & Sales</h3>
              </div>
              <table className="w-full pl-6 pr-4">
                <thead>
                  <tr className="border-b-2 border-[#2A2530]">
                    <th className="pb-2 text-center">Time</th>
                    <th className="pb-2 text-center">Price</th>
                    <th className="pb-2 text-center">Shares</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, i) => (
                    <tr key={`trade-${i}`} className="border-b border-[#2A2530]">
                      <td className="py-2 text-center">16:59:32</td>
                      <td className="py-2 text-center">420.56</td>
                      <td className="py-2 text-center">25</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;