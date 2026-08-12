import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/*
  Один кейс = один файл на язык: src/content/cases/<lang>/<slug>.mdx
  id получается вида "ru/travel" — язык и slug разбираются в шаблоне страницы.
*/
const cases = defineCollection({
  loader: glob({ base: './src/content/cases', pattern: '**/*.mdx' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /* Порядок на главной задан вручную: первым идёт дизайн-система. */
      order: z.number(),
      /* Одна строка результата — она же крупная строка в шапке кейса. */
      outcome: z.string(),
      /* Аннотация в карточке на главной. Отличается от outcome: описывает задачу. */
      summary: z.string(),
      role: z.string(),
      timeline: z.string().optional(),
      team: z.string().optional(),
      year: z.string().optional(),
      tags: z.array(z.string()).default([]),
      /* Показать дисклеймер о перерисованных данных. */
      confidential: z.boolean().default(false),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      /* Короткий формат — карточка на главной меньше, страница компактнее. */
      compact: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { cases };
