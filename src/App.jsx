import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Layouts
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';

// Route guards
import ProtectedRoute from './routes/ProtectedRoute';

// Pages
import LandingPage from './pages/LandingPage';
import CodingArea from './pages/CodingArea';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import VerifyPage from './pages/VerifyPage';
import ProblemsPage from './pages/ProblemsPage';
import Dashboard from './pages/Dashboard';
import PostMatch from './pages/PostMatch';
import Leaderboard from './pages/Leaderboard';
import WaitingRoom from './pages/WaitingRoom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public — Landing page (no layout, no auth required) */}
        <Route path="/" element={<LandingPage />} />

        {/* Public — Auth pages (share AuthLayout, no auth required) */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/verify" element={<VerifyPage />} />
        </Route>

        {/* Protected — Main app pages (must be logged in) */}
        {/* ProtectedRoute checks auth FIRST, then MainLayout wraps with nav */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/problems" element={<ProblemsPage />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Route>

          {/* Protected standalone pages */}
          <Route path="/arena" element={<CodingArea />} />
          <Route path="/arena/:roomCode" element={<CodingArea />} />
          <Route path="/match-waiting" element={<WaitingRoom />} />
          <Route path="/match-waiting/:roomCode" element={<WaitingRoom />} />
          <Route path="/post-match" element={<PostMatch />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
