import React from 'react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <div className="@container">
      <div className="flex flex-col gap-10 py-16 md:py-24 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-8 lg:w-1/2">
          <div className="flex flex-col gap-4">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Season 4 Live
            </div>
            <h1 className="text-slate-900 dark:text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
              Code Clash: <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">1v1 Competitive</span> Coding
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              Enter the arena where speed meets logic. Experience high-energy coding battles, solve challenges in real-time, and climb the global ranks.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button to="/register" size="xl" className="min-w-[160px] font-extrabold shadow-xl shadow-primary/30 py-4">
              Get Started
            </Button>
            <Button to="/leaderboard" variant="secondary" size="xl" className="min-w-[160px] font-extrabold backdrop-blur-sm py-4">
              View Ranking
            </Button>
          </div>
        </div>

        {/* Hero Visual/Graphic */}
        <div className="lg:w-1/2 relative">
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/50 backdrop-blur-xl shadow-2xl relative group">
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-accent/10 mix-blend-overlay"></div>
            <img
              alt="Arena UI"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu2sws_uQksT0aLoGEufP_F9o0_-fpuNEO5HOau_oKgiJuGW0e2Zab4JiqG7CJTmf06c9EOql07ROTf-4VOajZ3SOhq0O8W2l6Ix0IlyN791M8Gs48HQSdrnJAWX7MQMLQigSMosedZxBNfb7djSLNNEqQL29EbkVDaVKFJ4IgHgGGIH1f7fEoj4jYkvuZN6AIM7ZV0Lan6uu7mdGTo7WtbW1CCrbVWt1ENVEUjtuPU4Dmn0hxhcYaYAfUb9tMS52gxXZ4URB1W_c"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-background-dark/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center gap-4 border-l-4 border-l-accent">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-primary flex items-center justify-center mb-2 overflow-hidden">
                      <img
                        alt="User 1"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQG2_9D4VT4NA-o6LJ5rjjWuc1Rx2U_UpHwvM1JyIW1xOojCjsiuEWTLBdJVPq5SFCjZpCkPTL86NEx2NSR2w_Z3bzXrOc7gA4WJej-9idQs8WrmFtM9gNHTIGt_LdhEGBgklYWnccwBFL3Kk0d5U4uZCAXDjJAyIQXXR6OmRlJ-aiLxnKpV_Tbwo0IZC_0_kwQ2HxNiBcgwbnrxZ_9_vcl_pnZR39eWQtPrEf8dlyR_vScMBPp9NLBDxGOK-ZhVdSaLCqJHlEw_I"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-primary">PLAYER 1</span>
                  </div>
                  <span className="material-symbols-outlined text-accent text-4xl italic font-black">bolt</span>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-accent flex items-center justify-center mb-2 overflow-hidden">
                      <img
                        alt="User 2"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIFTPUN1m8r58KXA8065GyCWO_RO-1ZcdAusGBUNWLfJacO05BOuXjt7g5MvchJrjPoisDAfx45DxqnBsdtYc8Km046quqT8WTbEyzObyjwDDIBBUkg9NETPhk9CYpOjRSFJ5eJ4eeQEd3aZ80Xt9jGcYI_ox21cGkPO5citypWY_1kgClVB1Epb20mUl5rBLo4OqfW9eYcybvL4nX17JoNiPnASK3dQpNDButyNpl5gqwCkfappPiB4NbOKN43blOB-28vEkqTus"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-accent">PLAYER 2</span>
                  </div>
                </div>
                <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-accent h-full w-[65%]"></div>
                </div>
                <span className="text-[10px] font-mono text-slate-400">PROBLEM: DIJKSTRA'S SHORTEST PATH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
