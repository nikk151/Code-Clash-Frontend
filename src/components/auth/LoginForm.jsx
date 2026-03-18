import React, { useState } from 'react';
import Input from '../Input';
import SocialLoginButtons from './SocialLoginButtons';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  async function handleSubmit(e){
    try {
      e.preventDefault()
      const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)

      })
      const data = await response.json()
      if (!response.ok){
        setError(data.message)
      }else{
        alert('User logged in successfully')
        navigate('/dashboard')
      }
      console.log(data)
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="glass-card rounded-2xl p-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary via-accent to-primary"></div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
        <p className="text-slate-400 text-sm">Sign in to start your next challenge</p>
      </div>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <Input 
          label="Email" 
          icon="alternate_email" 
          placeholder="Enter your email" 
          type="email" 
          className="bg-slate-900/50"
          value = {formData.email}
          onChange={(e)=>{setFormData({...formData, email: e.target.value})}}
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
            value = {formData.password}
            onChange={(e)=>{setFormData({...formData, password: e.target.value})}}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
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
