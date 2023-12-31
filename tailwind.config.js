/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        animatedgradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        gradient: "animatedgradient 6s ease infinite alternate",
      },
      colors: {
        primary: "#1B1B1F",
        secondary: "#3F96FE",
        accent: "#6A52FF",
        white: "#FCFCFC",
        beige: "#F8F7F4",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
