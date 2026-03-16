import React from 'react';

const BackgroundDecoration = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-40 right-10 w-48 h-48 bg-accent/10 blur-3xl rounded-full"></div>
      <span className="material-symbols-outlined absolute top-[15%] left-[10%] text-6xl text-primary/20 rotate-12 opacity-50">code</span>
      <span className="material-symbols-outlined absolute top-[25%] right-[15%] text-7xl text-accent/20 -rotate-12 opacity-50">swords</span>
      <span className="material-symbols-outlined absolute bottom-[20%] left-[20%] text-5xl text-primary/10 rotate-45 opacity-40">trophy</span>
      <span className="material-symbols-outlined absolute bottom-[10%] right-[25%] text-8xl text-accent/10 -rotate-45 opacity-40">terminal</span>
    </div>
  );
};

export default BackgroundDecoration;
