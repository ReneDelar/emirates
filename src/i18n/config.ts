// Locale config + URL helpers. English lives at the root (/about), other
// languages under a prefix (/ru/about, /uz/about).

export const locales = ['en', 'ru', 'uz'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'en';

export function isLang(value: string | undefined): value is Lang {
  return !!value && (locales as readonly string[]).includes(value);
}

export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/')[1];
  return isLang(seg) ? seg : defaultLang;
}

/** `/ru/about` → `/about`, `/ru` → `/`. Leaves default-language paths untouched. */
export function stripLang(pathname: string): string {
  const seg = pathname.split('/')[1];
  if (!isLang(seg) || seg === defaultLang) return pathname || '/';
  const rest = pathname.slice(seg.length + 1);
  return rest === '' ? '/' : rest;
}

/** Prefix an internal path (may contain a #hash) with the language segment. */
export function localizePath(path: string, lang: Lang): string {
  return lang === defaultLang ? path : `/${lang}${path}`;
}

/** getStaticPaths for pages under src/pages/[...lang]/ — one build per language. */
export function langStaticPaths() {
  return locales.map((lang) => ({ params: { lang: lang === defaultLang ? undefined : lang } }));
}
