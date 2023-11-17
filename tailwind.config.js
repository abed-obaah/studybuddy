/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: "'Figtree', sans-serif",
        cabin: "'Cabin', sans-serif",
        sans: "'DM Sans', sans-serif",
        alegreya: "'Alegreya Sans SC', sans-serif",
        space: "'Space Grotesk', sans-serif",
        openSans: "'Open Sans', sans-serif"
      },
      backgroundColor: {
        'custom-brown': '#CEB082', // Replace with your own color and class name
        'custom-purple': '#864FD4', // Replace with your own color and class name
        'custom-green': '#18C840', // Replace with your own color and class name
        'custom-dgreen': '#60B084',
        'custom-yellow': '#FFCC00', // Replace with your own color and class name
        'green-primary':'#18C840',
        'Neutral':'#F8FAFC',
                'Primary':'#18C840',
                'main-color':'#8e44ad',
            'red':'#e74c3c',
            'orange':'#f39c12',
            'light-color':'#888',
            'light-bg':'#eee',
            'black':'#2c3e50',
            'white':'#fff'
      },
      textColor: {
        'custom-dark-text': '#0D1A26',
        'red-500':'rgb(239 68 68)',
        'primary':'#18C840',
      },
      padding: {
        'custom-padding': '11.5rem'
      },
      height:{
        'custom-card-height':'21rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}