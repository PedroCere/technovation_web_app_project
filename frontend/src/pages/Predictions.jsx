import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChartLine, FaSearch, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Predictions = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('predictions');
  
  const [predictions, setPredictions] = useState([
    { asset: 'MSFT', futurePrice: 420.00, confidence: 85, expectedChange: '+3.5%' },
    { asset: 'AAPL', futurePrice: 190.00, confidence: 80, expectedChange: '+2.0%' },
    { asset: 'GOOGL', futurePrice: 2800.00, confidence: 75, expectedChange: '+1.5%' },
    { asset: 'TSLA', futurePrice: 165.00, confidence: 65, expectedChange: '-2.3%' },
    { asset: 'AMZN', futurePrice: 185.00, confidence: 70, expectedChange: '+1.8%' },
  ]);

  const handleNavigation = (tab) => {
    setActiveTab(tab);
    navigate(`/${tab}`);
  };

  return (
    <div className="min-h-screen flex bg-[#07020B] text-white">
      {/* Sidebar */}
      <div className="w-64 p-6 border-r border-[#2A2530]">
        <div className="w-full">
          <img src="/logo (2).png" alt="MarketVision.AI Logo" className="h-24 w-full object-cover" />
        </div>

        <nav className="space-y-6">
          <div className="border-b border-[#2A2530] pb-4">
            <h3 className="text-[#90CAF9] text-sm uppercase mb-3 font-medium">Trading</h3>
            <div className="space-y-3">
              {[
                { icon: <FaChartLine size={20} />, label: 'Dashboard', tab: 'dashboard' },
                { icon: <FaChartLine size={20} />, label: 'Markets', tab: 'markets' },
                { icon: <FaSearch size={20} />, label: 'Predictions', tab: 'predictions' }
              ].map((item) => (
                <button
                  key={item.label}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg ${activeTab === item.tab ? 'bg-[#0070E4] text-white' : 'hover:bg-[#2A2530]'}`}
                  onClick={() => handleNavigation(item.tab)}
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
                { icon: <FaChartLine size={20} />, label: 'Overview', tab: 'overview' },
                { icon: <FaChartLine size={20} />, label: 'Holdings', tab: 'holdings' },
                { icon: <FaChartLine size={20} />, label: 'Performance', tab: 'performance' }
              ].map((item) => (
                <button
                  key={item.label}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg ${activeTab === item.tab ? 'bg-[#0070E4] text-white' : 'hover:bg-[#2A2530]'}`}
                  onClick={() => handleNavigation(item.tab)}
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
                { icon: <FaChartLine size={20} />, label: 'Preferences', tab: 'preferences' },
                { icon: <FaChartLine size={20} />, label: 'Account', tab: 'account' }
              ].map((item) => (
                <button
                  key={item.label}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg ${activeTab === item.tab ? 'bg-[#0070E4] text-white' : 'hover:bg-[#2A2530]'}`}
                  onClick={() => handleNavigation(item.tab)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>

      <div className="flex-1 flex flex-col">
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

        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Predictions</h1>
          </div>
          
          <div className="bg-[#121318] rounded-lg p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#2A2530]">
                    <th className="pb-4 text-left w-1/4">Asset</th>
                    <th className="pb-4 text-right w-1/4">Future Price</th>
                    <th className="pb-4 text-left w-2/4 pl-4">Confidence</th>
                    <th className="pb-4 text-right w-1/4">Expected Change</th>
                  </tr>
                </thead>
                <tbody>
                  {predictions.map((prediction, index) => (
                    <tr key={index} className="border-b border-[#2A2530] hover:bg-[#1F1B23]">
                      <td className="py-4 font-bold flex items-center gap-2">
                        {prediction.expectedChange.startsWith('+') ? 
                          <FaArrowUp className="text-green-500" /> : 
                          <FaArrowDown className="text-red-500" />}
                        {prediction.asset}
                      </td>
                      <td className="py-4 text-right">${prediction.futurePrice.toFixed(2)}</td>
                      <td className="py-4 flex items-center gap-2 pl-4">
                        <div className="flex-1 bg-gray-700 rounded-full h-2.5">
                          <div 
                            className="bg-blue-500 h-2.5 rounded-full" 
                            style={{ width: `${prediction.confidence}%` }}
                          ></div>
                        </div>
                        <span className="text-sm w-12 text-right">{prediction.confidence}%</span>
                      </td>
                      <td className={`py-4 text-right font-medium ${
                        prediction.expectedChange.startsWith('+') ? 
                        'text-green-500' : 'text-red-500'
                      }`}>
                        {prediction.expectedChange}
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
  );
};

export default Predictions;
