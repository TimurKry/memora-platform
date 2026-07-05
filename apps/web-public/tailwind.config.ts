/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        memora: {
          50: "#f5f3f7",
          100: "#ebe6ef",
          200: "#d6ccdf",
          300: "#b8a8c8",
          400: "#967fad",
          500: "#7a6393",
          600: "#634f7a",
          700: "#524164",
          800: "#453754",
          900: "#3d2b4a",
          950: "#241629",
        },
        gold: {
          400: "#c9a962",
          500: "#b8860b",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};
