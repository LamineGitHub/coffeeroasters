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
      spacing: {
        22: '85px',
      },
      fontFamily: {
        'fraunces': 'var(--font-fraunces)',
        'barlow': 'var(--font-barlow)',
      },
      backgroundImage: {
        'home-desktop-hero': "url('/assets/home/desktop/image-hero-coffeepress.jpg')",
        'home-tablet-hero': "url('/assets/home/tablet/image-hero-coffeepress.jpg')",
        'home-mobile-hero': "url('/assets/home/mobile/image-hero-coffeepress.jpg')",
        'about-desktop-hero': "url('/assets/about/desktop/image-hero-whitecup.jpg')",
        'about-tablet-hero': "url('/assets/about/tablet/image-hero-whitecup.jpg')",
        'about-mobile-hero': "url('/assets/about/mobile/image-hero-whitecup.jpg')",
        'plan-desktop-hero': "url('/assets/plan/desktop/image-hero-blackcup.jpg')",
        'plan-tablet-hero': "url('/assets/plan/tablet/image-hero-blackcup.jpg')",
        'plan-mobile-hero': "url('/assets/plan/mobile/image-hero-blackcup.jpg')",
        'mobile-menu-gradient': 'linear-gradient(0deg, rgba(254, 252, 247, 0.5) 0%, rgba(254, 252, 247, 1) 60%)',
      },
      screens: {
        'desktop': '1440px',
      },
    },
  },
  plugins: [],
}

