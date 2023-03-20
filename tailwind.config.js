/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    extend: {
      screens: {
        "2xl": "747px",
      },
      colors: {
        primary: "#14b8a6",
      },
    },
  },
  plugins: [],
};
