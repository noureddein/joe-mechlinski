/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "max-md": { max: "767px" },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        northCoastItalic: ["North Coast", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/images/home-header-bg.png')",
      },
      gridTemplateRows: {
        // Simple 8 row grid
        8: "repeat(8, minmax(0, 1fr))",
        7: "repeat(7, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
      },
      spacing: {
        "1/10": "10%",
        "1/5": "20%",
        "f-width": "1300px",
        "9/10": "90%",
        "1/20": "5%",
        "9/20": "45%",
      },
      colors: {
        "dark-blue": "#110b57",
        purple: "#5541D9",
        "light-purple": "#A99DF9",
      },
      contrast: {
        20: ".2",
      },
      backgroundPosition: {
        zero: "0 0",
      },
    },
    borderWidth: {
      0.5: "0.5px",
      3: "3px",
      0: "0",
    },
  },
  plugins: [],
};
