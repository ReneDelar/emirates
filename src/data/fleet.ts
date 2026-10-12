import type { ImageMetadata } from 'astro';
import { images } from '../assets/images';
import { dictionaries, type Lang } from '../i18n';

export interface Yacht {
  id: string;
  name: string;
  capacity: string;
  price: string;
  per: string;
  image: ImageMetadata;
  alt: string;
  bestseller: boolean;
}

const base = [
  { id: 'azimut-50', name: 'Azimut 50', guests: 17, price: '250 USD', image: images['azimut-50'], bestseller: true },
  { id: 'azimut-58', name: 'Azimut 58', guests: 20, price: '320 USD', image: images['azimut-58'], bestseller: false },
  { id: 'azimut-62', name: 'Azimut 62', guests: 25, price: '350 USD', image: images['azimut-62'], bestseller: true },
];

export function getFleet(lang: Lang): Yacht[] {
  const { cards } = dictionaries[lang];
  return base.map(({ guests, ...y }) => ({
    ...y,
    capacity: cards.capacity(guests),
    per: cards.perHour,
    alt: cards.yachtAlt(y.name),
  }));
}
