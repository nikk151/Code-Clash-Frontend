import React from 'react';
import Header from '../components/ui/Header';
import ProblemDescription from '../components/match/ProblemDescription';
import CodeEditor from '../components/match/CodeEditor';
import Console from '../components/match/Console';
import Button from '../components/ui/Button';

function CodingArea() {
  const headerLeft = (
    <div className="flex items-center gap-3">
      <h1 className="text-white text-xl font-bold leading-tight tracking-tighter uppercase italic">Code Clash</h1>
      <div className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">
        <span className="text-primary text-xs font-mono font-bold animate-pulse">LIVE MATCH #XJ92KF</span>
      </div>
    </div>
  );

  const headerRight = (
    <div className="flex items-center gap-4">
      <div className="hidden sm:flex items-center gap-4 px-4 py-1.5 bg-slate-800/50 rounded-lg border border-slate-700">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-sm">timer</span>
          <span className="text-white font-mono font-bold">24:50</span>
        </div>
      </div>
      <Button variant="accent" size="md" to="/post-match">Submit Code</Button>
    </div>
  );

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 h-screen overflow-hidden flex flex-col">
      <Header leftContent={headerLeft} rightContent={headerRight}>
        {/* Navigation can be placed here if needed for this page */}
      </Header>

      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden">
        {/* Left Column - Problem Description */}
        <div className="lg:col-span-3 border-r border-slate-800 bg-slate-900/40 overflow-y-auto">
          <ProblemDescription />
        </div>

        {/* Middle Column - Code Editor */}
        <div className="lg:col-span-6 flex flex-col bg-[#0f1117] h-full overflow-hidden">
          <CodeEditor />
        </div>

        {/* Right Column - Console & Chat */}
        <div className="lg:col-span-3 border-l border-slate-800 bg-slate-900/40 flex flex-col h-full overflow-hidden">
          <Console />
        </div>
      </main>
    </div>
  );
}

export default CodingArea;
