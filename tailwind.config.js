/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#f9f9f9",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f3f3f3",
        "surface-container": "#eeeeee",
        "surface-container-high": "#e8e8e8",
        "surface-container-highest": "#e2e2e2",
        primary: "#000000",
        "primary-container": "#3b3b3b",
        "on-primary": "#e2e2e2",
        "on-surface": "#1b1b1b",
        "outline-variant": "#c6c6c6",
        secondary: "#5e5e5e",
      },
      fontFamily: {
        serif: ['Newsreader', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'ambient': '0 20px 40px rgba(27, 27, 27, 0.04)',
      }
    },
  },
  plugins: [],
}
