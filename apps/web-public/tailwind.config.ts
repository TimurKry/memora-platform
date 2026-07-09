/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        memora: {
          white: "#ffffff",
          paper: "#f7f6f2",
          accent: "#111111",
          text: "#1b1b1b",
          border: "#e6e4df",
          muted: "#6b6b6b",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        logo: "0.35em",
      },
      maxWidth: {
        editorial: "1440px",
      },
    },
  },
  plugins: [],
};
