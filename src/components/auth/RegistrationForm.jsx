import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { useNavigate, Link } from 'react-router-dom';
import { sendOTP } from '../../api/authApi';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  async function handleSubmit(e) {
    e.preventDefault();
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
          onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }}
          required
        />
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
