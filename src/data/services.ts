import type { ImageMetadata } from 'astro';
import { images } from '../assets/images';

export interface Service {
  id: string;
  category: string;
  title: string;
  image: ImageMetadata;
  alt: string;
  short: string; // home tile copy
  full: string; // excursions row copy
}

export const services: Service[] = [
  {
    id: 'sightseeing',
    category: 'Sightseeing',
    title: 'Dubai Sightseeing Cruises',
    image: images['dubai-sightseeing'],
    alt: 'Dubai sightseeing cruise along the coastline',
    short: 'Glide past the iconic skyline — Palm Jumeirah, Burj Al Arab and Dubai Marina — on a luxury yacht.',
    full: 'Have you ever dreamed of taking a tour on the water and enjoying the astonishing views of Dubai? Make a journey of luxury and discovery with sightseeing yacht cruises in Dubai with Emirates Fishing Tour. Renting a yacht for a sightseeing cruise in Dubai is very easy. During the excursion, you will have the opportunity to see the iconic sights of Dubai, such as Jumeirah Beach Residence, Palm Jumeirah island, Burj Al Arab hotel, the new Royal Atlantis, Dubai Creek, The World, Dubai Marina and much more.',
  },
  {
    id: 'fishing',
    category: 'Fishing',
    title: 'Yacht Fishing',
    image: images['yacht-fishing'],
    alt: 'Yacht fishing trip in Dubai waters',
    short: 'Our pros know the best spots in the UAE — enjoy a great catch with all equipment provided.',
    full: 'Fishing in the UAE should be approached thoroughly. After all, you need to know the right places for good fishing, and be consulted in advance about equipment and other technical issues. Our team of professionals will be happy to inform you and familiarize you with the details of the tour. We know the best fishing spots and can provide you with a unique experience of fishing. Enjoy a great catch in the best fishing spots of Dubai!',
  },
  {
    id: 'water-sports',
    category: 'Water sports',
    title: 'Yacht Water Sports',
    image: images['water-sports'],
    alt: 'Water sports activities from a yacht in Dubai',
    short: 'Water skiing, jet skiing, diving and snorkeling — unforgettable adventures and pure adrenaline.',
    full: 'Dubai is not only about luxurious restaurants, boutiques or skyscrapers with stunning views. Dubai is also an opportunity to practice water sports on a yacht in Dubai. Water skiing, jet skiing, diving, snorkeling are at your service. Experience unforgettable adventures and powerful adrenaline!',
  },
  {
    id: 'yacht-party',
    category: 'Celebration',
    title: 'Yacht Party',
    image: images['corporate-cruise'],
    alt: 'Yacht party celebration on deck in Dubai',
    short: 'Whatever the occasion, a wide choice of yachts and a varied menu make your party unforgettable.',
    full: 'No matter the occasion, we will be happy to organize a fun party for you on a yacht in Dubai. Thanks to a wide choice of yachts and additional options, your yacht party will be held at a high level. A varied menu of food and drinks will make your party truly unforgettable!',
  },
  {
    id: 'romantic',
    category: 'Romantic',
    title: 'Romantic Cruise in Dubai',
    image: images['romantic-cruise'],
    alt: 'Romantic yacht cruise at sunset in Dubai',
    short: 'The perfect way to express your feelings — picturesque views, romance and tranquility for two.',
    full: 'Renting a yacht for a romantic dinner is the perfect way to express your feelings and spend time with your loved one. We are happy to give you the ability to enjoy the picturesque views, relax and immerse yourself in the atmosphere of romance and tranquility. Our company has specially selected yachts for a romantic cruise. Please take advantage of this unique opportunity. Spend time surrounded by amazing views with the feasibility to capture this moment in photographs!',
  },
  {
    id: 'corporate',
    category: 'Corporate',
    title: 'Corporate Cruise in Dubai',
    image: images['luxury-yacht'],
    alt: 'Luxury yacht for corporate cruises in Dubai',
    short: 'More than a venue — build team camaraderie and leave a lasting impression on your guests.',
    full: 'The corporate yacht cruise in Dubai is more than just a location for your event. It is an opportunity to create meaningful connections, build team camaraderie and leave a lasting impression on your guests. Our Dubai yacht charter company will work with you to tailor a cruise to suit your needs, whether you are hosting a business meeting, team building event, product presentation or corporate celebration.',
  },
];
