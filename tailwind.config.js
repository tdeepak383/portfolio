/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      // Animation
      animation: {
        marquee: "marquee 20s linear infinite",
      },

      // Keyframes
      keyframes: {
        marquee: {
          "100%": { transform: "translateX(0%)" },
          "0%": { transform: "translateX(-50%)" },
        },
      },

    },
  },
  plugins: [],
}

