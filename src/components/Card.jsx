import React from 'react';

const Card = ({ children, className = '', glow = false, glowColor = 'primary' }) => {
  const glowStyles = glow ? {
    primary: 'shadow-2xl shadow-primary/20',
    accent: 'shadow-2xl shadow-accent-emerald/20'
  }[glowColor] : '';

  return (
    <div className={`glass p-8 md:p-10 rounded-xl relative overflow-hidden ${glowStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
