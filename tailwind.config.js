/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        gray94: '#949494',
        gray8A: '8A8A8A',
        Red: '#FF3535',
        Orange: '#FF8A00',
        Yellow: '#FFC700',
        Green: '#00C850',
        SkyBlue: '#0089D7',
        Blue: '#002D84',
        Purple: '#8400EC',
        Black: '#222222',
        White: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
