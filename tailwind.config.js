/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5B5FC7",
        secendery: "#242424",
        gray1: "#424242",
      },
    },
  },
  plugins: [],
};
