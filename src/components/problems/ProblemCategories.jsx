import React from 'react';

const ProblemCategories = () => {
  const categories = [
    "Algorithms", "Strings", "Arrays", 
    "Dynamic Prog.", "Graphs", "Math"
  ];

  return (
    <div className="glass-card rounded-2xl p-6 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-all"></div>
      <h3 className="text-white font-bold mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">category</span> Browse Categories
      </h3>
      <div className="grid grid-cols-2 gap-2">
        {categories.map((cat) => (
          <button 
            key={cat}
            className="bg-white/5 hover:bg-white/10 text-slate-300 py-2 px-3 rounded-lg text-xs font-medium transition-all text-left"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProblemCategories;
