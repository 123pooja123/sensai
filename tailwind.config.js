/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Replace Tailwind’s OKLCH-based defaults with safe RGB values
        primary: "rgb(59,130,246)",   // Tailwind blue-500
        muted: "rgb(243,244,246)",    // gray-100 fallback for bg-muted
        warning: "rgb(202,138,4)",    // yellow-600 fallback
        destructive: "rgb(239,68,68)",// red-500 fallback
      },
    },
  },
  plugins: [],
};
