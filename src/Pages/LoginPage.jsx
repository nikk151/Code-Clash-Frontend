import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import AuthStats from '../components/auth/AuthStats';

// LoginPage — only renders the UNIQUE content for the login page.
// The shared wrapper (background, header, footer) is handled by AuthLayout.

function LoginPage() {
  return (
    <>
      <LoginForm />
      <AuthStats />
    </>
  );
}

export default LoginPage;
