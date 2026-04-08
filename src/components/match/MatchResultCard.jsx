import React from 'react';
import Button from '../ui/Button';

const MatchResultCard = ({ type = 'victory', playerName, oldRating, newRating, ratingChange, avatar, isCurrentUser = true }) => {
  const isVictory = type === 'victory';

  return (
    <div className="relative group">
      {isVictory && (
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-neon to-primary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
      )}
      <div className={`relative bg-slate-900/80 backdrop-blur-xl border ${isVictory ? 'border-emerald-neon/30' : 'border-slate-700/50'} rounded-2xl p-8 flex flex-col items-center text-center shadow-2xl overflow-hidden min-h-full`}>
        {isVictory && (
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <rect fill="#10b981" height="2" transform="rotate(45 10 10)" width="2" x="10" y="10"></rect>
              <circle cx="80" cy="20" fill="#4346ef" r="1"></circle>
              <rect fill="#10b981" height="3" transform="rotate(15 30 70)" width="1.5" x="30" y="70"></rect>
              <circle cx="60" cy="85" fill="#10b981" r="1.5"></circle>
              <rect fill="#4346ef" height="2" transform="rotate(120 90 50)" width="2" x="90" y="50"></rect>
            </svg>
          </div>
        )}
        <div className={`mb-6 ${isVictory ? 'bg-emerald-neon/10 ring-emerald-neon/20' : 'bg-slate-800 ring-slate-700/30'} p-5 rounded-full ring-4`}>
          <span className={`material-symbols-outlined text-6xl ${isVictory ? 'text-emerald-neon' : 'text-slate-500'}`} style={isVictory ? { fontVariationSettings: "'FILL' 1" } : {}}>
            {isVictory ? 'trophy' : 'sentiment_very_dissatisfied'}
          </span>
        </div>
        <h1 className={`text-4xl font-black italic tracking-tighter mb-2 uppercase ${isVictory ? 'text-white' : 'text-slate-400'}`}>
          {isVictory ? 'Victory!' : 'Defeat'}
        </h1>
        <p className={`${isVictory ? 'text-slate-400' : 'text-slate-500'} font-medium mb-6`}>
          {isVictory ? 'Match Concluded' : 'Better luck next time'}
        </p>
        <div className={`${isVictory ? 'bg-background-dark/50' : 'bg-background-dark/30'} border border-slate-800 rounded-xl p-6 w-full mb-8`}>
          <div className={`flex items-center justify-center gap-3 mb-4 ${!isVictory ? 'grayscale opacity-60' : ''}`}>
            <div className={`w-10 h-10 rounded-full bg-primary flex items-center justify-center overflow-hidden border-2 ${isVictory ? 'border-emerald-neon' : 'border-slate-600'}`}>
              <img alt="User avatar" src={avatar} />
            </div>
            <span className={`text-xl font-bold ${isVictory ? 'text-white' : 'text-slate-300'}`}>
              {isVictory ? 'Winner' : 'Player'}: <span className={isVictory ? 'text-emerald-neon' : 'text-slate-400'}>{playerName}</span>
            </span>
          </div>
          <div className="flex items-center justify-center gap-4 text-lg">
            <span className="text-slate-400 line-through">{oldRating}</span>
            <span className={`material-symbols-outlined ${isVictory ? 'text-emerald-neon' : 'text-defeat-red'}`}>arrow_forward</span>
            <span className={`${isVictory ? 'text-white' : 'text-slate-300'} font-black ${isVictory ? 'bg-emerald-neon/20' : 'bg-defeat-red/10'} px-3 py-1 rounded text-2xl tracking-tight`}>
              {newRating} <span className={`text-sm ml-1 ${isVictory ? 'text-emerald-neon' : 'text-defeat-red'}`}>{ratingChange}</span>
            </span>
          </div>
        </div>
        {isCurrentUser && (
          <div className="w-full space-y-3 mt-auto">
            <Button to="/dashboard" variant="accent" icon="dashboard" className="w-full py-4 uppercase tracking-widest text-sm">
              Return to Dashboard
            </Button>
            <Button to="/problems" variant="secondary" icon="refresh" className="w-full py-4 text-sm uppercase">
              Rematch
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchResultCard;
