import React from 'react';
import Button from '../ui/Button';

const LobbyCard = ({ roomCode }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(roomCode);
  };

  return (
    <div className="w-full max-w-lg glass-panel rounded-3xl p-8 md:p-12 relative shadow-2xl pulse-slow">
      <div className="absolute -top-1 -left-1 w-20 h-20 border-t-2 border-l-2 border-primary rounded-tl-3xl"></div>
      <div className="absolute -bottom-1 -right-1 w-20 h-20 border-b-2 border-r-2 border-primary rounded-br-3xl"></div>
      <div className="flex flex-col items-center gap-8">
        <div className="space-y-2 text-center">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Lobby Identity</p>
          <div className="flex items-center gap-4 bg-slate-900/50 p-6 rounded-2xl border border-slate-700/50 group">
            <span className="text-white text-5xl md:text-6xl font-mono font-black tracking-widest text-primary">{roomCode}</span>
            <Button
              onClick={handleCopy}
              className="size-14 rounded-xl shadow-lg shadow-primary/20"
              icon="content_copy"
            />
          </div>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
        {/* Placeholder for MatchmakingStatus nested if needed, or children */}
      </div>
    </div>
  );
};

export default LobbyCard;
