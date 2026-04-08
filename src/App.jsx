import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import AuthLayout from './layouts/AuthLayout.jsx';
import MainLayout from './layouts/MainLayout.jsx';

// Route guards
import ProtectedRoute from './routes/ProtectedRoute.jsx';

// Pages
import LandingPage from './pages/LandingPage.jsx';
import CodingArea from './pages/CodingArea.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import VerifyPage from './pages/VerifyPage.jsx';
import ForgotPasswordPage from './pages/ForgotPasswordPage.jsx';
import ProblemsPage from './pages/ProblemsPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import PostMatch from './pages/PostMatch.jsx';
import Leaderboard from './pages/Leaderboard.jsx';
import WaitingRoom from './pages/WaitingRoom.jsx';

function CodeClashApp() {
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
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
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

export default CodeClashApp;
