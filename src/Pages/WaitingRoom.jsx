import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import LobbyCard from '../components/match/LobbyCard';
import MatchmakingStatus from '../components/match/MatchmakingStatus';

function WaitingRoom() {
  const headerLeft = (
    <div className="flex items-center gap-4 text-primary">
      <div className="size-8">
        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="currentColor"></path>
        </svg>
      </div>
      <h2 className="text-slate-100 text-xl font-black leading-tight tracking-tight uppercase">CODE CLASH</h2>
    </div>
  );

  const headerRight = (
    <div className="flex items-center gap-4">
      <div className="hidden md:flex flex-col items-end mr-2">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Server Status</p>
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-emerald-500 neon-glow"></span>
          <p className="text-sm font-medium text-emerald-400">Optimal</p>
        </div>
      </div>
      <Button variant="secondary" icon="settings" />
    </div>
  );

  const matchmakingData = {
    playerAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwWS1eD4G2qlzRCWcxKecgTiy_uFiDC_iejscs-idsP52G5VHyq8opUqazumrV2U9W0RqrxQqng8vOHJgTOjFWORKZc72ErPJr7ZksRM0KmbhupO2HZZitlLZxQGN4G-VIA3oV4nCQzk11jx4VrFIrUw_MCsCMyUxtnqje6qixKnbnKtb2cq35D_EkrxrEa5PMLryrDo7PHfgYxM-TWqtoAKqXgjy5FMSljYanp-JnEjPCqoURcNnOnBWipbccZakB4TiD4Y4cgHQ",
    status: "Searching for Opponent...",
    waitTime: "0:45"
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden">
      <div className="relative flex h-auto min-h-screen w-full flex-col">
        <Header leftContent={headerLeft} rightContent={headerRight} />
        
        <main className="flex flex-1 flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
          
          {/* Hero Content */}
          <div className="w-full max-w-2xl text-center mb-12 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6 pulse-slow">
              <span className="material-symbols-outlined text-primary text-lg">group</span>
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Matchmaking Protocol Active</span>
            </div>
            <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-tighter mb-4 uppercase">
              Waiting Room
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-md mx-auto">
              A duel is about to begin. Share your lobby credentials with a worthy adversary.
            </p>
          </div>
          
          <LobbyCard roomCode="XJ92KF" />

          <div className="mt-8 w-full max-w-lg">
             <MatchmakingStatus {...matchmakingData} />
          </div>
          
          {/* Footer Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 relative z-10">
            <div className="flex flex-col items-center">
              <p className="text-3xl font-black text-white italic">12.4k</p>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Active Clashes</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-3xl font-black text-white italic">42ms</p>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Latency</p>
            </div>
            <div className="hidden md:flex flex-col items-center">
              <p className="text-3xl font-black text-white italic">Global</p>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Match Scope</p>
            </div>
            <div className="hidden md:flex flex-col items-center">
              <p className="text-3xl font-black text-white italic">Ranked</p>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Game Mode</p>
            </div>
          </div>
        </main>
        
        {/* Sidebar */}
        <div className="hidden xl:fixed left-10 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
          <Button to="/dashboard" variant="ghost" icon="home" className="group">
             <span className="text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase ml-2">Dashboard</span>
          </Button>
          <Button variant="ghost" icon="swords" className="bg-primary/20 text-primary group">
             <span className="text-sm font-bold uppercase ml-2">Battles</span>
          </Button>
          <Button to="/leaderboard" variant="ghost" icon="trophy" className="group">
             <span className="text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase ml-2">Rankings</span>
          </Button>
          <Button variant="ghost" icon="person" className="group">
             <span className="text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase ml-2">Profile</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WaitingRoom;
