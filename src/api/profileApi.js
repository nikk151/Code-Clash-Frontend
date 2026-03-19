import api from './axiosClient';

// ===================================================================
// profileApi.js — User profile API calls
// ===================================================================
// Maps to backend: routes/profile.routes.js → /api/profile/*
// ===================================================================

/**
 * GET /api/profile/stats
 * Fetches the logged-in user's stats (rating, wins, losses, etc.)
 */
export const getStats = () => {
  return api.get('/profile/stats');
};
