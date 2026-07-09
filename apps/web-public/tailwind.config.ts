/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        memora: {
          ink: "#050505",
          paper: "#080808",
          surface: "#111111",
          white: "#161616",
          accent: "#e8e4dc",
          text: "#ebe7df",
          border: "#2a2826",
          muted: "#7d7870",
          gold: "#b5a17a",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        noir: ["var(--font-oswald)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        logo: "0.35em",
        noir: "0.28em",
      },
      maxWidth: {
        editorial: "1440px",
      },
    },
  },
  plugins: [],
};
