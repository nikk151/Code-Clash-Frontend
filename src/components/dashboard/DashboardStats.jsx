import React from 'react';
import Card from '../ui/Card';

// DashboardStats now receives real data via props from the parent page.
// The parent (Dashboard) gets user data from useAuth().

const DashboardStats = ({ eloRating = 0, wins = 0, losses = 0 }) => {
  // Calculate ELO bar fill (max ~3000 for visual purposes)
  const eloPercent = Math.min((eloRating / 3000) * 100, 100);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <Card className="flex flex-col gap-2 p-6 shadow-xl" glow glowColor="primary">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-yellow-500">emoji_events</span>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">ELO Rating</p>
        </div>
        <p className="text-slate-900 dark:text-white text-3xl font-bold">{eloRating}</p>
        <div className="h-1 w-full bg-slate-200 dark:bg-slate-800 rounded-full mt-2">
          <div className="h-1 bg-yellow-500 rounded-full" style={{ width: `${eloPercent}%` }}></div>
        </div>
      </Card>
      <Card className="flex flex-col gap-2 p-6 shadow-xl border-l-4 border-l-emerald-500">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-emerald-500">swords</span>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Total Wins</p>
        </div>
        <p className="text-slate-900 dark:text-white text-3xl font-bold">{wins}</p>
      </Card>
      <Card className="flex flex-col gap-2 p-6 shadow-xl border-l-4 border-l-rose-500">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-rose-500">skillet</span>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Losses</p>
        </div>
        <p className="text-slate-900 dark:text-white text-3xl font-bold">{losses}</p>
      </Card>
    </div>
  );
};

export default DashboardStats;
