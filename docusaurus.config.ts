import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: 'Draupnir Documentation',
  tagline: 'Draupnir Documentation Website',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://the-draupnir-project.github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/draupnir-documentation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'the-draupnir-project', // Usually your GitHub org/user name.
  projectName: 'draupnir-documentation', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

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
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          docItemComponent: "@theme/ApiItem",  // Derived from docusaurus-theme-openapi
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/the-draupnir-project/draupnir-documentation/tree/main/',
          routeBasePath: '/',
          async sidebarItemsGenerator({ defaultSidebarItemsGenerator, ...args }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            // Remove the api sidebar items from the main sidebar (id contains "api/" as the first part)
            const filteredSidebarItems = sidebarItems.filter((item) => {
              if (item.type === 'category') {
                return !item.items.some((subItem) => {
                  if (subItem.type === 'doc') {
                    return subItem.id.startsWith('api/');
                  }
                  return false; // Keep other types of items
                });
              }
              if (item.type === 'doc') {
                return !item.id.startsWith('api/');
              }
              return true; // Keep other types of items
            });
            return filteredSidebarItems;
          },
        },
        blog: false,
        pages: false,
        //{
        //  showReadingTime: true,
        //  // Please change this to your repo.
        //  // Remove this to remove the "edit this page" links.
        //  editUrl:
        //    'https://github.com/the-draupnir-project/Draupnir',
        //},
        theme: {
          customCss: './src/css/custom.css',
        },

      } satisfies Preset.Options,
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    //image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Draupnir Documentation',
      logo: {
        alt: 'Draupnir Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://github.com/the-draupnir-project/Draupnir',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Matrix',
              href: 'https://matrix.to/#/#draupnir:matrix.org',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/the-draupnir-project/Draupnir',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Draupnir Project, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'I9VD7VPVD9',

      // Public API key: it is safe to commit it
      apiKey: '234f6dbf8b44abc0ee75f4f8a750d8e4',

      indexName: 'the-draupnir-projectio',

      // Optional: see doc section below
      // contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //  from: '/docs/', // or as RegExp: /\/docs\//
      //  to: '/',
      //},

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: true,

      //... other Algolia params
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          draupnir: {
            specPath: "api/draupnir-openapi.yaml",
            outputDir: "docs/api",
            sidebarOptions: {
              groupPathsBy: "tag"
            },
            hideSendButton: true,
            // They are mostly confusing
            showSchemas: false
          } satisfies OpenApiPlugin.Options,
        }
      },
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"]
};

export default config;
