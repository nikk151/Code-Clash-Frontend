import React from 'react';

const Input = ({ 
  label, 
  icon, 
  error, 
  className = '', 
  wrapperClassName = '',
  ...props 
}) => {
  return (
    <div className={`flex flex-col gap-2 ${wrapperClassName}`}>
      {label && (
        <label className="text-sm font-semibold text-slate-300 ml-1">
          {label}
        </label>
      )}
      <div className="relative group">
        {icon && (
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">
            {icon}
          </span>
        )}
        <input 
          className={`w-full bg-slate-900/50 border border-slate-700 rounded-lg py-3.5 ${icon ? 'pl-12' : 'pl-4'} pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-600 ${error ? 'border-defeat-red focus:ring-defeat-red/50' : ''} ${className}`}
          {...props}
        />
      </div>
      {error && <span className="text-xs text-defeat-red ml-1">{error}</span>}
    </div>
  );
};

export default Input;
