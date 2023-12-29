/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        card: 'var(--card-color)',
        text: 'var(--text-color)'
      },
      fontFamily: {
        Gilroy: ['Gilroy', 'sans-serif'],
        GilroyBold: ['Gilroy Bold', 'sans-serif'],
        GilroySemibold: ['Gilroy Semibold', 'sans-serif'],
        Urbanist: ['Urbanist', 'sans-serif'],
        Urbanist_Italic: ['Urbanist_Italic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
