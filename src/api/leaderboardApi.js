import api from './axiosClient';

// ===================================================================
// leaderboardApi.js — Leaderboard API calls
// ===================================================================
// Maps to backend: routes/leaderboard.js → /api/leaderboard/*
// ===================================================================

/**
 * GET /api/leaderboard
 * Fetches the leaderboard rankings.
 */
export const getLeaderboard = () => {
  return api.get('/leaderboard');
};
