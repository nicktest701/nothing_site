/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#EDFA60",
        accent: "#FA5046",
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "Helvetica", "Arial", "sans-serif"],
        body: ["Inter", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
