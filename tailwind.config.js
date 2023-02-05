const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');
const plugin = require('tailwindcss/plugin');
const aspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
  mode: 'jit',
  darkMode: 'media',
  purge: ['./src/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        title: ['jaf-domus-titling-web', 'sans-serif'],
        sans: ['neusa-next-std', 'sans-serif'],
      },
      colors: {
        a: {
          red: '#c61235',
          pink: '#ca316d',
          yellow: '#ebd748',
          navy: '#365d95',
          blue: '#50b0de',
          green: '#5aab92',
          charcoal: '#1c1a19',
        },
      },
      screens: {
        '3xl': '1800px',
      },

      maxWidth: {
        '8xl': '1800px',
      },
    },
  },
  variants: {},
  plugins: [
    forms({ strategy: 'class' }),
    typography,
    aspectRatio,
    plugin(({ addVariant, e }) => {
      addVariant('scrolled', ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) =>
            `.scrolled .${e(`scrolled${separator}${className}`)}`,
        );
      });
    }),
  ],
};
