/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "media", // or 'media' or 'class'
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
