import api from './axiosClient';

// ===================================================================
// authApi.js — All authentication-related API calls
// ===================================================================
// Maps to backend: routes/auth.routes.js → /api/auth/*
//
// USAGE IN COMPONENTS:
//   import { login, register } from '../api/authApi';
//   const response = await login({ email, password });
// ===================================================================

/**
 * POST /api/auth/login
 * Logs in a user. The backend sets an httpOnly cookie on success.
 * @param {Object} credentials - { email, password }
 */
export const login = (credentials) => {
  return api.post('/auth/login', credentials);
};

/**
 * POST /api/auth/register
 * Registers a new user.
 * @param {Object} userData - { username, email, password }
 */
export const register = (userData) => {
  return api.post('/auth/register', userData);
};

/**
 * POST /api/auth/logout
 * Logs out the user (clears the session cookie).
 */
export const logout = () => {
  return api.post('/auth/logout');
};

/**
 * POST /api/auth/send-otp
 * Sends OTP for email verification.
 * @param {Object} data - { email }
 */
export const sendOTP = (data) => {
  return api.post('/auth/send-otp', data);
};

/**
 * POST /api/auth/change-password
 * Changes user password.
 * @param {Object} data - { oldPassword, newPassword }
 */
export const changePassword = (data) => {
  return api.post('/auth/change-password', data);
};
