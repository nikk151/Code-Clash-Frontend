import React, { createContext, useState, useEffect, useCallback } from 'react';
import { login as loginApi, register as registerApi, logout as logoutApi, getCurrentUser } from '../api/authApi';

// ===================================================================
// AuthContext — Manages the user's authentication state globally
// ===================================================================
//
// WHAT THIS SOLVES:
// Without this, every component that needs to know "is the user logged in?"
// or "what's the username?" would have to make its own API call or pass
// props down through many layers (prop drilling).
//
// HOW IT WORKS:
// 1. Wraps the entire app in <AuthProvider> (in main.jsx)
// 2. Any component can call useAuth() to get { user, login, logout, loading }
// 3. On app load, tries to validate the existing session cookie via /profile/stats
// 4. On login/register success, stores the user data in state
// 5. On logout or 401 error, clears the user
//
// WHY createContext + Provider:
// React Context lets you share state across ALL components without
// passing props manually. Think of it as a "global variable" but
// the React way — it re-renders consumers when the value changes.
// ===================================================================

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Core state
  const [user, setUser] = useState(null);     // null = not logged in
  const [loading, setLoading] = useState(true); // true while checking session on app load

  // =================================================================
  // Session validation — runs ONCE when the app first loads
  // =================================================================
  useEffect(() => {
    const validateSession = async () => {
      try {
        const { data } = await getCurrentUser();
        // If we get here, the cookie is valid — user is logged in
        setUser(data.user);
      } catch (error) {
        // 401 or network error — user is not logged in, that's fine
        setUser(null);
      } finally {
        // Either way, we're done loading
        setLoading(false);
      }
    };

    validateSession();
  }, []);

  // Listen for the global 401 event dispatched by axiosClient
  useEffect(() => {
    const handleUnauthorized = () => {
      setUser(null);
    };
    
    window.addEventListener('auth-unauthorized', handleUnauthorized);
    
    return () => {
      window.removeEventListener('auth-unauthorized', handleUnauthorized);
    };
  }, []);

  // =================================================================
  // Login — calls the API, stores user data on success
  // =================================================================
  const login = useCallback(async (credentials) => {
    const { data } = await loginApi(credentials);
    // Backend returns { user: { id, username, email } }
    setUser(data.user);
    return data;
  }, []);

  // =================================================================
  // Register — calls the API, stores user data on success
  // =================================================================
  const register = useCallback(async (userData) => {
    const { data } = await registerApi(userData);
    // Backend returns { user: { id, username, email, role } }
    setUser(data.user);
    return data;
  }, []);

  // =================================================================
  // Logout — calls the API, clears user state
  // =================================================================
  const logout = useCallback(async () => {
    try {
      await logoutApi();
    } catch (error) {
      // Even if the API call fails, clear local state
      console.error('Logout API error:', error);
    }
    setUser(null);
  }, []);

  // =================================================================
  // clearUser — used by the axios interceptor on 401
  // =================================================================
  const clearUser = useCallback(() => {
    setUser(null);
  }, []);

  // The value object that ALL consumers of this context will receive
  const value = {
    user,       // Current user object, or null if not logged in
    loading,    // True while checking session on initial app load
    login,      // Function: login({ email, password }) → Promise
    register,   // Function: register({ username, email, password }) → Promise
    logout,     // Function: logout() → Promise
    clearUser,  // Function: clearUser() — for 401 interceptor
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
