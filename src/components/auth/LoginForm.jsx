import React from 'react';
import Input from '../Input';
import SocialLoginButtons from './SocialLoginButtons';

import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="glass-card rounded-2xl p-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary via-accent to-primary"></div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
        <p className="text-slate-400 text-sm">Sign in to start your next challenge</p>
      </div>
      <form className="space-y-5">
        <Input 
          label="Email or Username" 
          icon="alternate_email" 
          placeholder="Enter your handle" 
          type="text" 
          className="bg-slate-900/50"
        />
        <div className="space-y-2">
          <div className="flex justify-between items-center px-1">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Password</label>
            <a className="text-xs font-semibold text-accent hover:underline" href="#">Forgot?</a>
          </div>
          <Input 
            icon="lock" 
            placeholder="••••••••" 
            type="password" 
            className="bg-slate-900/50"
          />
        </div>
        <button className="w-full py-4 rounded-xl text-white font-bold text-lg bg-linear-to-br from-primary to-accent hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:-translate-y-px transition-all shadow-[0_0_20px_rgba(67,70,239,0.3)] mt-4 cursor-pointer" type="submit">
          LOGIN TO ARENA
        </button>
      </form>
      
      <SocialLoginButtons />

      <div className="mt-8 text-center border-t border-white/5 pt-8">
        <p className="text-sm text-slate-500">
          New to the arena? 
          <Link 
            to="/register"
            className="text-primary font-bold hover:text-accent transition-colors ml-1 cursor-pointer"
          >
            Create an Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
