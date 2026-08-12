// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export default defineConfig({
  /*
    GitHub Pages отдаёт проектный репозиторий по адресу <логин>.github.io/<репо>.
    Когда появится свой домен: site — на него, base — убрать.
  */
  site: 'https://tallercreator.github.io',
  base: '/portfolio',
  integrations: [react(), mdx()],
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    routing: {
      // RU живёт в корне (/case/travel), EN — с префиксом (/en/case/travel)
      prefixDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
