import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type CaseItem = {
  entry: CollectionEntry<'cases'>;
  slug: string;
  lang: Lang;
};

/** id имеет вид "ru/design-system" — язык и slug лежат в пути файла. */
function parseId(id: string): { lang: Lang; slug: string } {
  const [lang, ...rest] = id.split('/');
  return { lang: lang as Lang, slug: rest.join('/') };
}

/** Кейсы одного языка в порядке, заданном полем order. Черновики выключены в проде. */
export async function getCases(lang: Lang): Promise<CaseItem[]> {
  const all = await getCollection('cases', ({ data }) => import.meta.env.DEV || !data.draft);

  return all
    .map((entry) => ({ entry, ...parseId(entry.id) }))
    .filter((item) => item.lang === lang)
    .sort((a, b) => a.entry.data.order - b.entry.data.order);
}

/** Следующий кейс по порядку, с закольцовкой — тупика в конце страницы быть не должно. */
export function getNext(items: CaseItem[], slug: string): CaseItem | undefined {
  if (items.length < 2) return undefined;
  const index = items.findIndex((item) => item.slug === slug);
  if (index === -1) return undefined;
  return items[(index + 1) % items.length];
}
