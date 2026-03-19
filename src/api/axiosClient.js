import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';

// ===================================================================
// axiosClient.js — The SINGLE Axios instance for the entire app
// ===================================================================
//
// WHAT THIS DOES:
// Creates a pre-configured Axios instance that ALL API calls go through.
// Instead of writing this in every component:
//
//   fetch('http://localhost:8000/api/auth/login', {
//     method: 'POST',
//     credentials: 'include',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data)
//   })
//
// You just write:
//   api.post('/auth/login', data)
//
// WHY AXIOS OVER FETCH:
// 1. Auto JSON — axios auto-stringifies request body and parses response
// 2. Interceptors — we can add auth tokens or handle errors globally
// 3. Better error handling — axios throws on 4xx/5xx, fetch doesn't
// 4. withCredentials — set once here, applies to every request
// ===================================================================

const api = axios.create({
  // Base URL from .env — all requests will be prefixed with this
  // e.g., api.get('/auth/login') → GET http://localhost:8000/api/auth/login
  baseURL: API_BASE_URL,

  // Send cookies with every request (important for auth!)
  // This is the equivalent of { credentials: 'include' } in fetch()
  withCredentials: true,

  // Default headers for all requests
  headers: {
    'Content-Type': 'application/json',
  },
});

// ===================================================================
// RESPONSE INTERCEPTOR — Global error handling
// ===================================================================
// This runs on EVERY response. If the server returns a 401 (unauthorized),
// we can redirect to login. If it returns a 500, we can show a toast.
// For now, we just pass errors through so each component can handle them.

api.interceptors.response.use(
  // Success — just return the response as-is
  (response) => response,

  // Error — handle common errors globally
  (error) => {
    // If the server says "not authenticated" (401), redirect to login
    if (error.response && error.response.status === 401) {
      // TODO (Phase 4): Clear auth context and redirect
      console.warn('Unauthorized — redirecting to login');
    }

    // If the server is completely unreachable (network error)
    if (!error.response) {
      console.error('Network error — is the backend running?');
    }

    // Re-throw so the calling component can also handle it
    return Promise.reject(error);
  }
);

export default api;
