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
/**
 * GET /api/leaderboard
 * Fetches the leaderboard rankings.
 */
export const getLeaderboard = (page = 1, limit = 20) => {
  return api.get(`/leaderboard?page=${page}&limit=${limit}`);
};
