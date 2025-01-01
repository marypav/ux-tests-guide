import {themes as prismThemes} from 'prism-react-renderer';

module.exports = {
  favicon: 'img/favicon.ico',
  title: 'UX Testing Guidelines',
  url: 'https://marypav.github.io', // Только домен
  baseUrl: '/',            // Название репозитория (или подкаталога)
  projectName: 'ux-tests-guide',          // Название репозитория
  organizationName: 'marypav',      // Ваше имя пользователя на GitHub
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', // Устанавливает документацию как корневой путь
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false, // Отключение блога (если не нужен)
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
