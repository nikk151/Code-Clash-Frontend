import React from 'react';
import RegistrationForm from '../components/auth/RegistrationForm';

// RegisterPage — only renders the UNIQUE content for the registration page.
// The shared wrapper (background, header, footer) is handled by AuthLayout.

function RegisterPage() {
  return <RegistrationForm />;
}

export default RegisterPage;
