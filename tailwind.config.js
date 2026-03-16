/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#4346ef",
        "accent": "#10b981",  // Emerald Green
        "accent-emerald": "#10b981",
        "background-light": "#f6f6f8",
        "background-dark": "#0F172A",
        "emerald-neon": "#10b981",
        "defeat-red": "#ef4444",
        "success": "#10b981",
        "danger": "#ef4444",
        "editor-bg": "#1e293b"
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}

