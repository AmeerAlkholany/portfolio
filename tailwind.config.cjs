/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./global/**/*.{ts,tsx,js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ededed",
        accent: "#34d399",
      },
      fontFamily: {
        sans: ["Geist", "system-ui", "sans-serif"],
      },
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};