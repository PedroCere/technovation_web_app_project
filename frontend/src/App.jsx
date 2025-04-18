import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Markets from "./pages/Markets.jsx";
import Predictions from "./pages/Predictions.jsx";
import Account from "./pages/Account.jsx";
import Preferences from "./pages/Preferences.jsx";
import "../src/components/styles/global.css";
import Security from "./pages/Security.jsx";
import Overview from "./pages/Overview.jsx";
import Holdings from "./pages/Holdings.jsx";
import Performance from "./pages/Performance.jsx";
import HomeFull from "./components/HomeFull.jsx";



function App() {
  useEffect(() => {
    document.title = 'MarketVision';
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeFull />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/predictions" element={<Predictions />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/holdings" element={<Holdings />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/account" element={<Account />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/security" element={<Security />} />
      </Routes>
    </Router>
  );
}


export default App;