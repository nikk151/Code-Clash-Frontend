import React from 'react';

const Stats = () => {
  return (
    <section className="pb-20">
      <div className="flex flex-wrap gap-6">
        <div className="flex min-w-[200px] flex-1 flex-col gap-3 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 bg-linear-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-900/50">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider">Active Coders</p>
          <p className="text-slate-900 dark:text-white text-4xl font-black">50K<span className="text-accent">+</span></p>
          <div className="h-1 w-12 bg-accent rounded-full"></div>
        </div>
        <div className="flex min-w-[200px] flex-1 flex-col gap-3 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 bg-linear-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-900/50">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider">Matches Played</p>
          <p className="text-slate-900 dark:text-white text-4xl font-black">1.2M</p>
          <div className="h-1 w-12 bg-primary rounded-full"></div>
        </div>
        <div className="flex min-w-[200px] flex-1 flex-col gap-3 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 bg-linear-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-900/50">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider">Prize Pool</p>
          <p className="text-slate-900 dark:text-white text-4xl font-black">$25K<span className="text-accent">+</span></p>
          <div className="h-1 w-12 bg-accent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
