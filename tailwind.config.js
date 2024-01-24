/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        desktop: '1440px',
        tablet: '801px',
        transition: '700px',
        mobile: '451px',
      },
      colors: {
        primary: {
          cyan: 'hsl(180, 66%, 49%)',
          darkViolet: 'hsl(257, 27%, 26%)',
          cyanHover: 'hsl(180, 66%, 69%)',
        },
        secondary: {
          red: 'hsl(0, 87%, 67%)',
        },
        neutral: {
          gray: 'hsl(0, 0%, 90%)',
          grayishViolet: 'hsl(257, 7%, 63%)',
          veryDarkBlue: 'hsl(255, 11%, 22%)',
          veryDarkViolet: 'hsl(260, 8%, 14%)',
        }
      }
    },
  },
  plugins: [],
}

