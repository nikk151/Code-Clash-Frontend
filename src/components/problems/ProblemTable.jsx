import React from 'react';

const ProblemTable = ({problems}) => {

  const getDifficultyColor = (diff) => {
    switch (diff) {
      case 'Easy': return 'text-emerald-accent bg-emerald-accent/10 border-emerald-accent/20';
      case 'Medium': return 'text-amber-accent bg-amber-accent/10 border-amber-accent/20';
      case 'Hard': return 'text-rose-accent bg-rose-accent/10 border-rose-accent/20';
      default: return 'text-slate-400 bg-white/5 border-white/10';
    }
  };

  const getProgressColor = (diff) => {
    switch (diff) {
      case 'Easy': return 'bg-emerald-accent';
      case 'Medium': return 'bg-amber-accent';
      case 'Hard': return 'bg-rose-accent';
      default: return 'bg-primary';
    }
  };

  if (!problems) {
    return <div className='text-center'>Loading...</div>
  }

  return (
    <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
      {/* Desktop Table Header - Hidden on Mobile */}
      <table className="w-full text-left border-collapse hidden md:table">
        <thead>
          <tr className="bg-white/5 border-b border-white/10">
            <th className="px-8 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Title</th>
            <th className="px-8 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Difficulty</th>
            <th className="px-8 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {!problems && <div>Loading...</div>}
          {problems?.map((problem) => (
            <tr key={problem.id} className="row-hover transition-colors group">
              <td className="px-8 py-6">
                <p className="text-white font-semibold group-hover:text-primary transition-colors">{problem.title}</p>
                <p className="text-xs text-slate-500 mt-1">{problem.tags}</p>
              </td>
              <td className="px-8 py-6">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getDifficultyColor(problem.difficulty)}`}>
                  {problem.difficulty}
                </span>
              </td>
              <td className="px-8 py-6">
                <div className="flex items-center justify-end gap-2">
                  <button className="bg-white/5 hover:bg-white/10 text-slate-300 px-4 py-2 rounded-lg text-sm font-bold border border-white/10 transition-all flex items-center gap-2 cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]">swords</span>
                    Create Match
                  </button>
                  <button className="bg-white/5 hover:bg-primary hover:text-white text-primary px-5 py-2 rounded-lg text-sm font-bold border border-primary/30 transition-all cursor-pointer">Solve</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Card Layout - Hidden on Desktop */}
      <div className="md:hidden divide-y divide-white/5">
        {problems.map((problem) => (
          <div key={problem.id} className="p-6 row-hover transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className={`material-symbols-outlined ${problem.status === 'completed' ? 'text-emerald-accent' : 'text-slate-700'}`}>
                  {problem.status === 'completed' ? 'check_circle' : 'radio_button_unchecked'}
                </span>
                <div>
                  <p className="text-white font-bold">{problem.title}</p>
                  <p className="text-xs text-slate-500">{problem.tags}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter border ${getDifficultyColor(problem.difficulty)}`}>
                {problem.difficulty}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-white/5 hover:bg-white/10 text-slate-300 px-4 py-3 rounded-xl text-xs font-bold border border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer">
                <span className="material-symbols-outlined text-sm">swords</span>
                Match
              </button>
              <button className="bg-white/5 hover:bg-primary hover:text-white text-primary px-4 py-3 rounded-xl text-xs font-bold border border-primary/30 transition-all cursor-pointer">
                Solve Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemTable;
