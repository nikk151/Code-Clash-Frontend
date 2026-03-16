import React from 'react';

const LeaderboardControls = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4 mb-6">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight">Global Leaderboard</h1>
        <p className="text-slate-400 text-sm mt-1">Season 12: Cyber Nexus</p>
      </div>
      <div className="flex bg-slate-800/50 p-1 rounded-lg border border-slate-700">
        <button className="px-4 py-1.5 rounded-md text-sm font-semibold bg-primary text-white shadow-lg shadow-primary/20 cursor-pointer">Global</button>
        <button className="px-4 py-1.5 rounded-md text-sm font-semibold text-slate-400 hover:text-slate-200 cursor-pointer">Friends</button>
        <button className="px-4 py-1.5 rounded-md text-sm font-semibold text-slate-400 hover:text-slate-200 cursor-pointer">Region</button>
      </div>
    </div>
  );
};

export default LeaderboardControls;
