import api from './axiosClient';

// ===================================================================
// healthApi.js — Server health check
// ===================================================================
// Maps to: GET /api/health (defined directly in app.js)
// ===================================================================

/**
 * GET /api/health
 * Checks if the backend is running and reachable.
 */
export const checkHealth = () => {
  return api.get('/health');
};
