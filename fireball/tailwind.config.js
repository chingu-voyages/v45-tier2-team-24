/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
     extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      screens: {
        phone: { max: "425px" },
        tablet: "426px",
        desktop: "769px",
    },
    }
  },
  plugins: [],
}
