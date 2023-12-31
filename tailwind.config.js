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
        taupe: "#463F3A",
        isabelline: "#F4F3EE",
        melon: "#E0AFA0",
        davyGray: "#4D4D4D",
      },
    },
  },
  plugins: [],
};
