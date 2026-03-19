import React from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';

const VerificationForm = () => {
  return (
    <Card glow glowColor="accent">
      <div className="mb-8">
        <div className="w-12 h-12 bg-accent-emerald/20 text-accent-emerald rounded-lg flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-3xl">verified_user</span>
        </div>
        <h1 className="text-3xl font-black mb-2">Verify Account</h1>
        <p className="text-slate-400">We've sent a 6-digit code to <span className="text-slate-200 font-medium">dev***@codeclash.com</span></p>
      </div>
      <div className="space-y-8">
        <div className="flex justify-between gap-2">
          {[4, 2, '', '', '', ''].map((val, idx) => (
            <input
              key={idx}
              className="w-12 h-16 md:w-16 md:h-20 text-center text-2xl font-bold bg-slate-900/50 border-2 border-slate-700 rounded-xl text-accent-emerald emerald-glow focus:outline-none transition-all"
              maxLength="1"
              type="text"
              defaultValue={val}
            />
          ))}
        </div>
        <Button className="w-full py-4" variant="accent" size="lg">
          Verify & Continue
        </Button>
        <div className="text-center space-y-4">
          <p className="text-sm text-slate-400">Didn't receive a code?</p>
          <button className="text-accent-emerald font-bold text-sm flex items-center justify-center gap-2 mx-auto hover:underline cursor-pointer">
            <span className="material-symbols-outlined text-base">refresh</span>
            Resend Code (0:59)
          </button>
        </div>
      </div>
    </Card>
  );
};

export default VerificationForm;
