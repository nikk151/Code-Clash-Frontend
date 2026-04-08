import React, { useState, useRef, useEffect } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { useNavigate, Link } from 'react-router-dom';
import { sendOTP, changePassword } from '../../api/authApi';

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1 = email, 2 = otp & new password
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const [formData, setFormData] = useState({
    email: '',
    otp: ['', '', '', '', '', ''],
    newPassword: ''
  });
  
  const inputRefs = useRef([]);

  const handleSendOTP = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');
      await sendOTP({ email: formData.email });
      setStep(2);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const otpString = formData.otp.join('');
    if (otpString.length !== 6) {
      setError('Please enter all 6 digits');
      return;
    }
    try {
      setLoading(true);
      setError('');
      await changePassword({ 
        email: formData.email, 
        otp: otpString, 
        newPassword: formData.newPassword 
      });
      setSuccess('Password reset successfully! Redirecting...');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to reset password');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...formData.otp];
    newOtp[index] = value;
    setFormData({ ...formData, otp: newOtp });
    if (value !== '' && index < 5) inputRefs.current[index + 1].focus();
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !formData.otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <Card glow glowColor="primary">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-black mb-2">Reset Password</h1>
        <p className="text-slate-400">
          {step === 1 ? 'Enter your email to receive a recovery code' : 'Enter the code and your new password'}
        </p>
      </div>
      
      {step === 1 ? (
        <form className="space-y-5" onSubmit={handleSendOTP}>
          <Input
            label="Email Address"
            icon="mail"
            placeholder="name@company.com"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button className="w-full py-4 mt-4" size="lg" type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Recovery Code'}
          </Button>
        </form>
      ) : (
        <form className="space-y-5" onSubmit={handleResetPassword}>
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Recovery Code</label>
            <div className="flex justify-between gap-2">
              {formData.otp.map((val, idx) => (
                <input
                  key={idx}
                  ref={el => inputRefs.current[idx] = el}
                  className="w-10 h-12 text-center text-xl font-bold bg-slate-900/50 border-2 border-slate-700 rounded-lg text-primary focus:outline-none focus:border-primary transition-all"
                  maxLength="1"
                  type="text"
                  value={val}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                  required
                />
              ))}
            </div>
          </div>
          <Input
            label="New Password"
            icon="lock"
            placeholder="••••••••"
            type="password"
            value={formData.newPassword}
            onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-success text-sm">{success}</p>}
          <Button className="w-full py-4 mt-4" size="lg" type="submit" disabled={loading}>
            {loading ? 'Resetting...' : 'Reset Password'}
          </Button>
        </form>
      )}
      
      <div className="mt-8 pt-6 border-t border-slate-800 text-center">
        <Link to="/login" className="text-primary font-bold hover:underline cursor-pointer">
          Back to Login
        </Link>
      </div>
    </Card>
  );
};

export default ForgotPasswordForm;
