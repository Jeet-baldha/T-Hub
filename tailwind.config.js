/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '500px',
      },

      boxShadow:{
        sq: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'
      }
    },
    
  },
  plugins: [],
}

