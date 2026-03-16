import React from 'react';

const SocialLoginButtons = () => {
  return (
    <>
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/5"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-slate-800/50 px-3 text-slate-500 font-medium">Or continue with</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-semibold text-white cursor-pointer">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.152-1.928 4.176-1.224 1.224-3.136 2.592-6.44 2.592-5.184 0-9.416-4.232-9.416-9.416s4.232-9.416 9.416-9.416c2.84 0 4.928 1.112 6.44 2.552l2.32-2.32c-1.952-1.872-4.496-3.328-8.76-3.328-7.528 0-13.632 6.104-13.632 13.632s6.104 13.632 13.632 13.632c4.072 0 7.168-1.344 9.56-3.84 2.472-2.472 3.248-5.912 3.248-8.624 0-.616-.048-1.2-.144-1.76h-12.664z"></path>
          </svg>
          Google
        </button>
        <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-semibold text-white cursor-pointer">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
          </svg>
          GitHub
        </button>
      </div>
    </>
  );
};

export default SocialLoginButtons;
