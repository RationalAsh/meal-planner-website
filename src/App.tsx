import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PlanMeal from './components/PlanMeal';

function App() {
  return (
    <>
    <ResponsiveAppBar />
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/plan-meal" element={<PlanMeal />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;