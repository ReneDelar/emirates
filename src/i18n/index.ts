import { getLangFromUrl, localizePath, type Lang } from './config';
import en, { type Dict } from './locales/en';
import ru from './locales/ru';
import uz from './locales/uz';

export * from './config';
export type { Dict };

export const dictionaries: Record<Lang, Dict> = { en, ru, uz };

/** Per-request i18n context: current language, its dictionary and a path localizer. */
export function useI18n(url: URL) {
  const lang = getLangFromUrl(url);
  return {
    lang,
    t: dictionaries[lang],
    path: (href: string) => localizePath(href, lang),
  };
}
