import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaCoins, FaPlus, FaChartLine, FaArrowUp, FaArrowDown, 
  FaFileExport, FaChartPie, FaPercent, FaSortAmountDown 
} from 'react-icons/fa';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, LineChart, Line, XAxis, YAxis } from 'recharts';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Holdings = () => {
  const navigate = useNavigate();
  const [holdings, setHoldings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [timeRange, setTimeRange] = useState('24H');
  const [sortConfig, setSortConfig] = useState({ key: 'value', direction: 'desc' });


  const mockHoldings = [
    { 
      id: 1, 
      asset: 'Bitcoin', 
      symbol: 'BTC', 
      price: 62345.67, 
      quantity: 1.25, 
      avgCost: 58210.50, 
      change24h: 4.52, 
      history: {
        '24H': [61000, 61500, 62000, 62345],
        '1W': [58000, 59000, 60000, 61000, 61500, 62000, 62345],
        '1M': [50000, 52000, 55000, 58000, 60000, 61000, 62345],
        '1Y': [30000, 35000, 40000, 45000, 50000, 55000, 60000, 62345]
      }
    },
    { 
      id: 2, 
      asset: 'Ethereum', 
      symbol: 'ETH', 
      price: 3821.45, 
      quantity: 8.5, 
      avgCost: 3520.75, 
      change24h: -1.25, 
      history: {
        '24H': [3800, 3825, 3810, 3821],
        '1W': [3700, 3750, 3780, 3800, 3820, 3815, 3821],
        '1M': [3500, 3600, 3650, 3700, 3750, 3800, 3821],
        '1Y': [2000, 2500, 3000, 3200, 3500, 3700, 3800, 3821]
      }
    },
    { 
      id: 3, 
      asset: 'Solana', 
      symbol: 'SOL', 
      price: 145.90, 
      quantity: 50, 
      avgCost: 98.40, 
      change24h: 12.75, 
      history: {
        '24H': [140, 142, 144, 145],
        '1W': [130, 135, 138, 140, 142, 143, 145],
        '1M': [120, 125, 130, 135, 140, 142, 145],
        '1Y': [50, 60, 80, 100, 120, 130, 140, 145]
      }
    },
    { 
      id: 4, 
      asset: 'Cardano', 
      symbol: 'ADA', 
      price: 0.654, 
      quantity: 1500, 
      avgCost: 0.582, 
      change24h: 3.45, 
      history: {
        '24H': [0.64, 0.65, 0.653, 0.654],
        '1W': [0.62, 0.63, 0.635, 0.64, 0.645, 0.65, 0.654],
        '1M': [0.60, 0.61, 0.615, 0.62, 0.63, 0.64, 0.654],
        '1Y': [0.40, 0.45, 0.50, 0.55, 0.58, 0.60, 0.63, 0.654]
      }
    },
  ];

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        setTimeout(() => {
          setHoldings(mockHoldings);
          setLoading(false);
        }, 1500);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchHoldings();
  }, []);

  const sortData = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    setHoldings(prev => [...prev].sort((a, b) => {
      const valueA = key === 'value' ? a.price * a.quantity : a[key];
      const valueB = key === 'value' ? b.price * b.quantity : b[key];
      return direction === 'asc' ? valueA - valueB : valueB - valueA;
    }));
  };

  const COLORS = ['#0070E4', '#00C4E4', '#FFC107', '#E91E63', '#4CAF50'];
  const totalValue = holdings.reduce((acc, holding) => acc + holding.price * holding.quantity, 0);
  const bestPerformer = holdings.reduce((max, curr) => curr.change24h > max.change24h ? curr : max, holdings[0]);
  const worstPerformer = holdings.reduce((min, curr) => curr.change24h < min.change24h ? curr : min, holdings[0]);

  const generatePortfolioHistory = () => {
    if (holdings.length === 0) return [];
    
    const selectedHistory = holdings[0].history[timeRange];
    return selectedHistory.map((_, index) => {
      const portfolioValue = holdings.reduce((sum, holding) => {
        return sum + (holding.history[timeRange][index] * holding.quantity);
      }, 0);
      
      return {
        time: index,
        value: portfolioValue
      };
    });
  };

  if (loading) return (
    <div className="min-h-screen flex bg-[#07020B] text-white">
      <Sidebar />
      <div className="flex-1 p-8 space-y-4">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="h-20 bg-[#1F1B23] rounded-xl animate-pulse"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          />
        ))}
      </div>
    </div>
  );

  if (error) return <div className="text-center p-8 text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen flex bg-[#07020B] text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="flex-1 p-8">
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-[#1F1B23] p-4 rounded-xl border border-[#2A2530]">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <FaCoins className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-[#999999]">Total Value</p>
                  <p className="text-xl font-bold">${totalValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1F1B23] p-4 rounded-xl border border-[#2A2530]">
              <div className="flex items-center gap-3">
                <div className="bg-green-600 p-2 rounded-lg">
                  <FaChartLine className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-[#999999]">Best Performer</p>
                  <p className="text-xl font-bold text-green-500">
                    {bestPerformer.symbol} {bestPerformer.change24h}%
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1F1B23] p-4 rounded-xl border border-[#2A2530]">
              <div className="flex items-center gap-3">
                <div className="bg-red-600 p-2 rounded-lg">
                  <FaChartLine className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-[#999999]">Worst Performer</p>
                  <p className="text-xl font-bold text-red-500">
                    {worstPerformer.symbol} {worstPerformer.change24h}%
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1F1B23] p-4 rounded-xl border border-[#2A2530]">
              <div className="flex items-center gap-3">
                <div className="bg-purple-600 p-2 rounded-lg">
                  <FaPercent className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-[#999999]">Total Assets</p>
                  <p className="text-xl font-bold">{holdings.length}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#1F1B23] p-6 rounded-xl border border-[#2A2530]">
              <h3 className="text-lg font-semibold mb-4">Asset Allocation</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={holdings.map(holding => ({
                      name: holding.symbol,
                      value: holding.price * holding.quantity,
                    }))}
                    dataKey="value"
                    innerRadius={60}
                    outerRadius={100}
                  >
                    {holdings.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ background: '#1F1B23', border: 'none' }}
                    formatter={(value, name) => [
                      `$${value.toLocaleString()}`,
                      `${name} (${((value / totalValue) * 100).toFixed(1)}%)`
                    ]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-[#1F1B23] p-6 rounded-xl border border-[#2A2530]">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Portfolio History</h3>
                <div className="flex gap-2">
                  {['24H', '1W', '1M', '1Y'].map(range => (
                    <button
                      key={range}
                      onClick={() => setTimeRange(range)}
                      className={`px-3 py-1 rounded-lg ${timeRange === range ? 'bg-blue-600' : 'bg-[#2A2530]'}`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart 
                  data={generatePortfolioHistory()}
                  margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                >
                  <XAxis 
                    dataKey="time" 
                    stroke="#666" 
                    tickFormatter={(value) => {
                      if (timeRange === '24H') return `${value * 6}H`;
                      if (timeRange === '1W') return `Day ${value + 1}`;
                      if (timeRange === '1M') return `Week ${value + 1}`;
                      return `Q${value + 1}`;
                    }}
                  />
                  <YAxis 
                    stroke="#666" 
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                  />
                  <Tooltip
                    contentStyle={{ background: '#1F1B23', border: 'none' }}
                    formatter={(value) => [`$${value.toLocaleString()}`, 'Portfolio Value']}
                    labelFormatter={(label) => {
                      if (timeRange === '24H') return `${label * 6} hours ago`;
                      if (timeRange === '1W') return `Day ${label + 1}`;
                      if (timeRange === '1M') return `Week ${label + 1}`;
                      return `Quarter ${label + 1}`;
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#0070E4" 
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 6, stroke: '#00C4E4', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

         
          <div className="bg-[#1F1B23] rounded-xl border border-[#2A2530] overflow-hidden">
            <div className="grid grid-cols-5 gap-4 p-4 text-sm font-medium border-b border-[#2A2530]">
              {['Asset', 'Price', 'Quantity', 'Value', '24h Change'].map((header, index) => (
                <div 
                  key={header}
                  className="flex items-center gap-1 cursor-pointer hover:text-blue-500 transition-colors"
                  onClick={() => sortData(index === 3 ? 'value' : header.replace(' ', '').toLowerCase())}
                >
                  {header}
                  <FaSortAmountDown className="text-xs opacity-50" />
                </div>
              ))}
            </div>

            <AnimatePresence>
              {holdings.map((holding, index) => (
                <motion.div
                  key={holding.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`grid grid-cols-5 gap-4 p-4 items-center border-b border-[#2A2530] hover:bg-[#2A2530] cursor-pointer ${
                    selectedAsset === holding.id ? 'bg-[#2A2530]' : ''
                  }`}
                  onClick={() => setSelectedAsset(selectedAsset === holding.id ? null : holding.id)}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    >
                      <span className="text-xs font-bold">{holding.symbol}</span>
                    </div>
                    <div>
                      <div className="font-bold">{holding.asset}</div>
                      <div className="text-sm text-[#999999]">${holding.price.toLocaleString()}</div>
                    </div>
                  </div>

                  <div>
                    <div className="font-mono">${holding.price.toLocaleString()}</div>
                    <div className="text-sm text-[#999999]">
                      Avg ${holding.avgCost.toLocaleString(undefined, { maximumFractionDigits: 4 })}
                    </div>
                  </div>

                  <div className="font-mono">{holding.quantity.toLocaleString()}</div>

                  <div className="font-mono">
                    ${(holding.price * holding.quantity).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </div>

                  <div className="flex items-center gap-2">
                    <div className={`w-16 text-center py-1 rounded ${holding.change24h >= 0 ? 
                      'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'}`}>
                      {holding.change24h >= 0 ? '+' : ''}{holding.change24h.toFixed(2)}%
                    </div>
                    <ResponsiveContainer width="60px" height="30px">
                      <LineChart data={holding.history['24H'].map((value, i) => ({ time: i, value }))}>
                        <Line 
                          type="monotone" 
                          dataKey="value" 
                          stroke={holding.change24h >= 0 ? '#4CAF50' : '#F44336'} 
                          strokeWidth={1}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

       
          <motion.button
            className="fixed bottom-8 right-8 bg-gradient-to-r from-[#0070E4] to-[#0060C4] p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            onClick={() => {}}
          >
            <FaPlus className="text-xl" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Holdings;