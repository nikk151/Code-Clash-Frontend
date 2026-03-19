import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import Button from '../components/ui/Button';
import Logo from '../components/ui/Logo';
import BackgroundDecoration from '../components/landing/BackgroundDecoration';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Stats from '../components/landing/Stats';
import CTA from '../components/landing/CTA';
import useServerHealth from '../hooks/useServerHealth';

function LandingPage() {
  // Data fetching handled by custom hook — clean!
  const { status: serverStatus } = useServerHealth();

  const landingHeaderRight = (
    <div className="flex flex-1 justify-end gap-8 items-center">
      <nav className="hidden md:flex items-center gap-10">
        <Link className="text-slate-400 hover:text-white transition-colors text-sm font-semibold tracking-wide uppercase" to="/dashboard">Play</Link>
        <Link className="text-slate-400 hover:text-white transition-colors text-sm font-semibold tracking-wide uppercase" to="/problems">Problems</Link>
        <Link className="text-slate-400 hover:text-white transition-colors text-sm font-semibold tracking-wide uppercase" to="/leaderboard">Leaderboard</Link>
        <a className="text-slate-400 hover:text-white transition-colors text-sm font-semibold tracking-wide uppercase" href="#features">Features</a>
      </nav>
      <div className="flex gap-3">
        <Button to="/login" variant="secondary" className="h-10 px-5">Login</Button>
        <Button to="/register" variant="accent" className="h-10 px-5">Register</Button>
      </div>
    </div>
  );

  const footerLinks = [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'API', href: '#' },
    { label: 'Contact', href: '#' }
  ];

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-accent selection:text-white">
      <div className="relative min-h-screen overflow-x-hidden">
        <BackgroundDecoration />

        <div className="layout-container relative z-10 flex h-full grow flex-col">
          <Header
            leftContent={<Logo to="/" variant="glow" />}
            rightContent={landingHeaderRight}
            className="md:px-20 lg:px-40"
            mobileNavContent={
              <>
                <a className="text-2xl font-black text-white hover:text-primary transition-colors" href="#features">Features</a>
                <Link className="text-2xl font-black text-white hover:text-primary transition-colors" to="/leaderboard">Leaderboard</Link>
                <Link className="text-2xl font-black text-white hover:text-primary transition-colors" to="/problems">Problems</Link>
                <Link className="text-2xl font-black text-white hover:text-primary transition-colors" to="/dashboard">Dashboard</Link>
              </>
            }
          />

          <main className="flex-1 px-6 md:px-20 lg:px-40">
            <Hero />
            <Features />
            <Stats />
            <CTA />
          </main>

          <Footer links={footerLinks} copyrightText="© 2024 Code Clash Arena. Built for champions." />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
