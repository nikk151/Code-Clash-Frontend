import React from 'react';

const AuthStats = () => {
  return (
    <div className="mt-8 flex justify-center gap-8">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-black text-white/20">10k+</span>
        <span className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">Active Coders</span>
      </div>
      <div className="w-px h-8 bg-white/5 self-center"></div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-black text-white/20">$50k</span>
        <span className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">Monthly Prizes</span>
      </div>
      <div className="w-px h-8 bg-white/5 self-center"></div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-black text-white/20">24/7</span>
        <span className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">Live Battles</span>
      </div>
    </div>
  );
};

export default AuthStats;
