import React from 'react';
import Editor from '@monaco-editor/react';

/**
 * CodeEditor — Wraps Monaco Editor with a toolbar and theme matching the app.
 * The custom theme uses the project's dark palette (background-dark: #0F172A, editor-bg: #1e293b).
 */
const CodeEditor = ({
  languages = ['javascript', 'python3', 'cpp', 'java'],
  selectedLanguage = 'javascript',
  onLanguageChange = () => {},
  code = '// Write your solution here...\n',
  onChange = () => {},
  onCopy = () => {},
  onReset = () => {}
}) => {
  // Define a custom Monaco theme that matches our Tailwind dark palette
  const handleEditorMount = (editor, monaco) => {
    monaco.editor.defineTheme('codeclash-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '64748b', fontStyle: 'italic' },
        { token: 'keyword', foreground: '818cf8' },        // indigo-400
        { token: 'string', foreground: '34d399' },         // emerald-400
        { token: 'number', foreground: 'fbbf24' },         // amber-400
        { token: 'type', foreground: '38bdf8' },           // sky-400
        { token: 'function', foreground: 'a78bfa' },       // violet-400
      ],
      colors: {
        'editor.background': '#0F172A',                     // background-dark
        'editor.foreground': '#e2e8f0',                     // slate-200
        'editor.lineHighlightBackground': '#1e293b',        // editor-bg / slate-800
        'editor.selectionBackground': '#4346ef33',          // primary with opacity
        'editorCursor.foreground': '#4346ef',               // primary
        'editor.inactiveSelectionBackground': '#1e293b80',
        'editorLineNumber.foreground': '#475569',           // slate-600
        'editorLineNumber.activeForeground': '#94a3b8',     // slate-400
        'editorGutter.background': '#0F172A',
        'editorWidget.background': '#1e293b',
        'editorWidget.border': '#334155',                   // slate-700
        'input.background': '#1e293b',
        'dropdown.background': '#1e293b',
        'list.hoverBackground': '#334155',
      },
    });
    monaco.editor.setTheme('codeclash-dark');
  };

  // Display labels for the language dropdown
  const langLabels = {
    javascript: 'JavaScript',
    python3: 'Python 3',
    cpp: 'C++',
    java: 'Java',
  };

  // Monaco natively understands 'python', but backend needs 'python3'
  const monacoLanguage = selectedLanguage === 'python3' ? 'python' : selectedLanguage;

  return (
    <div className="h-full flex flex-col min-h-0 w-full overflow-hidden">
      {/* Toolbar */}
      <div className="h-11 flex items-center justify-between px-4 border-b border-slate-800 bg-[#0F172A] shrink-0">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-lg">code</span>
          <div className="relative">
            <select
              value={selectedLanguage}
              onChange={(e) => onLanguageChange(e.target.value)}
              className="bg-slate-800 border-none text-slate-200 text-sm rounded-lg py-1.5 pl-3 pr-8 focus:ring-1 focus:ring-primary appearance-none cursor-pointer outline-none"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {langLabels[lang] || lang}
                </option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 text-sm pointer-events-none">
              expand_more
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button 
            onClick={onCopy} 
            className="p-1.5 text-slate-500 hover:text-slate-300 transition-colors rounded hover:bg-slate-800"
            title="Copy Code"
          >
            <span className="material-symbols-outlined text-lg">content_copy</span>
          </button>
          <button 
            onClick={onReset} 
            className="p-1.5 text-slate-500 hover:text-slate-300 transition-colors rounded hover:bg-slate-800"
            title="Reset to Default"
          >
            <span className="material-symbols-outlined text-lg">restart_alt</span>
          </button>
        </div>
      </div>

      {/* Monaco Editor */}
      <div className="flex-1 min-h-0">
        <Editor
          height="100%"
          language={monacoLanguage}
          value={code}
          onChange={onChange}
          onMount={handleEditorMount}
          theme="vs-dark"
          options={{
            fontSize: 14,
            fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace",
            fontLigatures: true,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            padding: { top: 16 },
            lineNumbersMinChars: 3,
            renderLineHighlight: 'line',
            cursorBlinking: 'smooth',
            cursorSmoothCaretAnimation: 'on',
            smoothScrolling: true,
            bracketPairColorization: { enabled: true },
            automaticLayout: true,
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
