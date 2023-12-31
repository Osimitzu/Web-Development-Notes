// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Dev Notes",
  tagline:
    "Personal notes about web development and everything that I've learned about it.",
  favicon: "img/dinoFavicon.ico",

  // Set the production url of your site here
  url: "https://web-development-notes.netlify.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Osimitzu", // Usually your GitHub org/user name.
  projectName: "Web Development Notes", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Home",
        logo: {
          alt: "My Site Logo",
          src: "img/gorilla.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "right",
            label: "Notes",
          },
          // {
          //   type: "docSidebar",
          //   sidebarId: "frontendSidebar",
          //   position: "right",
          //   label: "Frontend",
          // },
          { to: "/blog", label: "Blog", position: "right" },
          // {
          //   href: "https://github.com/Osimitzu/Web-Development-Notes",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                label: "Portfolio",
                href: "https://osiriscontreras.com",
              },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/in/osimitzu/",
              },
              {
                label: "GitHub",
                href: "https://github.com/Osimitzu",
              },
            ],
          },
          {
            title: "Blog",
            items: [
              {
                label: "Personal Blog",
                to: "/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Osiris Contreras`,
      },
      prism: {
        theme: prismThemes.oneDark,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
