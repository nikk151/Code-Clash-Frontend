import React from 'react';

const LiveChallenges = () => {
  return (
    <div className="pt-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="size-2 bg-primary rounded-full animate-pulse"></span>
          Live Challenges
        </h3>
        <a className="text-primary text-sm font-semibold hover:underline" href="#all-challenges">View All</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="glass-card p-4 rounded-xl flex items-center justify-between border-l-2 border-l-primary/40 bg-slate-900/40 border border-slate-700/50">
          <div className="flex items-center gap-4">
            <div className="size-10 bg-slate-800 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-sm">code</span>
            </div>
            <div>
              <p className="font-bold text-sm">Binary Search Duel</p>
              <p className="text-xs text-slate-400">Medium • 2/2 Players</p>
            </div>
          </div>
          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded font-bold uppercase">In Progress</span>
        </div>
        <div className="glass-card p-4 rounded-xl flex items-center justify-between border-l-2 border-l-slate-600 bg-slate-900/40 border border-slate-700/50">
          <div className="flex items-center gap-4">
            <div className="size-10 bg-slate-800 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-sm">psychology</span>
            </div>
            <div>
              <p className="font-bold text-sm">Logic Blitz</p>
              <p className="text-xs text-slate-400">Easy • 1/2 Players</p>
            </div>
          </div>
          <span className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded font-bold uppercase">Waiting</span>
        </div>
      </div>
    </div>
  );
};

export default LiveChallenges;
