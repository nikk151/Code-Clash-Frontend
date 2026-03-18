import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegistrationForm from '../components/auth/RegistrationForm';
import AuthBackground from '../components/auth/AuthBackground';

function RegisterPage() {

  
  const headerLeft = (
    <div className="flex items-center gap-2">
      <div className="size-8 bg-linear-to-br from-primary to-accent rounded-lg flex items-center justify-center">
        <span className="material-symbols-outlined text-white text-xl">terminal</span>
      </div>
      <h1 className="text-xl font-extrabold tracking-tight text-white uppercase">Code<span className="text-accent">Clash</span></h1>
    </div>
  );

  const headerRight = (
    <nav className="flex items-center gap-6">
      <button className="text-sm font-medium text-slate-400 hover:text-white transition-colors cursor-pointer">Documentation</button>
      <Link to="/" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Help</Link>
    </nav>
  );

  const footerLinks = [
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'System Status', href: '#' }
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <AuthBackground />
      <Header leftContent={headerLeft} rightContent={headerRight} className="border-b border-white/5 bg-background-dark/50 backdrop-blur-md" />
      
      <main className="flex-1 flex items-center justify-center p-6 relative z-10">
        <div className="w-full max-w-md">
          <RegistrationForm />
        </div>
      </main>
      
      <Footer 
        links={footerLinks} 
        copyrightText="© 2024 Code Clash Arena. All rights reserved."
        className="border-t border-white/5 text-slate-500" 
      />
    </div>
  );
}

export default RegisterPage;
