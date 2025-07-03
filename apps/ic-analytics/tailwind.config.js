const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5c6ac4',
        secondary: {
          100: '#f0fdf4',
          200: '#dcfce7',
          300: '#bbf7d0',
          // ... other shades
        },
      },
    },
  },
  plugins: [],
};
