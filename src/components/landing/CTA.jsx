import React from 'react';
import Button from '../Button';

const CTA = () => {
  return (
    <section className="py-20 text-center relative rounded-4xl overflow-hidden border border-slate-200 dark:border-slate-800 mb-20">
      <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-accent/20"></div>
      <div className="absolute inset-0 backdrop-blur-3xl opacity-30"></div>
      <div className="relative z-10 flex flex-col items-center gap-8 px-6">
        <h2 className="text-slate-900 dark:text-white text-4xl md:text-6xl font-black leading-tight max-w-3xl">
          Ready to enter the <span className="italic text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">Arena?</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium max-w-xl">
          Join thousands of developers in the ultimate coding showdown. Your journey to the top begins with a single match.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Button to="/register" variant="accent" size="xl" className="min-w-[200px] font-black shadow-xl shadow-accent/20 transition-all hover:scale-105">
            Get Started Now
          </Button>
          <Button variant="primary" size="xl" className="min-w-[200px] font-black shadow-xl shadow-primary/20 transition-all hover:scale-105">
            Join Discord
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
