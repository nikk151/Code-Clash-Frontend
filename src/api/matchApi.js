import api from './axiosClient';

// ===================================================================
// matchApi.js — All match-related API calls
// ===================================================================
// Maps to backend: routes/match.routes.js → /api/match/*
// ===================================================================

/**
 * POST /api/match/create-match
 * Creates a new match room.
 * @param {Object} matchData - { difficulty, etc. }
 */
export const createMatch = (matchData) => {
  return api.post('/match/create-match', matchData);
};

/**
 * POST /api/match/join-match/:roomCode
 * Joins an existing match room.
 * @param {string} roomCode - The room code (e.g., 'XJ92KF')
 */
export const joinMatch = (roomCode) => {
  return api.post(`/match/join-match/${roomCode}`);
};

/**
 * POST /api/match/submit-code/:roomCode
 * Submits code for evaluation during a match.
 * @param {string} roomCode - The room code
 * @param {Object} submission - { code, language }
 */
export const submitCode = (roomCode, submission) => {
  return api.post(`/match/submit-code/${roomCode}`, submission);
};

/**
 * POST /api/match/run-sample/:roomCode
 * Runs code against sample test cases (without submitting).
 * @param {string} roomCode - The room code
 * @param {Object} submission - { code, language }
 */
export const runSampleTestCases = (roomCode, submission) => {
  return api.post(`/match/run-sample/${roomCode}`, submission);
};
