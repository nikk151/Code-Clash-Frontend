import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import LeaderboardStats from '../components/leaderboard/LeaderboardStats';
import LeaderboardControls from '../components/leaderboard/LeaderboardControls';
import LeaderboardTable from '../components/leaderboard/LeaderboardTable';

function Leaderboard() {
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
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Community Guidelines', href: '#guidelines' }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden">
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
          <nav className="hidden md:flex items-center gap-10">
            <Link className="text-slate-400 hover:text-white transition-colors text-sm font-semibold tracking-wide uppercase" to="/dashboard">Play</Link>
            <Link className="text-slate-400 hover:text-white transition-colors text-sm font-semibold tracking-wide uppercase" to="/problems">Problems</Link>
            <Link className="text-primary text-sm font-semibold tracking-wide uppercase" to="/leaderboard">Leaderboard</Link>
          </nav>
        </Header>
        
        <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-8 relative z-10">
          <LeaderboardStats />
          <LeaderboardControls />
          <LeaderboardTable />
        </main>
        
        <Footer links={footerLinks} />
      </div>
    </div>
  );
}

export default Leaderboard;
