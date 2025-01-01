import {themes as prismThemes} from 'prism-react-renderer';

module.exports = {
  title: 'UX Testing Guidelines',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', 
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
      },
    ],
  ],
  themeConfig: {
    hideNavbar: false, 
    navbar: {
      title: 'UX Testing Guidelines',
      logo: {
        alt: 'Logo',
        src: 'img/favicon.ico',
      },
    },
  },
  url: 'https://marypav.github.io', // Только домен
  baseUrl: 'ux-tests-guide',
  organizationName: 'marypav',      // Ваше имя пользователя на GitHub
  favicon: 'img/favicon.ico',
  projectName: 'ux-tests-guide',          // Название репозитория
  favicon: '/img/favicon.ico',
};

export default {
  title: 'UX Testing Guidelines',
  url: 'https://marypav.github.io',
  baseUrl: '/ux-tests-guide/',
  projectName: 'ux-tests-guide',
  favicon: '/img/favicon.png',
  noIndex: false, // Defaults to `false`
  tagline: 'UX Testing Guidelines',
  themeConfig: {
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'UX Testing Guidelines',
      logo: {
        alt: 'UX Logo',
        src: '/img/favicon.ico',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © 2023 UX Testing Guidelines. Built with <a href="https://docusaurus.io">Docusaurus</a>, open source, and free to use, forever.`, // You can also put own HTML here
    },
  },
  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', // Базовый путь для документации
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false, // так как блог не нужен
      },
    ],
  ],
};
