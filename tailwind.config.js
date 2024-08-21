/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.html", './src/**/*.js',],
  theme: {
    extend: {
      colors: {
        background: '#fafafa',
        primary: '#212121',
        secondary: '#424242'
      }
    },
  },
  plugins: [],
}

