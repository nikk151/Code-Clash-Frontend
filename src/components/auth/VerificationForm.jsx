import React, { useState, useEffect, useRef } from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { sendOTP } from '../../api/authApi';

const VerificationForm = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [timeLeft, setTimeLeft] = useState(59);
  
  const navigate = useNavigate();
  const location = useLocation();
  const { register } = useAuth();
  const inputRefs = useRef([]);
  
  const formData = location.state?.formData;
  const email = formData?.email;

  useEffect(() => {
    if (!formData) {
      navigate('/register');
    }
  }, [formData, navigate]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value !== '' && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Auto-focus previous input on backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const verifyAndRegister = async () => {
    const otpString = otp.join('');
    if (otpString.length !== 6) {
      setError('Please enter all 6 digits');
      return;
    }

    try {
      setLoading(true);
      setError('');
      await register({ ...formData, otp: otpString });
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Verification failed');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (timeLeft > 0) return;
    try {
      setTimeLeft(59);
      setError('');
      await sendOTP({ email });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to resend code');
    }
  };

  if (!formData) return null;

  return (
    <Card glow glowColor="accent">
      <div className="mb-8">
        <div className="w-12 h-12 bg-accent-emerald/20 text-accent-emerald rounded-lg flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-3xl">verified_user</span>
        </div>
        <h1 className="text-3xl font-black mb-2">Verify Account</h1>
        <p className="text-slate-400">We've sent a 6-digit code to <span className="text-slate-200 font-medium">{email}</span></p>
      </div>
      <div className="space-y-8">
        <div className="flex justify-between gap-2">
          {otp.map((val, idx) => (
            <input
              key={idx}
              ref={el => inputRefs.current[idx] = el}
              className="w-12 h-16 md:w-16 md:h-20 text-center text-2xl font-bold bg-slate-900/50 border-2 border-slate-700 rounded-xl text-accent-emerald emerald-glow focus:outline-none focus:border-accent-emerald transition-all"
              maxLength="1"
              type="text"
              value={val}
              onChange={(e) => handleChange(idx, e.target.value)}
              onKeyDown={(e) => handleKeyDown(idx, e)}
            />
          ))}
        </div>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <Button 
          className="w-full py-4" 
          variant="accent" 
          size="lg"
          onClick={verifyAndRegister}
          disabled={loading}
        >
          {loading ? 'Verifying...' : 'Verify & Continue'}
        </Button>
        <div className="text-center space-y-4">
          <p className="text-sm text-slate-400">Didn't receive a code?</p>
          <button 
            onClick={handleResend}
            disabled={timeLeft > 0}
            className={`font-bold text-sm flex items-center justify-center gap-2 mx-auto transition-colors ${
              timeLeft > 0 ? 'text-slate-500 cursor-not-allowed' : 'text-accent-emerald hover:underline cursor-pointer'
            }`}
          >
            <span className="material-symbols-outlined text-base">refresh</span>
            Resend Code {timeLeft > 0 && `(0:${timeLeft.toString().padStart(2, '0')})`}
          </button>
        </div>
      </div>
    </Card>
  );
};

export default VerificationForm;
