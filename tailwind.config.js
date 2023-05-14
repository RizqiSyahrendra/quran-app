const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#040C23',
        "secondary": '#121931',
        "info": "#A44AFF",
        "warning": "#F9B091",
        "font-primary": "#FFFFFF",
        "font-secondary": "#A19CC5",
        "font-info": "#A44AFF",
        "font-neutral1": "#091945",
        "separator": "#BBC4CE"
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
};

module.exports = withMT(tailwindConfig);
