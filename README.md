# Code Clash Frontend 💻

Official web client for Code Clash — the ultimate real-time coding combat arena. Built with React, Vite, and absolute premium aesthetics.

## Features

- **The Forge (Arena)**: A high-performance IDE experience with real-time sync with opponents.
- **Dynamic Leaderboard**: Track your rank among the global elite.
- **Real-time Matchmaking**: Join rooms via secret codes or queue for quick battles.
- **Instant Feedback**: View test case results and performance stats immediately.
- **Aesthetic UI**: Dark-mode primary design with glassmorphism and neon accents.

## Tech Stack

- **Framework**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Real-time Connectivity**: [Socket.io Client](https://socket.io/)
- **Icons & Graphics**: [Google Fonts](https://fonts.google.com/), [Lucide React](https://lucide.dev/)
- **State Management**: [React Context API](https://reactjs.org/docs/context.html)

## Getting Started

### Prerequisites

- Node.js installed
- A running instance of the [Code Clash API](https://github.com/your-username/code-clash-api)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```bash
   VITE_API_URL=http://localhost:8000/api
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Key Pages

- `/`: The Landing Page (Hero section, features, stats).
- `/dashboard`: Personal hub with stats and matchmaking.
- `/arena/:roomCode`: The heat of battle — solve problems against rivals.
- `/leaderboard`: Global rankings.
- `/profile`: Personal performance history and ELO tracking.

## Deployment

Recommended to deploy on **Vercel** or **Netlify**. Ensure `VITE_API_URL` is set to your deployed backend URL in the deployment settings.

## License

MIT
