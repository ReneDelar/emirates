import type { ImageMetadata } from 'astro';
import { images } from '../assets/images';
import { dictionaries, type Lang } from '../i18n';

export interface Region {
  id: string;
  title: string;
  image: ImageMetadata;
  alt: string;
  text: string;
}

const base = [
  { id: 'dubai-marina', image: images['dubai-sightseeing'] },
  { id: 'persian-gulf', image: images['yacht-fishing'] },
  { id: 'palm-jumeirah', image: images['luxury-yacht'] },
  { id: 'musandam', image: images['turquoise-sea'] },
] as const;

export function getRegions(lang: Lang): Region[] {
  const text = dictionaries[lang].regions;
  return base.map((r) => ({ ...r, ...text[r.id] }));
}
