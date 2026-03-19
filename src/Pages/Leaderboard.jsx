import React from 'react';
import LeaderboardStats from '../components/leaderboard/LeaderboardStats';
import LeaderboardControls from '../components/leaderboard/LeaderboardControls';
import LeaderboardTable from '../components/leaderboard/LeaderboardTable';

// Leaderboard — only renders the UNIQUE content for the leaderboard page.
// The shared wrapper (header with nav, footer) is handled by MainLayout.

function Leaderboard() {
  return (
    <>
      <LeaderboardStats />
      <LeaderboardControls />
      <LeaderboardTable />
    </>
  );
}

export default Leaderboard;
