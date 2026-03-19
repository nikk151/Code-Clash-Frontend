import React from 'react';
import Card from '../ui/Card';

const LeaderboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <Card className="flex items-center gap-4" glow glowColor="primary">
        <div className="size-12 rounded-lg bg-accent-emerald/20 flex items-center justify-center text-accent-emerald">
          <span className="material-symbols-outlined text-3xl">military_tech</span>
        </div>
        <div>
          <p className="text-slate-400 text-xs uppercase tracking-wider font-bold">Your Rank</p>
          <h3 className="text-2xl font-bold text-slate-100">#42 <span className="text-accent-emerald text-sm font-normal ml-1">↑2</span></h3>
        </div>
      </Card>
      <Card className="flex items-center gap-4">
        <div className="size-12 rounded-lg bg-indigo-500/20 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-3xl">bolt</span>
        </div>
        <div>
          <p className="text-slate-400 text-xs uppercase tracking-wider font-bold">Your ELO</p>
          <h3 className="text-2xl font-bold text-slate-100">2,480</h3>
        </div>
      </Card>
      <Card className="flex items-center gap-4">
        <div className="size-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
          <span className="material-symbols-outlined text-3xl">stars</span>
        </div>
        <div>
          <p className="text-slate-400 text-xs uppercase tracking-wider font-bold">Division</p>
          <h3 className="text-2xl font-bold text-slate-100">Elite</h3>
        </div>
      </Card>
    </div>
  );
};

export default LeaderboardStats;
