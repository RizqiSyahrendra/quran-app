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
      fontFamily: {
        quranIndopak: "IndoPak",
        quranLpmq: "Lpmq",
      },
      colors: {
        "primary": "var(--color-primary)",
        "secondary": "var(--color-secondary)",
        "info": "var(--color-info)",
        "warning": "var(--color-warning)",
        "font-primary": "var(--color-font-primary)",
        "font-secondary": "var(--color-font-secondary)",
        "font-info": "var(--color-font-info)",
        "button-font1": "var(--color-button-font1)",
        "image-font": "var(--color-image-font)",
        "header-font": "var(--color-header-font)",
        "menu-font": "var(--color-menu-font)",
        "menu-font-active": "var(--color-menu-font-active)",
        "tab-active": "var(--color-tab-active)",
        "tab-inactive": "var(--color-tab-inactive)",
        "separator": "var(--color-separator)",
        "separator2": "var(--color-separator2)",
        "separator3": "var(--color-separator3)",
      },
      boxShadow: {
        "bottombar": "var(--shadow-bottombar)"
      }
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
