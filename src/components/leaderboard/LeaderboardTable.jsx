import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const LeaderboardTable = ({ leaderboard = [], loading = false, currentUsername, pagination, currentPage, onPageChange }) => {
  if (loading) {
     return <div className="p-12 text-center text-slate-500 animate-pulse">Loading Rankings...</div>;
  }
  
  const { totalUsers = 0, totalPages = 1, limit = 20 } = pagination || {};
  const startIndex = (currentPage - 1) * limit + 1;
  const endIndex = Math.min(currentPage * limit, totalUsers);

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
            {leaderboard.map((player) => {
              const isCurrentUser = player.username === currentUsername;
              const rankStr = player.rank || "-";
              // We receive pre-calculated winRate if backed is updated, otherwise fallback
              const winRate = player.winRate || (player.totalMatches > 0 
                ? ((player.wins / player.totalMatches) * 100).toFixed(1) 
                : 0);

              return (
                <tr key={player.username} className={`${isCurrentUser ? 'bg-primary/20 border-l-4 border-primary' : 'row-glow transition-all group cursor-pointer'}`}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                       {rankStr === 1 && <span className="material-symbols-outlined text-yellow-400" style={{ fontVariationSettings: "'FILL' 1" }}>trophy</span>}
                       <span className={`font-bold text-lg ${rankStr === 1 ? 'text-yellow-400' : (isCurrentUser ? 'text-primary' : 'text-slate-400')}`}>
                         {rankStr}
                       </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`size-10 rounded-full border-2 ${rankStr === 1 ? 'border-yellow-400/50' : 'border-slate-700'} p-0.5`}>
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

      <div className="p-4 bg-slate-900/60 flex flex-col md:flex-row items-center justify-between border-t border-slate-800 gap-4">
        <span className="text-sm text-slate-500">
          Showing {totalUsers > 0 ? startIndex : 0} to {endIndex} of {totalUsers} players
        </span>
        <div className="flex gap-2 items-center">
          <Button 
            variant="secondary" 
            icon="chevron_left" 
            className="size-8 p-0 flex items-center justify-center opacity-80 hover:opacity-100" 
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1 || loading}
          />
          <span className="text-sm font-bold text-slate-300 px-2">Page {currentPage} of {totalPages || 1}</span>
          <Button 
            variant="secondary" 
            icon="chevron_right" 
            className="size-8 p-0 flex items-center justify-center opacity-80 hover:opacity-100" 
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages || totalPages === 0 || loading}
          />
        </div>
      </div>
    </Card>
  );
};

export default LeaderboardTable;
