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
  (response) => {
    // If the request succeeds, just return the response
    return response;
  },
  (error) => {
    // -------------------------------------------------------------
    // Global Error Handling
    // -------------------------------------------------------------
    if (error.response) {
      // The server responded with a status code outside the 2xx range

      // 401 Unauthorized — Session expired or invalid token
      if (error.response.status === 401) {
        console.warn('Session expired or unauthorized. Emitting event to clear auth context.');
        window.dispatchEvent(new Event('auth-unauthorized'));
      }

      // Add other global error handling here if needed
      // e.g., 500 Internal Server Error, 403 Forbidden
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received from server. Is the backend running?');
    } else {
      // Something happened while setting up the request
      console.error('Error setting up the request:', error.message);
    }

    // Pass the error down to the component so it can show a specific message
    return Promise.reject(error);
  }
);

export default api;
