import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChartLine, FaSearch, FaArrowUp, FaArrowDown, FaFileAlt, FaCog, FaUserCircle } from 'react-icons/fa';

const Predictions = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('predictions');
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPredictions = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/predictions/history');
        if (!response.ok) {
          throw new Error('Failed to fetch predictions');
        }
        const data = await response.json();
        const mapped = data.map(p => ({
          asset: p.predictionTitle || 'N/A',
          futurePrice: p.futurePrice || 0,
          confidence: p.fiability || 0,
          expectedChange: p.result || 'undefined',
          date: new Date(p.predictionDate).toLocaleString(),
        }));
        setPredictions(mapped);
      } catch (err) {
        console.error('Error fetching predictions:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPredictions();
  }, []);

  const handleNavigation = (tab) => {
    setActiveTab(tab);
    navigate(`/${tab}`);
  };

  if (loading) return <div className="text-center p-8">Loading predictions...</div>;
  if (error) return <div className="text-center p-8 text-red-500">Error: {error}</div>;

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
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleNavigation(item.tab);
                  }}
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
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleNavigation(item.tab);
                  }}
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
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleNavigation(item.tab);
                  }}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
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
          <h1 className="text-3xl font-bold mb-6">Predictions</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...predictions].sort((a, b) => b.confidence - a.confidence).map((prediction, index) => (
            <div key={index} className="bg-[#1F1B23] rounded-xl shadow-lg p-5 border border-[#2A2530] hover:border-blue-500 transition-all hover:shadow-xl hover:scale-[1.02] duration-300">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  {prediction.asset}
                  {prediction.expectedChange.startsWith('+') ? (
                    <span className="text-green-500">📈</span>
                  ) : (
                    <span className="text-red-500">📉</span>
                  )}
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      prediction.confidence >= 0.75 ? 'bg-green-900 text-green-400' :
                      prediction.confidence >= 0.5 ? 'bg-yellow-900 text-yellow-300' :
                      'bg-red-900 text-red-300'
                    }`}>
                      {prediction.confidence >= 0.75 ? 'High Confidence' :
                       prediction.confidence >= 0.5 ? 'Medium Confidence' : 'Low Confidence'}
                    </span>
                    {prediction.confidence >= 0.75 ? (
                      <FaArrowUp className="text-green-500" />
                    ) : prediction.expectedChange.startsWith('+') ? (
                      <FaArrowUp className="text-green-500" />
                    ) : (
                      <FaArrowDown className="text-red-500" />
                    )}
                  </div>
                </h2>
              </div>
              <div className="mt-2">
                <p className="text-gray-300 text-sm mb-1 flex items-center gap-1">
                  <span>🧠</span> Confidence:
                </p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{ width: `${prediction.confidence * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm mt-1 text-right">{(prediction.confidence * 100).toFixed(1)}%</p>
              </div>

              <div className="mt-4">
                <p className="text-gray-400 text-sm mb-1 flex items-center gap-1">
                  <span>⚡</span> Expected Change:
                </p>
                <p className={`text-md font-semibold text-gray-400`}>
                  {prediction.expectedChange}
                </p>
              </div>

                <p className="text-xs text-gray-500 mt-4">{prediction.date}</p>
                <div className="flex gap-2 mt-3">
                  <button 
                    className="flex items-center gap-1 text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                    onClick={() => console.log('Recalculating prediction', prediction.asset)}
                  >
                    Reload Prediction 🔄
                  </button>
                  <button 
                    className="flex items-center gap-1 text-xs bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded"
                    onClick={() => console.log('Saving as favorite', prediction.asset)}
                  >
                    Save as Favorite ⭐
                  </button>
                </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Predictions;
