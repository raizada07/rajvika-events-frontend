import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
        montserratLight: ['Montserrat', 'sans-serif'], // Specific for light weight if needed
      },
      colors: {
        'gold-metallic': '#D4AF37',
        'black': '#000000',
        'pearl-white': '#F8F8F8', // A light off-white
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;