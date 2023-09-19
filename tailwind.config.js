/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deepViolet: "2B2D42",
        lightGray: "8D99AE",
        darkWhite: "EDF2F4",
        brightRed: "EF233C",
        darkRed: "D90429",
      },
    },
  },
  plugins: [],
};
