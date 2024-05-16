/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        NanumSquareNeo: "NanumSquareNeo-Variable",
      },
      colors: {
        transparent: "transparent",
        deepBlue: "#090a13",
        lightBlue: "#0163e5",
      },
    },
  },
  plugins: [],
};
