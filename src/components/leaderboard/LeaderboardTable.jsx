import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const LeaderboardTable = () => {
  return (
    <Card className="p-0 overflow-hidden shadow-2xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-indigo-950/40 border-b border-slate-800 text-slate-400">
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">Rank</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">Username</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">ELO Rating</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">Win Rate</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-right">Trend</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            <tr className="row-glow transition-all group cursor-pointer">
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-yellow-400" style={{ fontVariationSettings: "'FILL' 1" }}>trophy</span>
                  <span className="font-bold text-lg text-yellow-400">1</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full border-2 border-yellow-400/50 p-0.5">
                    <div className="w-full h-full rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBcAucg79Ohe11x6z8yh80BBJ9i0pkNVYn0I3N3nP8UBzNLGqEZ_A8IWZnpD-bkqma5n8dDdoFufz0F9-HYMBDkIlJIwwNIw9QuLaqTM12RKOrhmpLIt7MaCXGJ_8RLOOIa704gEinw_dHBezzJLuniZ4YzVVbLksWPz5XDBidGy1B3orHGAbM8h30ASS_AWwmq-6JF-iHVKFDkyAVZgJTyxYb6fZA8v95MaiXUW51afdu5xcysmua0FwfbyOZto98iMo-QR0jKDmc')" }}></div>
                  </div>
                  <div>
                    <p className="font-bold text-slate-100 group-hover:text-primary transition-colors">syntax_lord</p>
                    <p className="text-xs text-slate-500">Master Tier</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="text-lg font-black text-indigo-400 tracking-tight">3,142</span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-slate-800 rounded-full max-w-[80px]">
                    <div className="h-full bg-accent-emerald rounded-full" style={{ width: "94%" }}></div>
                  </div>
                  <span className="text-sm font-bold text-accent-emerald">94.2%</span>
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                <span className="material-symbols-outlined text-accent-emerald text-sm">keyboard_double_arrow_up</span>
              </td>
            </tr>
            <tr className="bg-primary/20 border-l-4 border-primary">
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">person</span>
                  <span className="font-black text-lg text-primary">42</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full border-2 border-primary p-0.5">
                    <div className="w-full h-full rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwytH4XYP0ZDA8_uA-lNZ1YvWHViAfDPW01J2da3JZo82ceMwkeQjqMTJY8s5odfvJI7nidLDYb-C9YjxToSj2O6K6TAzEUjcXiNIn26L9sWxb_fP7grFjW055ZBUIy91etmb_jaQf7wsWXnHUHmSgzI8xFEr69dC3dyVHppbMEuTRUMGSSkDI-IkuIYQX-pLLh7u55lfNcYdyQxg1AiFIM2gs5rZCWb4tDXlth9ec2DjJ6L7i0CbE-RTRFuPToUq5nTBROHHigmU')" }}></div>
                  </div>
                  <div>
                    <p className="font-bold text-slate-100">current_user_01 <span className="ml-2 text-[10px] bg-primary text-white px-1.5 py-0.5 rounded uppercase">You</span></p>
                    <p className="text-xs text-primary/80">Pro Tier</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 font-black text-slate-100 text-lg tracking-tight">2,480</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-slate-800 rounded-full max-w-[80px]">
                    <div className="h-full bg-primary rounded-full" style={{ width: "68%" }}></div>
                  </div>
                  <span className="text-sm font-bold text-slate-100">68.5%</span>
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                <span className="material-symbols-outlined text-accent-emerald text-sm">arrow_upward</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-slate-900/60 flex items-center justify-between border-t border-slate-800">
        <span className="text-sm text-slate-500">Showing 1 to 50 of 12,402 players</span>
        <div className="flex gap-2">
          <Button variant="secondary" icon="chevron_left" className="size-8" />
          <button className="size-8 flex items-center justify-center rounded bg-primary text-white font-bold text-xs cursor-pointer">1</button>
          <button className="size-8 flex items-center justify-center rounded bg-slate-800 text-slate-400 hover:bg-primary hover:text-white transition-colors font-bold text-xs cursor-pointer">2</button>
          <Button variant="secondary" icon="chevron_right" className="size-8" />
        </div>
      </div>
    </Card>
  );
};

export default LeaderboardTable;
