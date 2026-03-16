import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import DashboardStats from '../components/dashboard/DashboardStats';
import MatchCard from '../components/dashboard/MatchCard';
import LiveChallenges from '../components/dashboard/LiveChallenges';

function Dashboard() {
  const [difficulty, setDifficulty] = React.useState('easy');

  const difficulties = [
    { id: 'easy', label: 'Easy', desc: 'Fundamentals', icon: 'child_care', color: 'emerald' },
    { id: 'medium', label: 'Medium', desc: 'Data Structures', icon: 'psychology', color: 'amber' },
    { id: 'hard', label: 'Hard', desc: 'Algorithms', icon: 'bolt', color: 'rose' }
  ];

  const headerLeft = (
    <Link to="/" className="flex items-center gap-3 group cursor-pointer">
      <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(67,70,239,0.5)] group-hover:scale-105 transition-transform">
        <span className="material-symbols-outlined">terminal</span>
      </div>
      <h2 className="text-white text-xl font-black tracking-tighter uppercase">Code Clash</h2>
    </Link>
  );

  const headerRight = (
    <div className="flex items-center gap-4">
      <div className="flex items-center px-4 py-2 rounded-lg bg-slate-800/50 border border-white/5">
        <span className="text-sm font-black text-white tracking-wide uppercase">current_user_01</span>
      </div>
      <Link to="/login">
        <Button variant="secondary" className="h-10 px-4" icon="logout">Logout</Button>
      </Link>
    </div>
  );

  const footerLinks = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Support', href: '#support' }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen gaming-gradient overflow-x-hidden">
      <div className="relative flex h-auto min-h-screen w-full flex-col">
        <div className="layout-container flex h-full grow flex-col">
          <Header 
            leftContent={headerLeft} 
            rightContent={headerRight}
            mobileNavContent={
              <>
                <Link className="text-2xl font-black text-white hover:text-primary transition-colors" to="/dashboard">Play</Link>
                <Link className="text-2xl font-black text-white hover:text-primary transition-colors" to="/problems">Problems</Link>
                <Link className="text-2xl font-black text-white hover:text-primary transition-colors" to="/leaderboard">Leaderboard</Link>
              </>
            }
          >
            <nav className="hidden md:flex flex-1 justify-center gap-10">
              <Link className="text-primary text-sm font-semibold tracking-wide uppercase" to="/dashboard">Play</Link>
              <Link className="text-slate-400 hover:text-white transition-colors text-sm font-semibold tracking-wide uppercase" to="/problems">Problems</Link>
              <Link className="text-slate-400 hover:text-white transition-colors text-sm font-semibold tracking-wide uppercase" to="/leaderboard">Leaderboard</Link>
            </nav>
          </Header>

          <main className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-20 py-10 space-y-8 relative z-10">
            <DashboardStats />

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
          </main>

          <Footer links={footerLinks} copyrightText="© 2024 Code Clash Arena. All rights reserved." />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
