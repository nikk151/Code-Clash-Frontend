import React from 'react';
import DashboardStats from '../components/dashboard/DashboardStats';
import MatchCard from '../components/dashboard/MatchCard';
import LiveChallenges from '../components/dashboard/LiveChallenges';
import useAuth from '../hooks/useAuth';

// Dashboard — only renders the UNIQUE content for the dashboard page.
// Uses useAuth() to pass real user stats to DashboardStats.

function Dashboard() {
  const { user } = useAuth();
  const [difficulty, setDifficulty] = React.useState('easy');

  const difficulties = [
    { id: 'easy', label: 'Easy', desc: 'Fundamentals', icon: 'child_care', color: 'emerald' },
    { id: 'medium', label: 'Medium', desc: 'Data Structures', icon: 'psychology', color: 'amber' },
    { id: 'hard', label: 'Hard', desc: 'Algorithms', icon: 'bolt', color: 'rose' }
  ];

  return (
    <>
      <DashboardStats
        eloRating={user?.eloRating || 0}
        wins={user?.wins || 0}
        losses={user?.losses || 0}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <MatchCard
          title="Create Match"
          subtitle="Configure your session and invite rivals"
          icon="add_circle"
          buttonLabel="Create Room"
          buttonTo="/match-waiting"
          effectClass="ring-pulse"
        >
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">Select Difficulty</span>
              <div className="grid grid-cols-3 gap-3">
                {difficulties.map((diff) => (
                  <button
                    key={diff.id}
                    onClick={() => setDifficulty(diff.id)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all duration-300 group/item cursor-pointer ${
                      difficulty === diff.id
                        ? `bg-${diff.color}-500/20 border-${diff.color}-500/50 shadow-[0_0_15px_rgba(0,0,0,0.2)]`
                        : 'bg-slate-800/40 border-slate-700/50 hover:border-slate-600'
                    }`}
                  >
                    <span className={`material-symbols-outlined text-xl ${
                      difficulty === diff.id ? `text-${diff.color}-400` : 'text-slate-500 group-hover/item:text-slate-300'
                    }`}>
                      {diff.icon}
                    </span>
                    <div className="text-center">
                      <p className={`text-[10px] font-bold uppercase tracking-tight ${
                        difficulty === diff.id ? `text-${diff.color}-400` : 'text-slate-400'
                      }`}>{diff.label}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </MatchCard>

        <MatchCard
          title="Join Match"
          subtitle="Enter a secret code to enter the arena"
          icon="swords"
          iconGlowClass="drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]"
          iconColorOverride="!text-emerald-500/40"
          headerGradientClass="from-emerald-500/20"
          effectClass="scan-effect"
          buttonLabel="Join Room"
          buttonTo="/arena"
          buttonVariant="secondary"
        >
          <div className="space-y-4">
            <label className="block">
              <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest block mb-2">Room Code</span>
              <div className="relative">
                <input className="w-full rounded-lg bg-slate-100 dark:bg-primary/10 border-slate-200 dark:border-primary/20 text-slate-900 dark:text-white h-14 px-4 text-center text-xl font-mono tracking-[0.5em] uppercase placeholder:tracking-normal placeholder:font-sans placeholder:text-slate-500 focus:ring-primary focus:border-primary transition-all outline-none" maxLength={6} placeholder="E.G. XJ92KF" type="text" />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary">
                  <span className="material-symbols-outlined">key</span>
                </div>
              </div>
            </label>
          </div>
        </MatchCard>
      </div>

      <LiveChallenges />
    </>
  );
}

export default Dashboard;
