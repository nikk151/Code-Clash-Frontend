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
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({ totalPages: 1, totalUsers: 0 });
  const [userStats, setUserStats] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        setLoading(true);
        const { data } = await getLeaderboard(currentPage, 20);
        setLeaderboard(data.leaderboard || []);
        if (data.pagination) setPagination(data.pagination);
        if (data.userStats) setUserStats(data.userStats);
      } catch (error) {
        console.error('Failed to fetch leaderboard:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, [currentPage]);

  return (
    <>
      <LeaderboardStats userStats={userStats} currentElo={user?.eloRating} />
      <LeaderboardControls />
      <LeaderboardTable 
        leaderboard={leaderboard} 
        loading={loading} 
        currentUsername={user?.username} 
        pagination={pagination}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
}

export default Leaderboard;
