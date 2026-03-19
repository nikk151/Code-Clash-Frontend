import { useState, useEffect } from 'react';
import { checkHealth } from '../api/healthApi';

// ===================================================================
// useServerHealth — Extracts health-check logic from LandingPage
// ===================================================================
//
// USAGE:
//   const { status, isConnected } = useServerHealth();
//   <p>{isConnected ? '🟢 Online' : '🔴 Offline'}: {status}</p>
// ===================================================================

const useServerHealth = () => {
  const [status, setStatus] = useState('connecting...');
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const { data } = await checkHealth();
        setStatus(data.message);
        setIsConnected(true);
      } catch (error) {
        setStatus('Backend unreachable');
        setIsConnected(false);
        console.error('Health check failed:', error);
      }
    };

    fetchHealth();
  }, []);

  return { status, isConnected };
};

export default useServerHealth;
