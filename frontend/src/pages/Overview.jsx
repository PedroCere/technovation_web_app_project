import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChartPie, FaStar, FaRocket, FaClock } from 'react-icons/fa';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell, Legend 
} from 'recharts';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Overview = () => {
  const [highlights, setHighlights] = useState([]);
  const [trendData, setTrendData] = useState([]);
  const [performanceData, setPerformanceData] = useState([]);
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
   
    setHighlights([
      {
        label: 'Most Accurate Prediction',
        value: '+8.52%',
        icon: <FaStar className="text-yellow-400" />,
        note: 'BTC / 03-Apr'
      },
      {
        label: 'Most Recent Prediction',
        value: 'ADA',
        icon: <FaClock className="text-blue-400" />,
        note: '10 min ago'
      },
      {
        label: 'Top Performing Asset',
        value: 'ETH',
        icon: <FaRocket className="text-green-400" />,
        note: '+12% in 24h'
      },
      {
        label: 'Total Predictions',
        value: '98',
        icon: <FaChartPie className="text-purple-400" />,
        note: 'This month'
      }
    ]);

    setTrendData([
      { date: 'Apr 1', value: 120 },
      { date: 'Apr 2', value: 150 },
      { date: 'Apr 3', value: 170 },
      { date: 'Apr 4', value: 200 },
      { date: 'Apr 5', value: 180 },
      { date: 'Apr 6', value: 220 },
    ]);

 
    setPerformanceData([
      { asset: 'BTC', performance: 12 },
      { asset: 'ETH', performance: 15 },
      { asset: 'ADA', performance: 8 },
      { asset: 'SOL', performance: 10 },
      { asset: 'DOT', performance: 7 },
    ]);


    setPieData([
      { name: 'BTC', value: 40 },
      { name: 'ETH', value: 30 },
      { name: 'ADA', value: 20 },
      { name: 'Others', value: 10 },
    ]);
  }, []);

  const COLORS = ['#0070E4', '#00C4E4', '#FFC107', '#E91E63'];

  return (
    <div className="min-h-screen flex bg-[#07020B] text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="px-8 pt-6">
          <Navbar />
          <motion.h1
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#00C4E4] to-[#0070E4] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Overview
          </motion.h1>

          {/* Highlights Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#1F1B23] p-6 rounded-xl shadow-lg border border-[#2A2530] hover:border-blue-500 transition"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xl font-semibold text-white">{item.label}</div>
                  <div className="text-2xl">{item.icon}</div>
                </div>
                <div className="text-3xl font-bold mb-2">{item.value}</div>
                <div className="text-sm text-gray-400">{item.note}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <div className="bg-[#1F1B23] p-6 rounded-xl shadow-lg border border-[#2A2530]">
              <h2 className="text-xl font-bold mb-4 text-white">Prediction Trends</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="date" stroke="#ccc" />
                  <YAxis stroke="#ccc" />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#00C4E4" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

          
            <div className="bg-[#1F1B23] p-6 rounded-xl shadow-lg border border-[#2A2530]">
              <h2 className="text-xl font-bold mb-4 text-white">Asset Performance</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="asset" stroke="#ccc" />
                  <YAxis stroke="#ccc" />
                  <Tooltip />
                  <Bar dataKey="performance" fill="#0070E4" />
                </BarChart>
              </ResponsiveContainer>
            </div>

           
            <div className="bg-[#1F1B23] p-6 rounded-xl shadow-lg border border-[#2A2530]">
              <h2 className="text-xl font-bold mb-4 text-white">Growth Over Time</h2>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="date" stroke="#ccc" />
                  <YAxis stroke="#ccc" />
                  <Tooltip />
                  <Area type="monotone" dataKey="value" stroke="#00C4E4" fill="#0070E4" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            
            <div className="bg-[#1F1B23] p-6 rounded-xl shadow-lg border border-[#2A2530]">
              <h2 className="text-xl font-bold mb-4 text-white">Asset Distribution</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#0070E4"
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;