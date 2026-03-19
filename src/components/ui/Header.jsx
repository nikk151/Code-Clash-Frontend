import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ children, leftContent, rightContent, mobileNavContent }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-6 py-3 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md shrink-0 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          {leftContent}
        </div>

        {/* Center content (navigation) - Hidden on mobile */}
        <div className="hidden md:flex flex-1 justify-center">
          {children}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            {rightContent}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-400 hover:text-white transition-colors cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-60 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background-dark/80 backdrop-blur-lg animate-in fade-in duration-300"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Menu Card */}
          <div className="absolute right-6 top-20 left-6 glass-card rounded-2xl p-8 border border-white/10 shadow-2xl animate-in slide-in-from-top-4 duration-300">
            {/* Close button in mobile menu */}
            <button 
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            <div className="flex flex-col gap-6" onClick={() => setIsMenuOpen(false)}>
              {mobileNavContent ? mobileNavContent : (
                <div className="text-slate-500 text-center py-4">No navigation links</div>
              )}
              <div className="pt-6 mt-6 border-t border-white/5 flex flex-col gap-4">
                {rightContent}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
