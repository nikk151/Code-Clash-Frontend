import { io } from 'socket.io-client';
import { API_BASE_URL } from '../utils/constants';

// We extract the domain from API_BASE_URL if it includes '/api'
const SOCKET_URL = API_BASE_URL.replace(/\/api$/, '');

// Create a single global socket instance
const socket = io(SOCKET_URL, {
  autoConnect: true,
  withCredentials: true,
  transports: ['websocket', 'polling'] // Try WebSocket first
});

// Basic connection logging
socket.on('connect', () => {
  console.log('🔗 Connected to Socket.io Server:', socket.id);
});

socket.on('disconnect', (reason) => {
  console.log('❌ Disconnected from Socket.io:', reason);
});

export default socket;
