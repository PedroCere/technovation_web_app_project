import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Markets from "./pages/Markets.jsx";
import Predictions from "./pages/Predictions.jsx";
import Account from "./pages/Account.jsx";
import Preferences from "./pages/Preferences.jsx";
import "../src/components/styles/global.css";

function App() {
  useEffect(() => {
    document.title = 'MarketVision';
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/predictions" element={<Predictions />} />
        <Route path="/account" element={<Account />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </Router>
  );
}


export default App;