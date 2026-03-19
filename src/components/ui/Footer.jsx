import React from 'react';

const Footer = ({ children, copyrightText = '© 2024 Code Clash. Built for the competitive soul.', links = [] }) => {
  return (
    <footer className="px-6 md:px-20 py-8 border-t border-slate-800 bg-background-dark/80 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm">{copyrightText}</p>
        <div className="flex gap-6 text-sm font-medium text-slate-400">
          {links.map((link, index) => (
            <a key={index} className="hover:text-primary transition-colors" href={link.href}>
              {link.label}
            </a>
          ))}
          {children}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
