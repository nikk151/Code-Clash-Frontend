import React from 'react';
import Card from '../ui/Card';

const LeaderboardStats = ({ userStats, currentElo }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      <Card className="flex items-center gap-4" glow glowColor="primary">
        <div className="size-12 rounded-lg bg-accent-emerald/20 flex items-center justify-center text-accent-emerald">
          <span className="material-symbols-outlined text-3xl">military_tech</span>
        </div>
        <div>
          <p className="text-slate-400 text-xs uppercase tracking-wider font-bold">Your Rank</p>
          <h3 className="text-2xl font-bold text-slate-100">
            {userStats?.rank ? `#${userStats.rank}` : "Unranked"}
          </h3>
        </div>
      </Card>
      <Card className="flex items-center gap-4">
        <div className="size-12 rounded-lg bg-indigo-500/20 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-3xl">bolt</span>
        </div>
        <div>
          <p className="text-slate-400 text-xs uppercase tracking-wider font-bold">Your ELO</p>
          <h3 className="text-2xl font-bold text-slate-100">
            {currentElo !== undefined ? currentElo.toLocaleString() : "..."}
          </h3>
        </div>
      </Card>
    </div>
  );
};

export default LeaderboardStats;
