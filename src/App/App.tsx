import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/MainLayout';

function App() {
  return (
    <div>
    <Layout />
    <Router>
      <Routes>
        <Route path="/"  />
        <Route path="/analytics-dashboard" />
        <Route path="/reports"  />
        <Route path="/transaction-query" />
        <Route path ="/reconciliation" />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
