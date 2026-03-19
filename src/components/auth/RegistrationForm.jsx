import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      // useAuth().register() calls authApi AND stores user in context
      await register(formData);
      navigate('/dashboard');
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError('Network error — is the backend running?');
      }
      console.log(error);
    }
  }
  return (
    <Card glow glowColor="primary">
      <div className="mb-8">
        <h1 className="text-3xl font-black mb-2">Join the Clash</h1>
        <p className="text-slate-400">Create your account to start competing</p>
      </div>
      <form className="space-y-5">
        <Input
          label="Username"
          icon="person"
          placeholder="coder_pro"
          type="text"
          value={formData.username}
          onChange={(e) => { setFormData({ ...formData, username: e.target.value }) }}
        />
        <Input
          label="Email Address"
          icon="mail"
          placeholder="name@company.com"
          type="email"
          value={formData.email}
          onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }}
        />
        <Input
          label="Password"
          icon="lock"
          placeholder="••••••••"
          type="password"
          value={formData.password}
          onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }}
        />
        {error && <p className="text-red-500">{error}</p>}
        <Button className="w-full py-4 mt-4" size="lg" onClick={handleSubmit}>
          Create Account
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

      {/* Alternate Flow Hint */}
      <div className="mt-8 pt-6 border-t border-slate-800 text-center">
        <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-4">Or use another method</p>
        <div className="flex justify-center gap-4">
          <button className="p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
            <img alt="Google" className="w-6 h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoYg6IjHJIyumjgx1rex4crtdUJumpTMW9Ne_dblQ7Ur2AXpVOXfTTkHY6l9exzRS6jgiW53S6W7zX25GtOgt_6oIyxB6KsxIqFHnpFqSZtmmoom1fNA0HAfbHh2580GzRr-8dgH5CKk89ajt2-YM08QKiYwYyp393O-dgqVKlBw46PaLjYk2eDXMNFHuvWB69M-ginOeEWkO6tQzSB36ooYQgBVEUnPAY-LAIlVyUpa4kPuhCGAqTckA5VKSkrVfbdZGmsTtHtjI" />
          </button>
          <button className="p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
            <img alt="Github" className="w-6 h-6 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_eBy5MlecsRHXH6Lezlsi2JQk2H19Ukq0NlAbb5Pe8x6BtNYqFoBLK7SVo2tm9J74tJWNQVkqqr2l6Z1MPGUt1kz1nUE9erSM8_6_0oK0NoH2Wp0ZDmrJGKixiWsdvgh6XktC3t-ULfXJe40ymrOTv97FfN7kt9ALvvjTGv5bK1PRLVt9uxpOWgyd-MfHMLGzJUedvKODoR4K1wytc_w1kuo9blZxXI166TM7h2lnju8mIywB6URP9-Tbh-egkhx8LHraqX7RanQ" />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default RegistrationForm;
