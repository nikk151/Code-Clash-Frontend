import React, { useState, useEffect } from 'react';
import LeaderboardStats from '../components/leaderboard/LeaderboardStats';
import LeaderboardControls from '../components/leaderboard/LeaderboardControls';
import LeaderboardTable from '../components/leaderboard/LeaderboardTable';
import { getLeaderboard } from '../api/leaderboardApi';
import useAuth from '../hooks/useAuth';

function Leaderboard() {
  const { user } = useAuth();
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        setLoading(true);
        const { data } = await getLeaderboard();
        setLeaderboard(data.leaderboard || []);
      } catch (error) {
        console.error('Failed to fetch leaderboard:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, []);

  return (
    <>
      <LeaderboardStats />
      <LeaderboardControls />
      <LeaderboardTable 
        leaderboard={leaderboard} 
        loading={loading} 
        currentUsername={user?.username} 
      />
    </>
  );
}

export default Leaderboard;
