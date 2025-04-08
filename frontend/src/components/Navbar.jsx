import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3>Mateo el Violadito</h3>
      <div className="portfolio">
        <span>Portfolio Balance: <strong>$623,098.17</strong></span>
        <span>Available Funds: <strong>$122,912.50</strong></span>
      </div>
    </nav>
  );
};

export default Navbar;