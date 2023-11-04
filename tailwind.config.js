/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainMagenta: "#ec1c5a",
        mainMagentaLight: "#ea5984",
        mainTeal: "#42b69b",
        mainTealLight: "#5cccb2",
        mainBlue: "#3d81c2",
        mainOrange: "#fcb71e",
        mainOrangeLight: "#f9ce6f",
        mainOlive: "#cce64e",
        mainOliveLight: "#e7fc7c",
        mainPurple: "#8f57a2",
      },
      fontFamily: {
        toyBox: '"ToyBox"',
        toyBox2: '"ToyBox2"',
        cartoon: '"Cartoon"',
      },
    },
  },
  plugins: [],
};
