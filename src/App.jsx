import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 
import LandingPage from './Pages/LandingPage';
import CodingArea from './Pages/CodingArea';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import VerifyPage from './Pages/VerifyPage';
import ProblemsPage from './Pages/ProblemsPage';
import Dashboard from './Pages/Dashboard';
import PostMatch from './Pages/PostMatch';
import Leaderboard from './Pages/Leaderboard';
import WaitingRoom from './Pages/WaitingRoom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/problems" element={<ProblemsPage />} />
        <Route path="/arena" element={<CodingArea />} />
        <Route path="/match-waiting" element={<WaitingRoom />} />
        <Route path="/post-match" element={<PostMatch />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;
