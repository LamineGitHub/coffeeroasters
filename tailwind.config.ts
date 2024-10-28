/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        light: 'var(--color-light)',
        neutral: 'var(--color-neutral)',
      },
      fontFamily: {
        'fraunces': 'var(--font-fraunces)',
        'barlow': 'var(--font-barlow)',
      },
      screens: {
        'tablet': '768px',
        'desktop': '1440px',
      },
    },
  },
  plugins: [],
}

