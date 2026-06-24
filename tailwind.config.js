/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Google Sans Flex"', "sans-serif"],
        serif: ['"IBM Plex Serif"', "serif"],
      },
      colors: {
        background: "#0B0B09",
        surface: "#151310",
        card: "#1D1B18",
        primary: "#D7C7A4",
        text: "#E8E3D5",
        secondary: "#B7B09F",
        muted: "#8D8677",
        forest: "#647055",
      },
      boxShadow: {
        ambient: "0 25px 60px rgba(0,0,0,.18)",
        nav: "0 20px 50px rgba(0,0,0,.35)",
      },
    },
  },
  plugins: [],
};
