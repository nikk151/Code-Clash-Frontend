import React from 'react';

const Console = ({ testResults, chatMessages }) => {
  return (
    <div className="h-1/3 flex flex-col border-t border-slate-800 bg-slate-900/80 backdrop-blur-sm">
      <div className="flex border-b border-slate-800 px-4">
        <button className="px-6 py-4 text-xs font-black uppercase tracking-widest border-b-2 border-primary text-white flex items-center gap-2 transition-all">
          <span className="material-symbols-outlined text-lg text-success">check_circle</span> Test Results
        </button>
        <button className="px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-slate-300 flex items-center gap-2 transition-all cursor-pointer">
          <span className="material-symbols-outlined text-lg">forum</span> Live Chat
        </button>
      </div>
      <div className="flex-1 flex overflow-hidden">
        {/* Results List */}
        <div className="flex-1 p-4 overflow-y-auto custom-scrollbar">
          <div className="space-y-2">
            {testResults.map((result, index) => (
              <div key={index} className={`flex items-center justify-between p-3 ${result.status === 'success' ? 'bg-slate-800/40 border-slate-700/50' : 'bg-danger/5 border-danger/20'} rounded-lg border hover:border-primary/30 transition-all`}>
                <div className="flex items-center gap-3">
                  <span className={`material-symbols-outlined ${result.status === 'success' ? 'text-success' : 'text-danger'}`}>
                    {result.status === 'success' ? 'check_circle' : 'cancel'}
                  </span>
                  <span className="text-sm font-bold text-slate-200 uppercase tracking-tight">{result.name}</span>
                </div>
                {result.time && <span className="text-xs text-slate-500 font-mono italic">{result.time}</span>}
                {result.output && <span className="text-xs text-danger font-black italic tracking-widest uppercase">{result.output}</span>}
              </div>
            ))}
          </div>
        </div>
        {/* Live Chat (Condensed View) */}
        <div className="w-80 border-l border-slate-800 flex flex-col p-4 bg-slate-950/30">
          <div className="flex-1 space-y-4 overflow-y-auto custom-scrollbar text-xs mb-4">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`flex flex-col gap-1 ${msg.isAdmin ? 'items-end' : ''}`}>
                <span className={`font-black uppercase tracking-tighter ${msg.isAdmin ? 'text-orange-400' : 'text-primary'}`}>
                  {msg.user}
                </span>
                <p className={`${msg.isAdmin ? 'text-slate-400 bg-primary/5 border-primary/20 text-right' : 'text-slate-400 bg-slate-800/40 border-slate-700/30'} p-2 rounded-lg ${msg.isAdmin ? 'rounded-tr-none' : 'rounded-tl-none'} border`}>
                  {msg.text}
                </p>
              </div>
            ))}
          </div>
          <div className="relative">
            <input className="w-full bg-slate-900 border-slate-700 text-xs rounded-xl pl-4 pr-10 py-2.5 focus:ring-1 focus:ring-primary focus:border-primary text-slate-200 outline-none" placeholder="Type a message..." type="text" />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary cursor-pointer hover:scale-110 transition-all">
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Console;
