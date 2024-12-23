
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0072CE',
          dark: '#0056A3',
          light: '#E6F2FA'
        },
        secondary: {
          green: '#78BE20',
          yellow: '#FFC20E',
          red: '#E4002B'
        },
        gray: {
          dark: '#4D4D4D',
          medium: '#B3B3B3',
          light: '#E6E6E6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
      boxShadow: {
        'soft': '0 2px 4px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)',
        'medium': '0 4px 6px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.1)',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}
