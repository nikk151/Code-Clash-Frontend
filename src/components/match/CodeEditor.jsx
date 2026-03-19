import React from 'react';
import Button from '../ui/Button';

const CodeEditor = ({ languages, selectedLanguage, onLanguageChange, code }) => {
  return (
    <div className="flex-1 flex flex-col min-h-0 bg-slate-900">
      <div className="h-12 flex items-center justify-between px-4 border-b border-slate-800 bg-slate-900/80">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-xl">code</span>
          <div className="relative">
            <select
              value={selectedLanguage}
              onChange={(e) => onLanguageChange(e.target.value)}
              className="bg-slate-800 border-none text-slate-200 text-sm rounded-lg py-1.5 pl-3 pr-8 focus:ring-1 focus:ring-primary appearance-none cursor-pointer outline-none"
            >
              {languages.map((lang) => (
                <option key={lang}>{lang}</option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 text-sm pointer-events-none">expand_more</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="p-1">
            <span className="material-symbols-outlined text-xl">content_copy</span>
          </Button>
          <Button variant="ghost" className="p-1">
            <span className="material-symbols-outlined text-xl">restart_alt</span>
          </Button>
        </div>
      </div>

      {/* Space for Monaco Code Editor */}
      <div className="flex-1 overflow-auto custom-scrollbar bg-[#1e293b] p-4 font-mono text-sm leading-relaxed relative">
        <div className="flex">
          <div className="w-10 text-slate-600 pr-4 text-right select-none border-r border-slate-700/50 mr-4">
            {/* Line numbers could be dynamic */}
            {Array.from({ length: 10 }, (_, i) => i + 1).map(n => <div key={n}>{n}</div>)}
          </div>
          <div className="flex-1 text-slate-300">
            {code}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1 bg-primary/20"></div>
      </div>
    </div>
  );
};

export default CodeEditor;
