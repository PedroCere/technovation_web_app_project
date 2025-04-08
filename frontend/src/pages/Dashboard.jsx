import React from "react";
import Sidebar from "../components/Sidebar";
import ChartPanel from "../components/ChartPanel";
import TradePanel from "../components/TradePanel";
import RecentTrades from "../components/RecentTrades";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <div className="top-bar">
          <div className="user-info">
            <img src="profile-image-url" alt="User" className="profile-pic" />
            <span className="username">Mateo </span>
            <span className="account-number">Account: 4453728992</span>
          </div>
          <div className="portfolio-info">
            <span>Portfolio Balance: <strong>$623,098.17</strong></span>
            <span>Available Funds: <strong>$122,912.50</strong></span>
          </div>
        </div>
        <ChartPanel />
        <TradePanel />
        <RecentTrades />
      </div>
    </div>
  );
};

export default Dashboard;
