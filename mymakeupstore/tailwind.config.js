/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "poppins",
      secondary: "krona one",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#ffd470",
        green: "#1e3329",
        dark: " #0c080b",
        white: {
          DEFAULT: "#fafafa",
          100: "#b8b8b8",
        },
      },
    },
  },
  plugins: [],
};
