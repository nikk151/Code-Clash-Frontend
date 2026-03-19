import { useState, useEffect } from 'react';
import { getAllProblems } from '../api/problemsApi';

// ===================================================================
// useProblems — Extracts problem-fetching logic from ProblemsPage
// ===================================================================
//
// BEFORE (in ProblemsPage):
//   const [currentPage, setCurrentPage] = useState(1);
//   const [problems, setProblems] = useState(null);
//   useEffect(() => { fetch problems... }, [currentPage]);
//
// AFTER:
//   const { problems, currentPage, setCurrentPage, loading, error } = useProblems();
//
// WHY:
// 1. ProblemsPage only has to worry about RENDERING, not fetching
// 2. If another component needs problems data, it can reuse this hook
// 3. Loading and error states are handled consistently
// ===================================================================

const useProblems = (limit = 5) => {
  const [problems, setProblems] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProblems = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await getAllProblems(currentPage, limit);
        setProblems(data);
      } catch (err) {
        setError('Failed to load problems');
        console.error('useProblems error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProblems();
  }, [currentPage, limit]);

  return { problems, currentPage, setCurrentPage, loading, error };
};

export default useProblems;
