/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeGrey: "#9597A5",
        themeBlue: "#2D314D",
        themeGreen: "#30C88F",
        gradient: "linear-gradient(135deg, #33D35E 0%, #2AB6D9 99.58%);",
      },
      backgroundImage: {
        "my-gradient": " linear-gradient(135deg, #33D35E 0%, #2AB6D9 99.58%);",
      },
    },
  },
  plugins: [],
};
