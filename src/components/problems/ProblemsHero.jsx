import React from 'react';

const ProblemsHero = () => {
  return (
    <div className="lg:col-span-2 flex flex-col justify-center">
      <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">Coding <span className="text-primary">Challenges</span></h1>
      <p className="text-slate-400 text-base md:text-lg max-w-xl">Master your craft with our curated selection of algorithmic puzzles and data structure challenges.</p>
      <div className="mt-6 md:mt-8 flex flex-wrap gap-3">
        <div className="glass-card w-full md:w-auto px-6 py-4 rounded-xl flex items-center gap-4 border-l-4 border-l-emerald-accent">
          <span className="material-symbols-outlined text-emerald-accent">bolt</span>
          <div>
            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Problem of the Day</p>
            <p className="text-white font-semibold">Binary Tree Zigzag Traversal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemsHero;
