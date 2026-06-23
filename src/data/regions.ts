import type { ImageMetadata } from 'astro';
import { images } from '../assets/images';

export interface Region {
  id: string;
  title: string;
  image: ImageMetadata;
  alt: string;
  text: string;
}

export const regions: Region[] = [
  {
    id: 'dubai-marina',
    title: 'Dubai Marina & Coast',
    image: images['dubai-sightseeing'],
    alt: 'Dubai Marina coastline',
    text: "Calm inshore waters along JBR, Palm Jumeirah and the Marina make this the friendliest region for families and shorter trips. Light tackle and a relaxed pace, with common catches like queenfish and barracuda close to the skyline.",
  },
  {
    id: 'persian-gulf',
    title: 'Persian Gulf — Deep Sea',
    image: images['yacht-fishing'],
    alt: 'Deep-sea fishing in the Persian Gulf',
    text: 'Head offshore for serious big-game trolling. Kingfish, tuna and sailfish run these waters, and the action is best on full-day charters with a licensed captain who knows where the fish are holding. Bring your appetite for the fight.',
  },
  {
    id: 'palm-jumeirah',
    title: 'Palm Jumeirah Waters',
    image: images['luxury-yacht'],
    alt: 'Yacht near Palm Jumeirah',
    text: "Sheltered reefs and drop-offs near the Palm and Atlantis hold plenty of life. This is prime bottom-fishing territory for grouper and snapper, all within easy reach of the shore and framed by Dubai's most iconic landmarks.",
  },
  {
    id: 'musandam',
    title: 'Musandam Peninsula',
    image: images['turquoise-sea'],
    alt: 'Musandam fjords on turquoise water',
    text: 'Dramatic fjords on the Oman border, with some of the most pristine water in the region. Combine excellent reef fishing with snorkelling on extended cruises — a full-day or overnight escape well beyond the city for those who want something special.',
  },
];
