/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: "8px",
      sm: "10px",
      tiny: "13px",
      base: "16px",
      lg: "20px",
      xl: "25px",
      "2xl": "27px",
      "3xl": "34px",
      "4xl": "39px",
    },

    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      primary: "#3B82F6",
    },
    extend: {},
  },
  plugins: [],
};
