

import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'UX Tests Handbook',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          sidebarCollapsed: false,
          routeBasePath: '/',
          breadcrumbs: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
      respectPrefersColorScheme: true,
    },
    metadata: [
      {
        name: 'keywords',
        content:
          'UX Interview Handbook, UX Interview Questions, UX Interview Answers, UX Interview Preparation, UX research questions, UX design behavioral Interview Questions, Design Exercise Interview, UX Whiteboard Challenge Examples, User, Experience, Design, Research, Product, Interview, Preparation, Questions, Answers, design exercise interview',
      },
    ],
  }),
};

export default {
  title: 'UX Testing Guidelines',
  url: 'https://docusaurus.io',
  baseUrl: '/',
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

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: 'UX Testing Guidelines',
      logo: {
        alt: 'Site Logo',
        src: '/img/favicon.ico',
        width: 32,
        height: 32,
      },
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
          routeBasePath: '/',
        },
        blog: false,
      },
    ],
  ],
};
