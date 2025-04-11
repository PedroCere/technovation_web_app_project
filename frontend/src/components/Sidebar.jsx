import React from "react";
import { FaChartBar, FaUser, FaCog, FaHome, FaBell, FaNewspaper } from "react-icons/fa";
import "./styles/Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">Logo</div>
      <ul className="menu">
        <li><FaChartBar /><span>Charts</span></li>
        <li><FaChartBar /><span>Predictions</span></li>
        <li><FaNewspaper /><span>News</span></li>
        <li><FaUser /><span>Profile</span></li>
        <li><FaBell /><span>Alerts</span></li>
        <li><FaCog /><span>Settings</span></li>
      </ul>
    </div>
  );
};

export default Sidebar;
