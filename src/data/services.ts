import type { ImageMetadata } from 'astro';
import { images } from '../assets/images';
import { dictionaries, type Lang } from '../i18n';

export interface Service {
  id: string;
  category: string;
  title: string;
  image: ImageMetadata;
  alt: string;
  short: string; // home tile copy
  full: string; // excursions row copy
}

const base = [
  { id: 'sightseeing', image: images['dubai-sightseeing'] },
  { id: 'fishing', image: images['yacht-fishing'] },
  { id: 'water-sports', image: images['water-sports'] },
  { id: 'yacht-party', image: images['corporate-cruise'] },
  { id: 'romantic', image: images['romantic-cruise'] },
  { id: 'corporate', image: images['luxury-yacht'] },
] as const;

export function getServices(lang: Lang): Service[] {
  const text = dictionaries[lang].services;
  return base.map((s) => ({ ...s, ...text[s.id] }));
}
