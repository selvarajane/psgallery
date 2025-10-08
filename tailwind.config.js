/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryBg: '#FFFFFF', // Pure White
        primaryText: '#000000', // Jet Black
        secondaryText: '#333333', // Charcoal Gray
        accentGold: '#C6A664', // Rich Gold
        darkBronze: '#8B6B3F', // Deep Bronze
        softBeige: '#E8D5B7', // Light Sand
        borderLine: '#D9D9D9', // Cool Gray
      },
      boxShadow: {
        bronze: '0 6px 20px rgba(139, 107, 63, 0.25)',
        beige: '0 4px 14px rgba(232, 213, 183, 0.35)',
      },
    },
  },
  plugins: [],
};
