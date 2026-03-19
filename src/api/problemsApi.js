import api from './axiosClient';

// ===================================================================
// problemsApi.js — All problem-related API calls
// ===================================================================
// Maps to backend: routes/problems.routes.js → /api/problems/*
//
// USAGE IN COMPONENTS:
//   import { getAllProblems, getProblem } from '../api/problemsApi';
//   const { data } = await getAllProblems(1, 5);
//   const { data } = await getProblem('two-sum');
// ===================================================================

/**
 * GET /api/problems/get-all-problems
 * Fetches a paginated list of all problems.
 * @param {number} page - Page number (default: 1)
 * @param {number} limit - Items per page (default: 5)
 */
export const getAllProblems = (page = 1, limit = 5) => {
  return api.get('/problems/get-all-problems', {
    params: { page, limit },
  });
};

/**
 * GET /api/problems/get-problem/:slug
 * Fetches a single problem by its slug.
 * @param {string} slug - The problem's URL slug (e.g., 'two-sum')
 */
export const getProblem = (slug) => {
  return api.get(`/problems/get-problem/${slug}`);
};

/**
 * POST /api/problems/create-problem (admin only)
 * Creates a new problem.
 * @param {Object} problemData - Problem data object
 */
export const createProblem = (problemData) => {
  return api.post('/problems/create-problem', problemData);
};

/**
 * PUT /api/problems/edit-problem/:slug (admin only)
 * Updates an existing problem.
 * @param {string} slug - The problem's URL slug
 * @param {Object} problemData - Updated problem data
 */
export const editProblem = (slug, problemData) => {
  return api.put(`/problems/edit-problem/${slug}`, problemData);
};

/**
 * DELETE /api/problems/delete-problem/:slug (admin only)
 * Deletes a problem.
 * @param {string} slug - The problem's URL slug
 */
export const deleteProblem = (slug) => {
  return api.delete(`/problems/delete-problem/${slug}`);
};
