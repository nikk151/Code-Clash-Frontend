// Central constants for the frontend app.
// API_BASE_URL is read from the .env file (VITE_API_URL).
// If .env is missing, it falls back to localhost:8000.
//
// WHY: Instead of hardcoding 'http://localhost:8000/api' in every component,
// we define it ONCE here. When deploying to production, you just change
// the .env file — zero code changes needed.

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';
