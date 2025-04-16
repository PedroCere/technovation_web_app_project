import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaChartLine, FaCoins, FaArrowUp, FaArrowDown, 
  FaPercent, FaSortAmountDown, FaCalendarAlt 
} from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Performance = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('1M');
  const [activeMetric, setActiveMetric] = useState('profit');
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });

  // Mock performance data
  const mockPerformance = [
    { 
      id: 1, 
      date: '2023-05-01', 
      profit: 1250.45, 
      roi: 8.25, 
      trades: 14, 
      winRate: 78.5,
      history: {
        '24H': [1200, 1225, 1230, 1250],
        '1W': [1100, 1150, 1200, 1225, 1230, 1240, 1250],
        '1M': [1000, 1050, 1100, 1150, 1200, 1225, 1250],
        '1Y': [500, 600, 700, 800, 900, 1000, 1100, 1250]
      }
    },
    { 
      id: 2, 
      date: '2023-04-01', 
      profit: 980.30, 
      roi: 5.75, 
      trades: 12, 
      winRate: 66.7,
      history: {
        '24H': [950, 960, 970, 980],
        '1W': [900, 920, 940, 950, 960, 970, 980],
        '1M': [800, 850, 880, 900, 920, 940, 980],
        '1Y': [400, 500, 600, 700, 800, 850, 900, 980]
      }
    },
    { 
      id: 3, 
      date: '2023-03-01', 
      profit: -320.15, 
      roi: -2.35, 
      trades: 8, 
      winRate: 37.5,
      history: {
        '24H': [-300, -310, -315, -320],
        '1W': [-250, -280, -290, -300, -310, -315, -320],
        '1M': [-200, -220, -250, -280, -290, -300, -320],
        '1Y': [-100, -150, -180, -200, -220, -250, -280, -320]
      }
    },
    { 
      id: 4, 
      date: '2023-02-01', 
      profit: 750.80, 
      roi: 4.85, 
      trades: 10, 
      winRate: 70.0,
      history: {
        '24H': [700, 720, 740, 750],
        '1W': [650, 680, 700, 710, 720, 730, 750],
        '1M': [600, 620, 650, 680, 700, 710, 750],
        '1Y': [300, 400, 500, 550, 600, 620, 650, 750]
      }
    },
  ];

  useEffect(() => {
    const fetchPerformance = async () => {
      try {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchPerformance();
  }, []);

  const sortData = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const totalProfit = mockPerformance.reduce((acc, item) => acc + item.profit, 0);
  const avgROI = mockPerformance.reduce((acc, item) => acc + item.roi, 0) / mockPerformance.length;
  const totalTrades = mockPerformance.reduce((acc, item) => acc + item.trades, 0);
  const avgWinRate = mockPerformance.reduce((acc, item) => acc + item.winRate, 0) / mockPerformance.length;

  // Generate cumulative performance data
  const generateCumulativeData = () => {
    let cumulative = 0;
    return mockPerformance
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .flatMap(item => 
        item.history[timeRange].map((value, index) => {
          cumulative += value;
          return {
            time: index,
            value: cumulative
          };
        })
      );
  };

  // Generate performance history data
  const generatePerformanceHistory = () => {
    return mockPerformance.map(item => ({
      date: new Date(item.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      profit: item.profit,
      roi: item.roi,
      trades: item.trades,
      winRate: item.winRate
    }));
  };

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const chartVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1 }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.05 }
    }),
    exit: { opacity: 0, height: 0 }
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

  return (
    <div className="min-h-screen flex bg-[#07020B] text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />

        <motion.div
          className="flex-1 p-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Performance Overview */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              {
                icon: FaCoins,
                title: "Total Profit",
                value: `$${totalProfit >= 0 ? '+' : ''}${totalProfit.toLocaleString(undefined, { maximumFractionDigits: 2 })}`,
                color: totalProfit >= 0 ? 'green' : 'red'
              },
              {
                icon: FaPercent,
                title: "Avg ROI",
                value: `${avgROI >= 0 ? '+' : ''}${avgROI.toFixed(2)}%`,
                color: avgROI >= 0 ? 'blue' : 'red'
              },
              {
                icon: FaChartLine,
                title: "Total Trades",
                value: totalTrades,
                color: 'purple'
              },
              {
                icon: FaChartLine,
                title: "Avg Win Rate",
                value: `${avgWinRate.toFixed(1)}%`,
                color: 'yellow'
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-[#1F1B23] p-4 rounded-xl border border-[#2A2530]"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className={`p-2 rounded-lg ${card.color === 'green' ? 'bg-green-600' : 
                                card.color === 'red' ? 'bg-red-600' : 
                                card.color === 'blue' ? 'bg-blue-600' : 
                                card.color === 'purple' ? 'bg-purple-600' : 'bg-yellow-600'}`}
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
                  >
                    <card.icon className="text-xl" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-[#999999]">{card.title}</p>
                    <p className={`text-xl font-bold ${card.color === 'green' ? 'text-green-500' : 
                                              card.color === 'red' ? 'text-red-500' : 
                                              card.color === 'blue' ? 'text-blue-500' : 
                                              card.color === 'purple' ? 'text-purple-500' : 'text-yellow-500'}`}>
                      {card.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <motion.div
              className="bg-[#1F1B23] p-6 rounded-xl border border-[#2A2530]"
              variants={chartVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Performance History</h3>
                <div className="flex gap-2">
                  {['Profit', 'ROI', 'Trades', 'Win Rate'].map(metric => (
                    <motion.button
                      key={metric}
                      onClick={() => setActiveMetric(metric.toLowerCase())}
                      className={`px-3 py-1 rounded-lg ${activeMetric === metric.toLowerCase() ? 'bg-blue-600' : 'bg-[#2A2530]'}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {metric}
                    </motion.button>
                  ))}
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={generatePerformanceHistory()}>
                  <XAxis dataKey="date" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip
                    contentStyle={{ background: '#1F1B23', border: 'none' }}
                  />
                  <Bar 
                    dataKey={activeMetric} 
                    fill="#0070E4"
                  >
                    {generatePerformanceHistory().map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`}
                        fill={
                          activeMetric === 'profit' || activeMetric === 'roi' ? 
                          (entry[activeMetric] >= 0 ? '#4CAF50' : '#F44336') : 
                          activeMetric === 'winrate' ?
                          (entry.winRate >= 50 ? '#4CAF50' : '#F44336') : '#0070E4'
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div
              className="bg-[#1F1B23] p-6 rounded-xl border border-[#2A2530]"
              variants={chartVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Cumulative Performance</h3>
                <div className="flex gap-2">
                  {['24H', '1W', '1M', '1Y'].map(range => (
                    <motion.button
                      key={range}
                      onClick={() => setTimeRange(range)}
                      className={`px-3 py-1 rounded-lg ${timeRange === range ? 'bg-blue-600' : 'bg-[#2A2530]'}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {range}
                    </motion.button>
                  ))}
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={generateCumulativeData()}>
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
                    tickFormatter={(value) => `$${value.toLocaleString()}`}
                  />
                  <Tooltip
                    contentStyle={{ background: '#1F1B23', border: 'none' }}
                    formatter={(value) => [`$${value.toLocaleString()}`, 'Cumulative Profit']}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#0070E4" 
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ 
                      r: 6, 
                      stroke: '#00C4E4', 
                      strokeWidth: 2,
                      fill: '#0070E4'
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Performance Table */}
          <div className="bg-[#1F1B23] rounded-xl border border-[#2A2530] overflow-hidden">
            <div className="grid grid-cols-5 gap-4 p-4 text-sm font-medium border-b border-[#2A2530]">
              {['Date', 'Profit/Loss', 'ROI', 'Trades', 'Win Rate'].map((header, index) => (
                <motion.div 
                  key={header}
                  className="flex items-center gap-1 cursor-pointer hover:text-blue-500 transition-colors"
                  onClick={() => sortData(header.replace('/', '').toLowerCase())}
                  whileHover={{ scale: 1.05 }}
                >
                  {header}
                  <FaSortAmountDown className="text-xs opacity-50" />
                </motion.div>
              ))}
            </div>

            <AnimatePresence>
              {mockPerformance.map((performance, index) => (
                <motion.div
                  key={performance.id}
                  variants={rowVariants}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="grid grid-cols-5 gap-4 p-4 items-center border-b border-[#2A2530] hover:bg-[#2A2530] cursor-pointer"
                  whileHover={{ scale: 1.005, backgroundColor: 'rgba(42, 37, 48, 0.8)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <FaCalendarAlt className="text-blue-500" />
                    <div>
                      {new Date(performance.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                  </motion.div>

                  <motion.div
                    className={`font-mono ${performance.profit >= 0 ? 'text-green-500' : 'text-red-500'}`}
                    whileHover={{ scale: 1.1 }}
                  >
                    ${performance.profit >= 0 ? '+' : ''}{performance.profit.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </motion.div>

                  <motion.div
                    className={`font-mono ${performance.roi >= 0 ? 'text-green-500' : 'text-red-500'}`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {performance.roi >= 0 ? '+' : ''}{performance.roi.toFixed(2)}%
                  </motion.div>

                  <motion.div
                    className="font-mono"
                    whileHover={{ scale: 1.1 }}
                  >
                    {performance.trades}
                  </motion.div>

                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`w-16 text-center py-1 rounded ${performance.winRate >= 50 ? 
                      'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'}`}>
                      {performance.winRate.toFixed(1)}%
                    </div>
                    <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div 
                        className={`h-full ${performance.winRate >= 50 ? 'bg-green-500' : 'bg-red-500'}`} 
                        style={{ width: `${performance.winRate}%` }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Efecto de partículas decorativas */}
          <motion.div
            className="fixed top-0 left-0 w-full h-full pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`
                }}
                animate={{
                  y: [0, 50, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Performance;