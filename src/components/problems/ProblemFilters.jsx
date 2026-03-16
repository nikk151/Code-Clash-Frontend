import React from 'react';

const ProblemFilters = () => {
  return (
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
      <div className="relative flex-1">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">search</span>
        <input 
          className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 md:py-4 pl-12 pr-4 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-sm md:text-base" 
          placeholder="Search problems..." 
          type="text"
        />
      </div>
      <div className="grid grid-cols-4 lg:flex gap-2 p-1 bg-white/5 border border-white/10 rounded-xl">
        <button className="px-3 md:px-6 py-2 rounded-lg bg-primary text-white text-[10px] md:text-sm font-bold shadow-lg shadow-primary/20 cursor-pointer">All</button>
        <button className="px-3 md:px-6 py-2 rounded-lg text-slate-400 hover:text-white text-[10px] md:text-sm font-bold transition-all cursor-pointer">Easy</button>
        <button className="px-3 md:px-6 py-2 rounded-lg text-slate-400 hover:text-white text-[10px] md:text-sm font-bold transition-all cursor-pointer">Medium</button>
        <button className="px-3 md:px-6 py-2 rounded-lg text-slate-400 hover:text-white text-[10px] md:text-sm font-bold transition-all cursor-pointer">Hard</button>
      </div>
    </div>
  );
};

export default ProblemFilters;
