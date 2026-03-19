import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import Button from '../components/ui/Button';
import Logo from '../components/ui/Logo';
import useAuth from '../hooks/useAuth';

// MainLayout wraps the main app pages (Dashboard, Problems, Leaderboard)
// Now uses useAuth() for real user data and logout functionality.

const NAV_LINKS = [
  { label: 'Play', to: '/dashboard' },
  { label: 'Problems', to: '/problems' },
  { label: 'Leaderboard', to: '/leaderboard' },
];

const FOOTER_LINKS = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms of Service', href: '#terms' },
  { label: 'Support', href: '#support' },
];

const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // Helper: check if a nav link is the current page
  const isActive = (path) => location.pathname === path;

  // Left side: Logo that links back to landing page
  const headerLeft = <Logo to="/" variant="glow" />;

  // Handle logout — clear session and redirect to login
  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  // Right side: real username from auth context + working logout button
  const headerRight = (
    <div className="flex items-center gap-4">
      <div className="flex items-center px-4 py-2 rounded-lg bg-slate-800/50 border border-white/5">
        <span className="text-sm font-black text-white tracking-wide uppercase">
          {user?.username || 'Guest'}
        </span>
      </div>
      <Button variant="secondary" className="h-10 px-4" icon="logout" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );

  // Center navigation: highlights the active link using useLocation
  const navContent = (
    <nav className="hidden md:flex flex-1 justify-center gap-10">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={`text-sm font-semibold tracking-wide uppercase transition-colors ${
            isActive(link.to) ? 'text-primary' : 'text-slate-400 hover:text-white'
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  // Mobile menu navigation
  const mobileNavContent = (
    <>
      {NAV_LINKS.map((link) => (
        <Link
          key={link.to}
          className="text-2xl font-black text-white hover:text-primary transition-colors"
          to={link.to}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen overflow-x-hidden">
      <div className="relative flex h-auto min-h-screen w-full flex-col">
        <div className="layout-container flex h-full grow flex-col">
          <Header
            leftContent={headerLeft}
            rightContent={headerRight}
            mobileNavContent={mobileNavContent}
          >
            {navContent}
          </Header>

          {/* Each page's content renders here via <Outlet /> */}
          <main className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-20 py-10 space-y-8 relative z-10">
            <Outlet />
          </main>

          <Footer links={FOOTER_LINKS} copyrightText="© 2024 Code Clash Arena. All rights reserved." />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
