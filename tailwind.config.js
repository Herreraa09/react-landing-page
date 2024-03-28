/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "Pink": "hsl(322, 100%, 66%)",
        "Very-Pale-Cyan": "hsl(193, 100%, 96%)",
        "Very-Dark-Cyan": "hsl(192, 100%, 9%)",
       "Grayish-Blue": "hsl(208, 11%, 55%)"
      },
      fontFamily:{
        Title: ["Poppins", "sans-serif"],
        Default: ["Open Sans", "sans-serif"]
      },
      boxShadow:{
        "simple-shadow": " 0px 1px 5px rgba(0,0,0,0.3)",
        "shadow-special": "-5px -8px 8px rgba(0,0,0,0.2)"
      },
      backgroundImage:{
        "hero-bg-mobile": "url(./assets/images/bg-hero-mobile.svg)",
        "hero-bg-desktop": "url(./assets/images/bg-hero-desktop.svg)"
      }
    },
  },
  plugins: [],
}

