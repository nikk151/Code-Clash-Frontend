import React, { useState, useMemo } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { useNavigate, Link } from 'react-router-dom';
import { sendOTP } from '../../api/authApi';

// Password rules — mirrors the backend's validators.js exactly
const PASSWORD_RULES = [
  { id: 'length', label: '8–20 characters', test: (p) => p.length >= 8 && p.length <= 20 },
  { id: 'upper',  label: 'One uppercase letter', test: (p) => /[A-Z]/.test(p) },
  { id: 'lower',  label: 'One lowercase letter', test: (p) => /[a-z]/.test(p) },
  { id: 'number', label: 'One number', test: (p) => /[0-9]/.test(p) },
  { id: 'special', label: 'One special character (!@#$%^&*)', test: (p) => /[!@#$%^&*]/.test(p) },
];

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [passwordTouched, setPasswordTouched] = useState(false);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Compute which rules pass/fail on every render (cheap — only 5 regex tests)
  const ruleResults = useMemo(
    () => PASSWORD_RULES.map((rule) => ({ ...rule, passed: rule.test(formData.password) })),
    [formData.password]
  );

  const allRulesPassed = ruleResults.every((r) => r.passed);

  async function handleSubmit(e) {
    e.preventDefault();

    // Guard: block submit if password doesn't meet requirements
    if (!allRulesPassed) {
      setPasswordTouched(true);
      setError('Please fix the password requirements below.');
      return;
    }

    try {
      setLoading(true);
      setError('');
      // Step 1: Send OTP to email
      await sendOTP({ email: formData.email });
      
      // Step 2: Navigate to verification page with form data
      navigate('/verify', { state: { formData } });
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError('Network error — is the backend running?');
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card glow glowColor="primary">
      <div className="mb-8">
        <h1 className="text-3xl font-black mb-2">Join the Clash</h1>
        <p className="text-slate-400">Create your account to start competing</p>
      </div>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <Input
          label="Username"
          icon="person"
          placeholder="coder_pro"
          type="text"
          value={formData.username}
          onChange={(e) => { setFormData({ ...formData, username: e.target.value }) }}
          required
        />
        <Input
          label="Email Address"
          icon="mail"
          placeholder="name@company.com"
          type="email"
          value={formData.email}
          onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }}
          required
        />
        <Input
          label="Password"
          icon="lock"
          placeholder="••••••••"
          type="password"
          value={formData.password}
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
            if (!passwordTouched) setPasswordTouched(true);
          }}
          required
        />

        {/* Real-time password requirements checklist */}
        {passwordTouched && (
          <ul className="space-y-1.5 text-sm pl-1 -mt-2">
            {ruleResults.map((rule) => (
              <li key={rule.id} className="flex items-center gap-2">
                <span
                  className={`material-symbols-outlined text-base transition-colors ${
                    rule.passed ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {rule.passed ? 'check_circle' : 'cancel'}
                </span>
                <span className={rule.passed ? 'text-green-400' : 'text-slate-400'}>
                  {rule.label}
                </span>
              </li>
            ))}
          </ul>
        )}

        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button className="w-full py-4 mt-4" size="lg" type="submit" disabled={loading}>
          {loading ? 'Sending Code...' : 'Create Account'}
        </Button>
      </form>
      <div className="mt-8 pt-6 border-t border-slate-800 text-center">
        <p className="text-slate-400">Already have an account?
          <Link
            to="/login"
            className="text-primary font-bold hover:underline ml-1 cursor-pointer"
          >
            Switch to Login
          </Link>
        </p>
      </div>
    </Card>
  );
};

export default RegistrationForm;
