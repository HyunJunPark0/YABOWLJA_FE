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
        red: '#FF3535',
        orange: '#FF8A00',
        yellow: '#FFC700',
        green: '#00C850',
        skyblue: '#0089D7',
        blue: '#002D84',
        purple: '#8400EC',
        black: '#222222',
        white: '#FFFFFF',
        orangebutton: '#FF6B00',
      },
    },
  },
  plugins: [],
};
