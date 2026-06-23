import type { ImageMetadata } from 'astro';
import { images } from '../assets/images';

export interface Yacht {
  name: string;
  capacity: string;
  price: string;
  per: string;
  image: ImageMetadata;
  alt: string;
  bestseller: boolean;
}

export const fleet: Yacht[] = [
  { name: 'Azimut 50', capacity: 'Capacity: 17 guests', price: '250 USD', per: ' / 1 hour', image: images['azimut-50'], alt: 'Azimut 50 yacht', bestseller: true },
  { name: 'Azimut 58', capacity: 'Capacity: 20 guests', price: '320 USD', per: ' / 1 hour', image: images['azimut-58'], alt: 'Azimut 58 yacht', bestseller: false },
  { name: 'Azimut 62', capacity: 'Capacity: 25 guests', price: '350 USD', per: ' / 1 hour', image: images['azimut-62'], alt: 'Azimut 62 yacht', bestseller: true },
];
