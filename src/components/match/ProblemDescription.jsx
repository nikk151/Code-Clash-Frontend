import React from 'react';

const ProblemDescription = ({ title, difficulty, timeLimit, description, examples, constraints }) => {
  return (
    <section className="w-1/3 border-r border-slate-800 flex flex-col bg-slate-900/20">
      <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 uppercase tracking-wider">{difficulty}</span>
          <span className="text-slate-500 text-sm">•</span>
          <span className="text-slate-400 text-sm italic">Time Limit: {timeLimit}</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">{title}</h2>
        <div className="prose prose-invert max-w-none space-y-4 text-slate-300">
          {description}
          <div className="mt-8 space-y-6">
            {examples.map((example, index) => (
              <div key={index}>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">input</span> Example {index + 1}
                </h3>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 font-mono text-sm">
                  <p><span className="text-slate-500">Input:</span> <span className="text-slate-200 font-medium">{example.input}</span></p>
                  <p><span className="text-slate-500">Output:</span> <span className="text-success font-black italic">{example.output}</span></p>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-6 border-t border-slate-800/50 mt-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">Constraints</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-400 marker:text-primary">
              {constraints.map((constraint, index) => (
                <li key={index}><code className="bg-slate-800/50 px-1 rounded font-medium">{constraint}</code></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemDescription;
