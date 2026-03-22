import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const LeaderboardTable = ({ leaderboard = [], loading = false, currentUsername }) => {
  if (loading) {
     return <div className="p-12 text-center text-slate-500 animate-pulse">Loading Rankings...</div>;
  }
  
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
            {leaderboard.map((player, index) => {
              const isCurrentUser = player.username === currentUsername;
              const winRate = player.totalMatches > 0 
                ? ((player.wins / player.totalMatches) * 100).toFixed(1) 
                : 0;

              return (
                <tr key={player._id} className={`${isCurrentUser ? 'bg-primary/20 border-l-4 border-primary' : 'row-glow transition-all group cursor-pointer'}`}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                       {index === 0 && <span className="material-symbols-outlined text-yellow-400" style={{ fontVariationSettings: "'FILL' 1" }}>trophy</span>}
                       <span className={`font-bold text-lg ${index === 0 ? 'text-yellow-400' : (isCurrentUser ? 'text-primary' : 'text-slate-400')}`}>
                         {index + 1}
                       </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`size-10 rounded-full border-2 ${index === 0 ? 'border-yellow-400/50' : 'border-slate-700'} p-0.5`}>
                        <div className="w-full h-full rounded-full bg-cover bg-center bg-slate-800 flex items-center justify-center text-xs font-bold uppercase">
                           {player.username.substring(0,2)}
                        </div>
                      </div>
                      <div>
                        <p className={`font-bold ${isCurrentUser ? 'text-white' : 'text-slate-100 group-hover:text-primary transition-colors'}`}>
                          {player.username}
                          {isCurrentUser && <span className="ml-2 text-[10px] bg-primary text-white px-1.5 py-0.5 rounded uppercase">You</span>}
                        </p>
                        <p className={`text-xs ${isCurrentUser ? 'text-primary/80' : 'text-slate-500'}`}>{player.eloRating > 2000 ? 'Master Tier' : 'Pro Tier'}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-lg font-black tracking-tight ${isCurrentUser ? 'text-white' : 'text-indigo-400'}`}>{player.eloRating}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-slate-800 rounded-full max-w-[80px]">
                        <div className={`h-full rounded-full ${isCurrentUser ? 'bg-primary' : 'bg-accent-emerald'}`} style={{ width: `${winRate}%` }}></div>
                      </div>
                      <span className={`text-sm font-bold ${isCurrentUser ? 'text-slate-100' : 'text-accent-emerald'}`}>{winRate}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className={`material-symbols-outlined text-sm ${winRate > 50 ? 'text-accent-emerald' : 'text-danger'}`}>
                      {winRate > 50 ? 'keyboard_double_arrow_up' : 'keyboard_double_arrow_down'}
                    </span>
                  </td>
                </tr>
              );
            })}
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
