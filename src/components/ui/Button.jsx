import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon,
  to,
  onClick,
  ...props 
}) => {
  const navigate = useNavigate();
  const baseStyles = 'flex items-center justify-center gap-2 font-bold transition-all active:scale-95 cursor-pointer disabled:opacity-50 disabled:pointer-events-none';
  
  const handleClick = (e) => {
    if (to) {
      navigate(to);
    }
    if (onClick) {
      onClick(e);
    }
  };
  const variants = {
    primary: 'bg-primary text-white hover:opacity-90 shadow-lg shadow-primary/20 hover:shadow-primary/40',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700',
    accent: 'bg-accent-emerald text-slate-900 hover:bg-emerald-500 shadow-lg shadow-accent-emerald/20 hover:shadow-accent-emerald/40',
    ghost: 'text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-lg'
  };

  const sizes = {
    sm: 'h-8 px-3 text-xs rounded-lg',
    md: 'h-10 px-4 text-sm rounded-lg',
    lg: 'h-12 px-6 text-sm rounded-xl',
    xl: 'h-14 px-8 text-base rounded-xl'
  };

  const variantStyles = variants[variant] || variants.primary;
  const sizeStyles = variant === 'ghost' ? '' : sizes[size] || sizes.md;

  return (
    <button 
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {icon && <span className="material-symbols-outlined text-lg">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
