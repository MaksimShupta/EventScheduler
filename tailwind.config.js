/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#1E1E1E",
      text: "#F5F5F5",
      accent: "#61BDCA",
      brown1: "#9E7A67",
      brown2: "#E3D5CA",
    },
  },
  plugins: [daisyui],
};
