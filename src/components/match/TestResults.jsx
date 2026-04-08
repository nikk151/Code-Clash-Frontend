import React from 'react';

/**
 * TestResults — Displays test case results in the bottom panel.
 * Separated from the old Console component for modularity.
 */
const TestResults = ({ testResults = [] }) => {
  return (
    <div className="flex flex-col h-full bg-slate-900/80 backdrop-blur-sm">
      {/* Tab Header */}
      <div className="flex border-b border-slate-800 px-4 shrink-0">
        <button className="px-5 py-3 text-xs font-black uppercase tracking-widest border-b-2 border-primary text-white flex items-center gap-2 transition-all">
          <span className="material-symbols-outlined text-base text-success">check_circle</span>
          Test Results
        </button>
      </div>

      {/* Results List */}
      <div className="flex-1 p-3 overflow-y-auto custom-scrollbar">
        {testResults.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-slate-500 gap-2">
            <span className="material-symbols-outlined text-4xl opacity-50">terminal</span>
            <p className="text-sm font-medium">Run your code to see results</p>
          </div>
        ) : (
          <div className="space-y-2">
          {testResults.map((result, index) => (
            <div
              key={index}
              className={`flex flex-col p-2.5 ${
                result.status === 'success'
                  ? 'bg-slate-800/40 border-slate-700/50'
                  : 'bg-danger/5 border-danger/20'
              } rounded-lg border hover:border-primary/30 transition-all`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className={`material-symbols-outlined text-base ${
                      result.status === 'success' ? 'text-success' : 'text-danger'
                    }`}
                  >
                    {result.status === 'success' ? 'check_circle' : 'cancel'}
                  </span>
                  <span className="text-sm font-bold text-slate-200 uppercase tracking-tight">
                    {result.name}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {result.time && (
                    <span className="text-xs text-slate-500 font-mono italic">{result.time}</span>
                  )}
                  {result.output && (
                    <span className={`text-xs font-black italic tracking-widest uppercase ${result.status === 'success' ? 'text-success' : 'text-danger'}`}>
                      {result.output}
                    </span>
                  )}
                </div>
              </div>

              {result.status === 'error' && result.actualOutput && (
                <div className="mt-3 flex flex-col gap-2 border-t border-danger/20 pt-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-danger font-bold uppercase tracking-wider mb-1">Error Detail</span>
                    <div className="bg-slate-900/50 p-2 rounded border border-danger/30 font-mono text-xs text-red-300 whitespace-pre-wrap">
                      {result.actualOutput}
                    </div>
                  </div>
                </div>
              )}

              {result.input !== undefined && (
                <div className="mt-3 flex flex-col gap-2 border-t border-slate-700/50 pt-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Input</span>
                    <div className="bg-slate-900/50 p-2 rounded border border-slate-800 font-mono text-xs text-slate-300">
                      {result.input}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Expected Output</span>
                    <div className="bg-slate-900/50 p-2 rounded border border-slate-800 font-mono text-xs text-success/80">
                      {result.expectedOutput}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Actual Output</span>
                    <div className="bg-slate-900/50 p-2 rounded border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap">
                      {result.actualOutput || 'No output'}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestResults;
