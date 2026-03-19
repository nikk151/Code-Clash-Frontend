import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

// ===================================================================
// ProtectedRoute — Blocks unauthenticated users from accessing pages
// ===================================================================
//
// HOW IT WORKS:
// 1. Checks if the user is logged in via useAuth()
// 2. If still loading (checking session), shows a loading screen
// 3. If not logged in, redirects to /login
// 4. If logged in, renders the child routes via <Outlet />
//
// USAGE IN App.jsx:
//   <Route element={<ProtectedRoute />}>
//     <Route element={<MainLayout />}>
//       <Route path="/dashboard" element={<Dashboard />} />
//     </Route>
//   </Route>
//
// WHY useLocation + state:
// We pass the current URL as state to the login page, so after
// the user logs in, we can redirect them BACK to where they were
// trying to go. Better UX than always going to /dashboard.
// ===================================================================

const ProtectedRoute = () => {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Still checking the session cookie — show a loading screen
  if (loading) {
    return (
      <div className="min-h-screen bg-background-dark flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-slate-400 text-sm font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  // Not logged in — redirect to login, saving where they wanted to go
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Logged in — render the child routes
  return <Outlet />;
};

export default ProtectedRoute;
