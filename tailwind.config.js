// tailwind.config.js (ESM)
import colors from 'tailwindcss/colors';

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
      },
    },
  },
  plugins: [],
};
