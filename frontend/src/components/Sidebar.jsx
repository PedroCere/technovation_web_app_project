import React from "react";
import { FaChartLine, FaUser, FaCog } from "react-icons/fa";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Logo</h2>
      <ul>
        <li><FaChartLine /> Dashboard</li>
        <li><FaUser /> Profile</li>
        <li><FaCog /> Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
