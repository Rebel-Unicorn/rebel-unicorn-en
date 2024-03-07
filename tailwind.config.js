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
    screens: {
      sm: "641px",
      // => @media (min-width: 640px) { ... }

      md: "769px",
      // => @media (min-width: 768px) { ... }

      lg: "1025px",
      // => @media (min-width: 1024px) { ... }

      xl: "1281px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1537px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
