import React from "react";
import "./styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MarketVision AI</div>
      <ul className="nav-links">
        <li>Charts</li>
        <li>News</li>
        <li>Profile</li>
        <li>Alerts</li>
        <li>Settings</li>
      </ul>
    </nav>
  );
};

export default Navbar;
