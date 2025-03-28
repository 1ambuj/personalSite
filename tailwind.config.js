/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url(/img/hero-bg.jpg)",
        'contact-bg':"url('/img/contact-bg.jpg')"
      }
    },
  },
  plugins: [],
}

