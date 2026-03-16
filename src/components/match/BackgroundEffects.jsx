import React from 'react';

const BackgroundEffects = ({ children }) => {
  return (
    <>
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background-dark to-primary/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-neon/10 rounded-full blur-[120px]"></div>
        
        {/* Mock UI in background to show through glass */}
        <div className="max-w-6xl mx-auto p-8 opacity-20 grayscale pointer-events-none">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary rounded-lg"></div>
              <div className="h-6 w-32 bg-slate-700 rounded"></div>
            </div>
            <div className="flex gap-4">
              <div className="h-10 w-24 bg-slate-700 rounded-lg"></div>
              <div className="h-10 w-24 bg-slate-700 rounded-lg"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="h-[500px] bg-slate-800 rounded-xl border border-slate-700"></div>
            <div className="h-[500px] bg-slate-800 rounded-xl border border-slate-700"></div>
          </div>
        </div>
      </div>
      {children}
      {/* Background Icons */}
      <div className="fixed top-10 left-10 opacity-10 flex gap-2">
        <span className="material-symbols-outlined text-white text-4xl">terminal</span>
        <span className="material-symbols-outlined text-white text-4xl">code</span>
      </div>
      <div className="fixed bottom-10 right-10 opacity-10 flex gap-2">
        <span className="material-symbols-outlined text-white text-4xl">sports_esports</span>
        <span className="material-symbols-outlined text-white text-4xl">psychology</span>
      </div>
    </>
  );
};

export default BackgroundEffects;
