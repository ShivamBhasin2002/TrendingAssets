/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "#14172B",
        gradientFrom: "rgba(98, 106, 136, 0.1)",
        gradientTo: "rgba(46, 49, 73, 0.1)",
        primary: "#5A5F7D",
        borderFrom: "rgba(236, 240, 255, 0.1)",
      },
      fontFamily: {
        tommorrow: ["Tomorrow"],
      },
    },
  },
  plugins: [],
};
