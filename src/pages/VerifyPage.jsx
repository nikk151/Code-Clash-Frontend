import React from 'react';
import VerificationForm from '../components/auth/VerificationForm';

// VerifyPage — only renders the UNIQUE content for the verification page.
// The shared wrapper (background, header, footer) is handled by AuthLayout.

function VerifyPage() {
  return <VerificationForm />;
}

export default VerifyPage;
