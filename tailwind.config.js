/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: '#1abc9c',
        secondary: {
          50:'#2c3e50',
          100:'#1a252f'
        }
      }
    },
    
    screens: {
      "2xl": "1320px"
    },
    container: {
      center: true
    }
  },
  plugins: [],
}

