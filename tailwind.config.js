/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('src/assets/img/hero-bg.jpg')",
        'contact-bg':"url('src/assets/img/contact-bg.jpg')"
      }
    },
  },
  plugins: [],
}

