import '~/main.css';
import '~/transitions.css';
import VueAudio from '~/vue-audio-better';
import aos from './aos';

const SCROLL_OFFSET = 10;

export default function main(Vue, { head }) {
  Vue.directive('aos', aos);
  Vue.use(VueAudio);

  const files = require.context('./', true, /\.vue$/i);

  files.keys().forEach((key) => {
    const path = key
      .split('/')
      .splice(1)
      .slice(0, -1)
      .map((part, index) => {
        if (index > 0 || part.substr(-1) !== 's') {
          return part;
        }

        return part.charAt(0).toUpperCase() + part.substr(1, part.length - 2);
      });

    const filename = key.split('/').pop().split('.')[0];

    if (filename !== 'index') {
      path.push(filename);
    }

    Vue.component(
      path
        .join('')
        .replace(/[[\]:]+/g, '-')
        .replace(/(^-+|-+$)/g, ''),
      files(key).default,
    );
  });

  head.link.push({
    rel: 'stylesheet',
    href: '/ie.css',
  });

  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.typekit.net/xce1chf.css',
  });
  head.meta.push(
    {
      name: 'og:url',
      content: process.env.FRONTEND_URI,
    },
    {
      name: 'og:image',
      content: `${process.env.FRONTEND_URI}/ogmeta.png`,
    },
    {
      name: 'twitter:image',
      content: `${process.env.FRONTEND_URI}/ogmeta.png`,
    },
    {
      name: 'og:site_name',
      content: 'Ongaku',
    },
    {
      name: 'og:description',
      content: ` Ongaku |   Ongaku is about connecting music to Web 3. The purpose and goal of
          Ongaku is to empower people to be as musically creative as they can
          with their own personal NFT.`,
    },
    {
      name: 'twitter:card',
      content: ` Ongaku |   Ongaku is about connecting music to Web 3. The purpose and goal of
          Ongaku is to empower people to be as musically creative as they can
          with their own personal NFT.`,
    },
  );

  if (process.isClient) {
    const el = document.scrollingElement || document.documentElement;
    let ticking = false;

    document.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (el.scrollTop >= SCROLL_OFFSET) {
            el.classList.add('scrolled');
          } else {
            el.classList.remove('scrolled');
          }
          ticking = false;
        });

        ticking = true;
      }
    });
  }
}
