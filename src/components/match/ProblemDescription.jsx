import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProblem } from '../../api/problemsApi';

const ProblemDescription = ({ problem, loading, error }) => {

  if (loading) return (
    <div className="p-8 flex items-center justify-center text-slate-500 italic">
      <div className="animate-pulse">Loading problem data...</div>
    </div>
  );

  if (!problem && !error) return (
    <div className="p-8 flex flex-col items-center justify-center text-center gap-4">
      <span className="material-symbols-outlined text-4xl text-slate-700">quiz</span>
      <p className="text-slate-400 font-medium">No problem selected</p>
    </div>
  );

  if (error) return <div className="p-8 text-danger font-bold">{error}</div>;

  // Safe access to arrays that might be missing
  const testCases = problem.sampleTestCases || problem.testCases || problem.examples || [];
  const constraints = problem.constraints || [];

  return (
    <div className="flex flex-col h-full">
      <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 uppercase tracking-wider">
            {problem.difficulty || 'Unknown'}
          </span>
          <span className="text-slate-500 text-sm">•</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">{problem.title}</h2>
        <div className="prose prose-invert max-w-none space-y-4 text-slate-300">
          {problem.description}

          {testCases.length > 0 && (
            <div className="mt-8 space-y-6">
              {testCases.map((example, index) => (
                <div key={index}>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">input</span> Example {index + 1}
                  </h3>
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 font-mono text-sm">
                    <p><span className="text-slate-500">Input:</span> <span className="text-slate-200 font-medium">{example.input}</span></p>
                    <p><span className="text-slate-500">Output:</span> <span className="text-success font-black italic">{example.output || example.expectedOutput}</span></p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {constraints.length > 0 && (
            <div className="pt-6 border-t border-slate-800/50 mt-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">Constraints</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-400 marker:text-primary">
                {constraints.map((constraint, index) => (
                  <li key={index}><code className="bg-slate-800/50 px-1 rounded font-medium">{constraint}</code></li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProblemDescription;
