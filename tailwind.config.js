/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html',
    './pages/templates/**/*.html',
    './static/js/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#e6f7e6',
          100: '#cceecc',
          200: '#99dd99',
          300: '#66cc66',
          400: '#33bb33',
          500: '#00aa00',
          600: '#008800',
          700: '#006600',
          800: '#004400',
          900: '#002200',
        },
        'secondary': {
          50: '#ffe6e6',
          100: '#ffcccc',
          200: '#ff9999',
          300: '#ff6666',
          400: '#ee3333',
          500: '#dd0000',
          600: '#bb0000',
          700: '#990000',
          800: '#770000',
          900: '#550000',
        },
        'accent': {
          50: '#fffef5',
          100: '#fffceb',
          200: '#fff8d6',
          300: '#fff4c2',
          400: '#fff0ad',
          500: '#ffec99',
          600: '#ffd700',
          700: '#daa520',
          800: '#b8860b',
          900: '#966b08',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
