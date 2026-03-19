import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import Logo from '../components/ui/Logo';
import AuthBackground from '../components/auth/AuthBackground';

// AuthLayout wraps all authentication pages (Login, Register, Verify)
// It provides the shared background, header (with logo + help nav), and footer
// so that individual auth pages only need to render their unique form content.
//
// Uses React Router's <Outlet /> to render the matched child route's component.

const AUTH_FOOTER_LINKS = [
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'System Status', href: '#' },
];

const AuthLayout = () => {
  // Left side of header: just the logo (not clickable on auth pages, or link to landing)
  const headerLeft = <Logo to="/" />;

  // Right side of header: minimal nav for auth pages
  const headerRight = (
    <nav className="flex items-center gap-6">
      <button className="text-sm font-medium text-slate-400 hover:text-white transition-colors cursor-pointer">
        Documentation
      </button>
      <Link to="/" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
        Help
      </Link>
    </nav>
  );

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <AuthBackground />
      <Header
        leftContent={headerLeft}
        rightContent={headerRight}
        className="border-b border-white/5 bg-background-dark/50 backdrop-blur-md"
      />

      {/* Main content area — each auth page's content renders here via <Outlet /> */}
      <main className="flex-1 flex items-center justify-center p-6 relative z-10">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </main>

      <Footer
        links={AUTH_FOOTER_LINKS}
        copyrightText="© 2024 Code Clash Arena. All rights reserved."
        className="border-t border-white/5 text-slate-500"
      />
    </div>
  );
};

export default AuthLayout;