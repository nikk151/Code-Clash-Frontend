import React from 'react';

const MatchmakingStatus = ({ playerAvatar, opponentAvatar, status, waitTime }) => {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="flex items-center justify-center gap-6">
        <div className="relative">
          <div className="size-16 rounded-full border-2 border-primary/50 overflow-hidden bg-slate-800">
            <img alt="User Avatar" className="w-full h-full object-cover" src={playerAvatar} />
          </div>
          <div className="absolute -bottom-1 -right-1 size-5 bg-emerald-500 rounded-full border-2 border-background-dark"></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-1 bg-primary rounded-full animate-pulse"></div>
          <span className="text-primary font-black italic">VS</span>
          <div className="w-8 h-1 bg-slate-700 rounded-full"></div>
        </div>
        <div className="relative">
          <div className="size-16 rounded-full border-2 border-slate-700 border-dashed overflow-hidden bg-slate-900 flex items-center justify-center group-hover:border-primary/50 transition-colors">
            {opponentAvatar ? (
              <img alt="Opponent Avatar" className="w-full h-full object-cover" src={opponentAvatar} />
            ) : (
              <span className="material-symbols-outlined text-slate-600 text-3xl">person_add</span>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 mt-2">
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-primary neon-glow pulse-slow"></div>
          <p className="text-slate-100 text-lg font-bold tracking-wide">{status}</p>
        </div>
        <p className="text-slate-500 text-xs animate-pulse font-medium">Please wait on this page for the match to start...</p>
      </div>
    </div>
  );
};

export default MatchmakingStatus;
