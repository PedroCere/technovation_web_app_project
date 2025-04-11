import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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
        if (!response.ok) throw new Error('Failed to fetch predictions');
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

  const sortByLatest = () => {
    setPredictions(prev => [...prev].sort((a, b) => new Date(b.date) - new Date(a.date)));
  };

  const sortByConfidence = () => {
    setPredictions(prev => [...prev].sort((a, b) => b.confidence - a.confidence));
  };

  if (loading) return <div className="text-center p-8">Loading predictions...</div>;
  if (error) return <div className="text-center p-8 text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen flex bg-[#07020B] text-white">
      {/* Sidebar */}
      <div className="w-64 p-6 border-r border-[#2A2530]">
        <div className="w-full mb-6">
          <img src="/logo (2).png" alt="MarketVision.AI Logo" className="h-24 w-full object-cover" />
        </div>
        <nav className="space-y-6">
          {[{
            title: 'Trading',
            items: [
              { icon: <FaChartLine size={20} />, label: 'Dashboard', tab: 'dashboard' },
              { icon: <FaChartLine size={20} />, label: 'Markets', tab: 'markets' },
              { icon: <FaSearch size={20} />, label: 'Predictions', tab: 'predictions' }
            ]
          }, {
            title: 'Portfolio',
            items: [
              { icon: <FaFileAlt size={20} />, label: 'Overview', tab: 'overview' },
              { icon: <FaFileAlt size={20} />, label: 'Holdings', tab: 'holdings' },
              { icon: <FaFileAlt size={20} />, label: 'Performance', tab: 'performance' }
            ]
          }, {
            title: 'Settings',
            items: [
              { icon: <FaCog size={20} />, label: 'Preferences', tab: 'preferences' },
              { icon: <FaUserCircle size={20} />, label: 'Account', tab: 'account' }
            ]
          }].map(section => (
            <div key={section.title} className="border-b border-[#2A2530] pb-4">
              <h3 className="text-[#90CAF9] text-sm uppercase mb-3 font-medium">{section.title}</h3>
              <div className="space-y-3">
                {section.items.map(item => (
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
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="h-16 flex items-center justify-between px-8 border-b-2 border-[#2A2530]">
          <div className="flex items-center gap-6">
            <img src="/foto_usuario.jpg" alt="Usuario" className="h-8 w-8 rounded-full object-cover" />
            <span>Mateo Baccillere</span>
            <div className="flex items-center gap-4">
              <div><p className="text-[#999999] text-sm">Account:</p><p>4453729992</p></div>
              <div><p className="text-[#999999] text-sm">Portfolio Balance</p><p className="text-lg">$623,098.17</p></div>
              <div><p className="text-[#999999] text-sm">Available Funds</p><p className="text-lg">$122,912.50</p></div>
            </div>
          </div>
        </div>

        {/* Prediction Input */}
        <div className="px-8 pt-6">
          <div className="flex items-center gap-4 flex-wrap justify-end">
            <input type="text" placeholder="Asset (Symbol)" className="bg-[#1F1B23] text-white px-3 py-1 rounded-lg outline-none w-32" />
            <input type="text" placeholder="Prediction Title" className="bg-[#1F1B23] text-white px-3 py-1 rounded-lg outline-none w-48" />
            <textarea placeholder="Description" className="bg-[#1F1B23] text-white px-3 py-1 rounded-lg outline-none h-10 w-64" />
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              onClick={async () => {
                const symbol = document.querySelector('input[placeholder="Asset (Symbol)"]').value;
                const title = document.querySelector('input[placeholder="Prediction Title"]').value;
                const value = document.querySelector('textarea').value;

                try {
                  const response = await fetch('http://localhost:8081/api/predictions/prediction', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ predictionTitle: title, userInput: value, symbol })
                  });

                  if (response.ok) {
                    alert('Prediction submitted successfully!');
                    window.location.reload();
                  } else {
                    alert('Error submitting prediction');
                  }
                } catch (error) {
                  console.error('Error:', error);
                  alert('Failed to submit prediction');
                }
              }}
            >
              Submit Prediction
            </button>
          </div>
        </div>

        {/* Prediction Cards */}
        <div className="flex-1 p-8">
          <div className="flex items-center justify-between mb-6">
            <motion.h1 className="text-3xl font-bold"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Predictions
            </motion.h1>
            <div className="flex gap-3">
              <button onClick={sortByLatest} className="bg-[#2A2530] hover:bg-blue-700 px-3 py-1 rounded text-sm transition-colors">
                Sort by Latest 📅
              </button>
              <button onClick={sortByConfidence} className="bg-[#2A2530] hover:bg-green-700 px-3 py-1 rounded text-sm transition-colors">
                Sort by Confidence 💯
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {predictions.map((prediction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-[#1F1B23] rounded-xl shadow-lg p-5 border border-[#2A2530] hover:border-blue-500 transition-all hover:shadow-xl duration-300 relative group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    {prediction.asset}
                    <motion.span
                      title={prediction.expectedChange.startsWith('+') ? 'Expected rise 📈' : 'Expected fall 📉'}
                      className={`text-2xl ${prediction.expectedChange.startsWith('+') ? 'text-green-500' : 'text-red-500'} cursor-help`}
                      whileHover={{ rotate: [0, 8, -8, 0] }}
                      transition={{ duration: 0.6 }}
                    >
                      {prediction.expectedChange.startsWith('+') ? '📈' : '📉'}
                    </motion.span>
                    <div title={`Confidence Level: ${(prediction.confidence * 100).toFixed(1)}%`} className="flex items-center gap-2 cursor-help">
                      <span
                        className={`text-xs px-2 py-1 rounded-full animate-pulse ${
                          prediction.confidence >= 0.75 ? 'bg-green-900 text-green-400'
                          : prediction.confidence >= 0.5 ? 'bg-yellow-900 text-yellow-300'
                          : 'bg-red-900 text-red-300'}`}
                      >
                        {prediction.confidence >= 0.75 ? 'High Confidence'
                        : prediction.confidence >= 0.5 ? 'Medium Confidence'
                        : 'Low Confidence'}
                      </span>
                    </div>
                  </h2>
                </div>

                <div className="mt-2">
                  <p className="text-gray-300 text-sm mb-1 flex items-center gap-1">🧠 Confidence:</p>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${prediction.confidence * 100}%` }}></div>
                  </div>
                  <p className="text-sm mt-1 text-right">{(prediction.confidence * 100).toFixed(1)}%</p>
                </div>

                <div className="mt-4">
                  <p className="text-gray-400 text-sm mb-1 flex items-center gap-1">⚡ Expected Change:</p>
                  <p className="text-md font-semibold text-gray-400">{prediction.expectedChange}</p>
                </div>

                <p className="text-xs text-gray-500 mt-4">{prediction.date}</p>

                <div className="flex gap-2 mt-3">
                  <button title="Recalculate this prediction" className="flex items-center gap-1 text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition-all">
                    Reload 🔄
                  </button>
                  <button title="Mark this prediction as a favorite" className="flex items-center gap-1 text-xs bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded transition-all">
                    Favorite ⭐
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Predictions;
