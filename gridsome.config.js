const tailwind = require('tailwindcss');
const nesting = require('tailwindcss/nesting');

module.exports = {
  siteName: `Ongaku
  `,
  siteUrl: process.env.FRONTEND_URI,
  icon: {
    favicon: './src/favicon.png',
    touchicon: './src/favicon.png',
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwind, nesting],
      },
    },
  },
  plugins: [
    'gridsome-plugin-robots',
    '@gridsome/plugin-sitemap',
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: '',
        enabled: true,
        debug: true,
      },
    },
  ],
};
