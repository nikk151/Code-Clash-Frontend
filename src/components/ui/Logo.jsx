import React from 'react';
import { Link } from 'react-router-dom';

// Reusable Logo component used across all layouts
// "to" prop makes it a clickable link (used in MainLayout), omit for static display (AuthLayout)
// "variant" prop controls styling: 'default' for auth pages, 'glow' for main/landing pages

const Logo = ({ to = null, variant = 'default' }) => {
  const logoContent = (
    <div className="flex items-center gap-2">
      <div className={`size-8 rounded-lg flex items-center justify-center text-white ${
        variant === 'glow' 
          ? 'bg-primary shadow-[0_0_15px_rgba(67,70,239,0.5)]' 
          : 'bg-linear-to-br from-primary to-accent'
      }`}>
        <span className="material-symbols-outlined text-xl">terminal</span>
      </div>
      <h1 className="text-xl font-extrabold tracking-tight text-white uppercase">
        Code<span className="text-accent">Clash</span>
      </h1>
    </div>
  );

  // If "to" prop is provided, wrap in a Link for navigation
  if (to) {
    return (
      <Link to={to} className="flex items-center gap-3 group cursor-pointer hover:scale-105 transition-transform">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};

export default Logo;