import { ui, defaultLang, type Lang, type UIKey } from './ui';

/*
  Сайт может жить как в корне домена, так и в подпапке (GitHub Pages отдаёт
  проектные репозитории по адресу вида /portfolio). BASE_URL знает об этом,
  поэтому все ссылки строятся через него, а не склеиваются вручную.
*/
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** '/portfolio/en/about' → 'en/about' */
function stripBase(pathname: string): string {
  const withoutBase = BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname;
  return withoutBase.replace(/^\//, '');
}

export function getLangFromUrl(url: URL): Lang {
  const [maybeLang] = stripBase(url.pathname).split('/');
  if (maybeLang in ui) return maybeLang as Lang;
  return defaultLang;
}

/** t('nav.about') — строка на языке текущей страницы. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Путь с префиксом локали и базой: localizePath('/about', 'en') → '/portfolio/en/about' */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const localized = lang === defaultLang ? clean : `/${lang}${clean}`;
  return `${BASE}${localized}` || '/';
}

/** Тот же URL на другом языке — для переключателя и hreflang. */
export function switchLangPath(url: URL, target: Lang): string {
  const segments = stripBase(url.pathname).split('/').filter(Boolean);
  if (segments[0] in ui) segments.shift();
  return localizePath(`/${segments.join('/')}`, target);
}
