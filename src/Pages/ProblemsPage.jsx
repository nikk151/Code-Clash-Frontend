import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import ProblemsHero from '../components/problems/ProblemsHero';
import ProblemCategories from '../components/problems/ProblemCategories';
import ProblemFilters from '../components/problems/ProblemFilters';
import ProblemTable from '../components/problems/ProblemTable';
import { Link } from 'react-router-dom';

function ProblemsPage() {
  
  const [problems, setProblems] = useState(null)

  useEffect(()=>{
    const problemData = async ()=>{
      const response = await fetch("http://localhost:8000/api/problems/get-all-problems")
      const data = await response.json()
      setProblems(data.problems)
    }
    problemData()
  },[])
  
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

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <Header
          leftContent={headerLeft}
          rightContent={headerRight}
          className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md px-6 lg:px-20 py-4"
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
            <Link className="text-primary text-sm font-semibold tracking-wide uppercase" to="/problems">Problems</Link>
            <Link className="text-slate-400 hover:text-white transition-colors text-sm font-semibold tracking-wide uppercase" to="/leaderboard">Leaderboard</Link>
          </nav>
        </Header>

        <main className="max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-20 py-6 md:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <ProblemsHero />
            <ProblemCategories />
          </div>

          <ProblemFilters />
          <ProblemTable problems={problems} />

          {/* Pagination */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-500 text-sm">Showing <span className="text-white font-bold">1-20</span> of <span className="text-white font-bold">2,482</span></p>
            <div className="flex gap-1.5 md:gap-2">
              <button className="size-9 md:size-10 flex items-center justify-center rounded-lg glass-card text-slate-400 hover:text-white transition-all cursor-pointer">
                <span className="material-symbols-outlined text-sm md:text-base">chevron_left</span>
              </button>
              <button className="size-9 md:size-10 flex items-center justify-center rounded-lg bg-primary text-white text-sm md:text-base font-bold cursor-pointer">1</button>
              <button className="size-9 md:size-10 flex items-center justify-center rounded-lg glass-card text-slate-400 hover:text-white transition-all cursor-pointer text-sm md:text-base">2</button>
              <button className="size-9 md:size-10 flex items-center justify-center rounded-lg glass-card text-slate-400 hover:text-white transition-all cursor-pointer text-sm md:text-base">3</button>
              <button className="size-9 md:size-10 flex items-center justify-center rounded-lg glass-card text-slate-400 hover:text-white transition-all cursor-pointer">
                <span className="material-symbols-outlined text-sm md:text-base">chevron_right</span>
              </button>
            </div>
          </div>
        </main>

        <Footer
          className="mt-20 border-t border-white/5 py-10 px-6 lg:px-20 text-center"
          copyrightText="© 2024 Code Clash. Built for masters."
        />
      </div>
    </div>
  );
}

export default ProblemsPage;
