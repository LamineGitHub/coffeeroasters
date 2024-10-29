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
      backgroundImage: {
        'home-desktop-hero-bg': "url('/assets/home/desktop/image-hero-coffeepress.jpg')",
        'home-tablet-hero-bg': "url('/assets/home/tablet/image-hero-coffeepress.jpg')",
        'home-mobile-hero-bg': "url('/assets/home/mobile/image-hero-coffeepress.jpg')",
      },
      screens: {
        'desktop': '1440px',
      },
    },
  },
  plugins: [],
}

