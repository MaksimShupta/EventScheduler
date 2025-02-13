/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#1E1E1E", // Main dark background
                text: "#F5F5F5", // Almost white for contrast
                accent: "#33BFCC", // Turquoise
                brown1: "#9E7A67",
                brown2: "#E3D5CA",
                bgDark: "#1E1E1E", // Main dark background
                bgLight: "#282828", // Slightly lighter dark background
                bgInput: "#353535",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"], // Google Font "Inter"
            },
            backgroundImage: {
                diagonal:
                    "linear-gradient(135deg, rgba(51,191,204,1) 50%, rgba(40,40,40,1) 50%)",
            },
        },
    },
    plugins: [daisyui],
};
