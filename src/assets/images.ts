// Central image registry. Imported assets are optimized by astro:assets (<Image />).
import luxuryYachtTurquoise from './img/luxury-yacht-on-turquoise-water.jpg';
import turquoiseSea from './img/turquoise-sea.jpg';
import dubaiCoastline from './img/dubai-coastline.jpg';
import luxuryYacht from './img/luxury-yacht.jpg';
import yachtCabin from './img/yacht-cabin-interior.jpg';
import azimut50 from './img/azimut-50.jpg';
import azimut58 from './img/azimut-58.jpg';
import azimut62 from './img/azimut-62.jpg';
import dubaiSightseeing from './img/dubai-sightseeing.jpg';
import yachtFishing from './img/yacht-fishing.jpg';
import waterSports from './img/water-sports.jpg';
import corporateCruise from './img/corporate-cruise.jpg';
import romanticCruise from './img/romantic-cruise.jpg';

export const images = {
  'luxury-yacht-on-turquoise-water': luxuryYachtTurquoise,
  'turquoise-sea': turquoiseSea,
  'dubai-coastline': dubaiCoastline,
  'luxury-yacht': luxuryYacht,
  'yacht-cabin-interior': yachtCabin,
  'azimut-50': azimut50,
  'azimut-58': azimut58,
  'azimut-62': azimut62,
  'dubai-sightseeing': dubaiSightseeing,
  'yacht-fishing': yachtFishing,
  'water-sports': waterSports,
  'corporate-cruise': corporateCruise,
  'romantic-cruise': romanticCruise,
} as const;

export type ImageKey = keyof typeof images;
