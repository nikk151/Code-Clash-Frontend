import React from 'react';
import Button from '../ui/Button';

const MatchCard = ({
  title,
  subtitle,
  icon,
  iconColorClass = 'text-primary/30',
  iconGlowClass = 'drop-shadow-[0_0_15px_rgba(67,70,239,0.5)]',
  iconColorOverride = '!text-primary/60',
  headerGradientClass = 'from-indigo-500/20',
  effectClass = '',
  buttonLabel,
  buttonTo,
  buttonVariant = 'primary',
  children
}) => {
  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:border-primary/40 transition-all duration-300 bg-slate-900/40 border border-slate-700/50">
      <div className={`h-48 relative overflow-hidden bg-primary/5 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] ${headerGradientClass} via-transparent to-transparent`}>
        <div className="absolute inset-0 bg-linear-to-t from-background-dark/80 to-transparent z-10"></div>
        <div className={`absolute inset-0 flex items-center justify-center ${effectClass}`}>
          <span className={`material-symbols-outlined text-8xl ${iconColorClass} group-hover:scale-110 transition-transform duration-500 ${iconGlowClass} ${iconColorOverride}`}>
            {icon}
          </span>
        </div>
      </div>
      <div className="p-8 flex flex-col gap-6">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
          <p className="text-slate-500 dark:text-slate-400 mt-1">{subtitle}</p>
        </div>

        {children}

        <Button
          variant={buttonVariant}
          icon={buttonVariant === 'primary' ? 'arrow_forward' : 'login'}
          to={buttonTo}
          className={`w-full py-4 group ${buttonVariant === 'primary' ? 'shadow-lg shadow-primary/30' : ''}`}
        >
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
};

export default MatchCard;
