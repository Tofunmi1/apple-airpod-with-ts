module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    letterSpacing:{
      tight:'-.015em'
    },
    extend: {
      height:{
        'half-screen':'50vh'
      },
      fontFamily: {
        SfRegular: ['sf-pro-regular'],
        SfMedium:['sf-pro-medium'],
        SfSemiBold:['sf-pro-semi-bold'],
        SfBold:['sf-pro-bold']
      }, //end of fontFamily
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
