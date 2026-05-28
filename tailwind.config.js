/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "husky-purple": "#5B5B8E",
        "husky-gold": "#C9A84C",
        "husky-gold-light": "#E0D5A8",
      },
      fontFamily: {
        display: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
