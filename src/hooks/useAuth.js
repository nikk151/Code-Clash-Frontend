import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

// ===================================================================
// useAuth — Custom hook to consume AuthContext
// ===================================================================
//
// WHY A CUSTOM HOOK:
// Instead of writing this in every component:
//   const { user, login, logout } = useContext(AuthContext);
//
// You just write:
//   const { user, login, logout } = useAuth();
//
// It's shorter AND it gives a clear error if you forget to wrap
// your app in <AuthProvider>.
// ===================================================================

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuth() must be used inside an <AuthProvider>. ' +
      'Did you forget to wrap your app in <AuthProvider> in main.jsx?'
    );
  }

  return context;
};

export default useAuth;
