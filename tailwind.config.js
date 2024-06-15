/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
   extend: {
    colors: {
      hoverColor: "rgb(103 200 209)",
      brightColor: " rgb(103 200 209)",
      backgroundColor: "rgb(19 27 47)",
    },
  },
  },
  plugins: [],
}

