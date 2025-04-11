import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Markets from "./pages/Markets.jsx";
import Predictions from "./pages/Predictions.jsx";
import "../src/components/styles/global.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/predictions" element={<Predictions />} />
      </Routes>
    </Router>
  );
}

export default App;
