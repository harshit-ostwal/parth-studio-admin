/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: {
          DEFAULT: 'var(--background-color)',
          text: 'var(--background-text)'
        },
        primary: {
          DEFAULT: 'var(--primary-color)',
          text: 'var(--primary-text)'
        },
        secondary: {
          DEFAULT: 'var(--secondary-color)',
          text: 'var(--secondary-text)'
        },
        destructive: {
          DEFAULT: 'var(--destructive-color)',
          text: 'var(--destructive-text)'
        },
        accent: {
          DEFAULT: 'var(--accent-color)',
          text: 'var(--accent-text)'
        },
        card: 'var(--card-color)',
      },
      fontFamily: {
        Gilroy: ['Gilroy', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}