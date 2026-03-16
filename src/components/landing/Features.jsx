import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-col gap-4 mb-12">
        <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black tracking-tight">
          Engineered for <span className="text-primary">Extreme</span> Competition
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
          Our platform is built by competitive programmers for the next generation of coding athletes.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 p-8 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-white dark:hover:bg-slate-900/60">
          <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
            <span className="material-symbols-outlined text-3xl">swords</span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-slate-900 dark:text-white text-xl font-bold">Live Matchmaking</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Find opponents of your skill level in seconds with our Elo-based matchmaking system.
            </p>
          </div>
        </div>
        <div className="group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 p-8 backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-white dark:hover:bg-slate-900/60">
          <div className="flex size-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
            <span className="material-symbols-outlined text-3xl">trophy</span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-slate-900 dark:text-white text-xl font-bold">Global Leaderboards</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Climb from Bronze to Grandmaster. Compete in weekly tournaments for exclusive rewards.
            </p>
          </div>
        </div>
        <div className="group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 p-8 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-white dark:hover:bg-slate-900/60">
          <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
            <span className="material-symbols-outlined text-3xl">data_object</span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-slate-900 dark:text-white text-xl font-bold">Instant Feedback</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Real-time test case validation and performance metrics as you type your solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
