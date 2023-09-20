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
        darkBlue: "#1D3557",
        lightGray: "#F1FAEE",
        lightBlue: "#A8DADC",
        brightRed: "#E63946",
        darkAqua: "#457B9D",
      },
    },
  },
  plugins: [],
};
