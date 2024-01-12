import type {Config} from 'tailwindcss';
const plugin = require('tailwindcss/plugin');

interface Theme {
  colors: Record<string, string | Record<string, string>>;
}

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roobert: ['var(--font-roobert)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      primary: '#009E79',
      secondary: '#33436B',
      accent: '#18C39B',
      info: '',
      success: '',
      warning: '#F6C77D',
      error: '#C25454',
      'background-primary': '#FBFBFB',
      'chip-default-background': '#b2dfdb29',
      white: '#FFFFFF',
      gray: '#68789F',
      divider: 'rgba(178, 223, 219, 0.8)',
      'select-divider': 'rgba(84, 101, 142, 0.1)',
      'light-blue': '#54658E',
      'dark-blue': '#222835',
      'light-green': '#B2DFDB',
      'lighter-green': '#b2dfdb4d',
      'light-orange': 'rgba(246, 199, 125, 0.16)',
      'light-gray': {
        100: 'rgba(245, 245, 245, 1)',
        200: 'rgba(225, 225, 225, 1)',
        300: 'rgba(185, 185, 185, 1)',
      },
      'icon-hover': {
        primary: 'rgba(0, 158, 121, 0.1)',
        secondary: 'rgba(51, 67, 107, 0.1)',
        'light-blue': 'rgba(84, 101, 142, 0.1)',
        white: '#ffffff4d',
        default: 'rgba(34, 40, 53, 0.1)',
      },
      'ripple-light': 'rgba(0, 0, 0, 0.5)',
      'ripple-dark': 'rgba(255, 255, 255, 0.5)',
    },
  },
  plugins: [
    plugin(({addBase, theme}: any) => {
      addBase({
        '.scrollbar::-webkit-scrollbar': {
          width: '5px',
          height: '5px',
          borderRadius: '8px',
        },
        '.scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: theme('colors.light-green'),
          borderRadius: '30px',
        },
        '.scrollbar::-webkit-scrollbar-track-piece': {
          borderRadius: '30px',
        },
        '.react-datepicker': {
          border: '0px !important',
          shadow: 'unset !important',
        },
        '.react-datepicker__header': {
          padding: '0px !important',
        },
      });
    }),
  ],
};
export default config;
