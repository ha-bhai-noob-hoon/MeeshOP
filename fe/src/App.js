// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import InventoryPage from './pages/InventoryPage';
import ProfitPage from './pages/ProfitPage';
import SarimaPage from './pages/SarimaPage';
import DiscountPage from './pages/DiscountPage';
import MultiplierPage from './pages/MultiplierPage';
import InsightsPage from './pages/InsightsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/profit" element={<ProfitPage />} />
        <Route path="/sarima" element={<SarimaPage />} />
        <Route path="/discount" element={<DiscountPage />} />
        <Route path="/multiplier" element={<MultiplierPage />} />
        <Route path="/insights" element={<InsightsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
