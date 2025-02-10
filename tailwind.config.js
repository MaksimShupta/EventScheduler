/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#33BFCC", // Turquoise
                secondary: "#A47864", // Brown
                accent: "#E3D5CA", // Light beige
                bgDark: "#1E1E1E", // Main dark background
                bgLight: "#282828", // Slightly lighter dark background
                light: "#F5F5F5", // Almost white for contrast
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"], // Google Font "Inter"
            },
        },
    },
    plugins: [daisyui],
};
