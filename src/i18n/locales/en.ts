// English dictionary — the source of truth for the shape of every other locale.

const dream = {
  eyebrow: 'Renting luxury yachts in Dubai',
  title: 'Let us create your dream holiday',
  p1: 'Escape from unnecessary thoughts and immerse yourself in the world of luxury. Relax in spacious cabins, unwind in the expansive saloon and soak up the sun in the jacuzzi on the flybridge — cruising along the legendary coastline with breathtaking views of the Burj Khalifa and Palm Jumeirah.',
  p2: "Whether you're planning a romantic dinner, a vibrant celebration with friends or an unforgettable family adventure, our professional team anticipates and satisfies your every need — even for the most demanding guest.",
  quote: "We're waiting for you on the luxurious deck with a glass of sparkling wine in your hands — five-star service is guaranteed.",
};

const en = {
  meta: {
    name: 'English',
    short: 'EN',
    ogLocale: 'en_US',
    quotes: ['“', '”'] as [string, string],
  },

  nav: {
    home: 'Home',
    about: 'About Us',
    yachts: 'Yacht Rental',
    excursions: 'Excursions Dubai',
    contacts: 'Contacts',
    allYachts: 'All yachts',
    primary: 'Primary',
    openMenu: 'Open menu',
    homeAria: 'Emirates Fishing Tour — home',
    language: 'Language',
  },

  // Short labels used in the header dropdown, footer and booking form.
  excursionLinks: {
    sightseeing: 'Sightseeing Cruises',
    'yacht-rental': 'Private Yacht Rental',
    'water-sports': 'Water Sports',
    'yacht-party': 'Yacht Party',
    romantic: 'Romantic Cruise',
    corporate: 'Corporate Cruise',
  },

  footer: {
    about: 'Luxury yacht rental and bespoke cruises in Dubai. Fully insured, licensed crew, five-star service — 24/7.',
    navigation: 'Navigation',
    excursions: 'Excursions',
    contact: 'Get in touch',
    whatsapp: 'WhatsApp us',
    location: 'Dubai Marina, UAE',
    rights: 'Yacht Rental Dubai · All rights reserved',
    built: 'Built with Astro & Tailwind',
  },

  benefits: [
    { title: '24/7 booking', sub: 'We work round-the-clock' },
    { title: 'Fully insured', sub: 'Every guest onboard' },
    { title: 'Licensed crew', sub: 'Captain & professionals' },
    { title: '5-star service', sub: 'Guaranteed every trip' },
  ],

  cards: {
    bestseller: 'Bestseller',
    bookNow: 'Book Now',
    capacity: (n: number) => `Capacity: ${n} guests`,
    perHour: ' / 1 hour',
    yachtAlt: (name: string) => `${name} yacht`,
    planTrip: 'Plan a trip →',
    bookCruise: 'Book this cruise',
  },

  cta: {
    eyebrow: 'Rent yachts in Dubai',
    title: 'Book your yacht with Emirates Fishing Tour today',
    text: 'It is easy to rent a yacht in Dubai — just contact our specialists. We help you choose and book any yacht, plan your route and arrange every detail. Our team works 24/7.',
    button: 'Book a yacht now →',
    imageAlt: 'Turquoise sea',
  },

  form: {
    title: 'Request a booking',
    lead: "Fill in the form and we'll select the ideal yacht for you.",
    name: 'Your name',
    namePlaceholder: 'John Smith',
    phone: 'Phone',
    email: 'Email',
    service: 'Yacht / service',
    message: 'Message',
    messagePlaceholder: 'Date, number of guests, any special requests…',
    submit: 'Send request',
    consent: 'By sending you agree to be contacted by our team. We work round-the-clock, 24/7.',
  },

  lists: {
    included: [
      'Transportation',
      'Licensed captain & crew',
      'Soft beverages & juices',
      'Ice & bottled water',
      'Fuel',
      'Fresh towels',
      'Insurance for all guests',
      'Safety equipment',
      'Bathroom amenities',
    ],
    advantagesFull: [
      'A wide range of yachts and boats of different capacities and purposes',
      'High-quality customer service, whichever tour or yacht you choose',
      'Round-the-clock customer service — we work 24/7',
      'Full compliance with all safety measures',
      'Selection of an individual cruise just for you',
      'Extra services: yacht decoration, delicacies, photo/video, banquet menu',
      'Water-sports add-ons — jet skis, flyboards and inflatable boats',
      'Insurance for the boats and for your trip',
      'Yachts certified to the highest standard',
      'A licensed captain & professional crew on every charter',
    ],
    advantagesHome: [
      'A wide range of yachts and boats of different capacities and purposes',
      'High-quality customer service, whichever tour or yacht you choose',
      'Round-the-clock customer service — we work 24/7',
      'Full compliance with all safety measures',
      'Selection of an individual cruise just for you',
      'Extra services: yacht decoration, delicacies, photo/video and banquet menu',
      'Water-sports add-ons — jet skis, flyboards and inflatable boats',
      'A licensed captain & professional crew on every charter',
    ],
    landmarks: [
      'Jumeirah Beach Residence',
      'Palm Jumeirah',
      'Burj Al Arab',
      'Royal Atlantis',
      'Dubai Creek',
      'The World',
      'Dubai Marina',
      'Dubai Water Canal',
    ],
  },

  services: {
    sightseeing: {
      category: 'Sightseeing',
      title: 'Dubai Sightseeing Cruises',
      alt: 'Dubai sightseeing cruise along the coastline',
      short: 'Glide past the iconic skyline — Palm Jumeirah, Burj Al Arab and Dubai Marina — on a luxury yacht.',
      full: 'Have you ever dreamed of taking a tour on the water and enjoying the astonishing views of Dubai? Make a journey of luxury and discovery with sightseeing yacht cruises in Dubai with Emirates Fishing Tour. Renting a yacht for a sightseeing cruise in Dubai is very easy. During the excursion, you will have the opportunity to see the iconic sights of Dubai, such as Jumeirah Beach Residence, Palm Jumeirah island, Burj Al Arab hotel, the new Royal Atlantis, Dubai Creek, The World, Dubai Marina and much more.',
    },
    'yacht-rental': {
      category: 'Yacht rental',
      title: 'Private Yacht Rental',
      alt: 'Private yacht charter in Dubai',
      short: 'Your own yacht with a licensed crew — by the hour or for the whole day, on the route you choose.',
      full: 'Rent a whole yacht just for you and your guests. Choose a modern Azimut from our fleet, book it by the hour or for the whole day, and we will plan the route around your wishes — a calm swim stop, the city skyline at sunset or the open waters of the Persian Gulf. A licensed captain and crew, fuel, soft drinks, towels and full insurance are included, and extras such as catering, decoration or a photographer can be added on request.',
    },
    'water-sports': {
      category: 'Water sports',
      title: 'Yacht Water Sports',
      alt: 'Water sports activities from a yacht in Dubai',
      short: 'Water skiing, jet skiing, diving and snorkeling — unforgettable adventures and pure adrenaline.',
      full: 'Dubai is not only about luxurious restaurants, boutiques or skyscrapers with stunning views. Dubai is also an opportunity to practice water sports on a yacht in Dubai. Water skiing, jet skiing, diving, snorkeling are at your service. Experience unforgettable adventures and powerful adrenaline!',
    },
    'yacht-party': {
      category: 'Celebration',
      title: 'Yacht Party',
      alt: 'Yacht party celebration on deck in Dubai',
      short: 'Whatever the occasion, a wide choice of yachts and a varied menu make your party unforgettable.',
      full: 'No matter the occasion, we will be happy to organize a fun party for you on a yacht in Dubai. Thanks to a wide choice of yachts and additional options, your yacht party will be held at a high level. A varied menu of food and drinks will make your party truly unforgettable!',
    },
    romantic: {
      category: 'Romantic',
      title: 'Romantic Cruise in Dubai',
      alt: 'Romantic yacht cruise at sunset in Dubai',
      short: 'The perfect way to express your feelings — picturesque views, romance and tranquility for two.',
      full: 'Renting a yacht for a romantic dinner is the perfect way to express your feelings and spend time with your loved one. We are happy to give you the ability to enjoy the picturesque views, relax and immerse yourself in the atmosphere of romance and tranquility. Our company has specially selected yachts for a romantic cruise. Please take advantage of this unique opportunity. Spend time surrounded by amazing views with the feasibility to capture this moment in photographs!',
    },
    corporate: {
      category: 'Corporate',
      title: 'Corporate Cruise in Dubai',
      alt: 'Luxury yacht for corporate cruises in Dubai',
      short: 'More than a venue — build team camaraderie and leave a lasting impression on your guests.',
      full: 'The corporate yacht cruise in Dubai is more than just a location for your event. It is an opportunity to create meaningful connections, build team camaraderie and leave a lasting impression on your guests. Our Dubai yacht charter company will work with you to tailor a cruise to suit your needs, whether you are hosting a business meeting, team building event, product presentation or corporate celebration.',
    },
  },

  dream,

  pages: {
    home: {
      title: 'Yacht Rental Dubai | Emirates Fishing Tour',
      description: 'Luxury yacht rental and cruises in Dubai. Fully insured, licensed crew, 24/7 booking.',
      hero: {
        alt: 'Luxury yacht cruising on turquoise water in Dubai',
        eyebrow: 'Yacht Rental Dubai · 24/7 booking',
        title: 'Luxury Yacht Rental in Dubai',
        subtitle: 'Dubai is a paradise where every idea turns into reality — offering the very best conditions for water recreation. Whatever you dream of on the water, Emirates Fishing Tour helps you bring every idea to life.',
        fleet: 'View the fleet →',
        contact: 'Contact us',
      },
      fleet: {
        eyebrow: 'Our fleet',
        title: 'Most popular yachts in Dubai',
        lead: 'Our extensive fleet offers a wide range of yachts equipped with the latest features and amenities — all models meeting the highest technical and safety standards. Choose your favourite below.',
        all: 'View all yachts →',
      },
      welcome: {
        alt: 'Dubai coastline skyline from the water',
        eyebrow: 'Welcome to Dubai',
        title: 'A paradise where every idea turns into reality',
        p1: 'Dubai is a city of great opportunities — one of the few places offering the very best conditions for water recreation. For fans of water sports, private celebrations, corporate events or simply lovers of luxurious recreation surrounded by mesmerizing landscapes, Emirates Fishing Tour helps you bring every idea to life.',
        p2: 'From renting a modern yacht for a charter in the Persian Gulf to a group theme cruise, our team of experts does everything possible to give you an exceptional yacht charter holiday in Dubai, complete with stunning views and ideal onboard amenities.',
        button: 'About us',
      },
      services: {
        eyebrow: 'Our services',
        title: 'Many formats of water recreation',
        lead: 'From sightseeing cruises to corporate celebrations — choose the experience that fits your day on the water.',
      },
      advantages: {
        eyebrow: 'Our advantages',
        title: 'Why guests choose Emirates Fishing Tour',
      },
    },

    about: {
      title: 'About Us | Emirates Fishing Tour',
      description: "Learn about Emirates Fishing Tour — Dubai's luxury yacht charter and cruise specialists.",
      hero: {
        alt: 'Luxury yacht cruising the Dubai coastline',
        title: 'About Emirates Fishing Tour',
        subtitle: "Dubai's luxury yacht charter and cruise specialists.",
      },
      welcome: {
        alt: 'Luxury yacht on the water in Dubai',
        eyebrow: 'Welcome to Dubai',
        title: 'A paradise where every idea turns into reality',
        paragraphs: [
          'Dubai is a city of great opportunities and a paradise where every traveler can turn their goals and ideas into reality — one of the few places offering the very best conditions for water recreation. For fans of water sports, private celebrations, corporate events or simply lovers of luxurious recreation surrounded by mesmerizing landscapes, Emirates Fishing Tour helps you bring every idea to life.',
          'Our extensive fleet offers a wide range of yachts and boats equipped with the latest features and amenities. Whether you prefer a sleek modern vessel or a classic yacht, our fleet has something to suit every taste — all models meeting the latest technical requirements.',
          'From renting a modern yacht for a charter in the Persian Gulf to a group theme cruise, our team of experts does everything possible to give you an exceptional yacht charter holiday in Dubai, complete with stunning views and ideal onboard amenities.',
          'Having used the services of our company once, you will wish to contact Emirates Fishing Tour again — because our service is of high quality. Our clients are always satisfied and recommend us to their relatives and friends.',
        ],
      },
      stats: [
        { value: '10+', label: 'Yachts in the fleet' },
        { value: '24/7', label: 'Booking & support' },
        { value: '5★', label: 'Guest rating' },
        { value: '100%', label: 'Fully insured trips' },
      ],
      included: {
        eyebrow: 'All-inclusive charter',
        title: "What's included on board",
        lead: 'Every charter comes complete — you simply step aboard and enjoy the day.',
      },
      advantages: {
        eyebrow: 'Our advantages',
        title: 'Why guests choose us',
        lead: 'Every detail is handled by professionals — so your only job is to relax and enjoy the sea.',
      },
      dreamAlt: 'Luxurious yacht cabin interior',
      dreamButton: 'Book your yacht',
    },

    yachts: {
      title: 'Yacht Rental Dubai | Emirates Fishing Tour',
      description: 'Rent luxury yachts in Dubai — Azimut 50, 58 and 62. All-inclusive charters with a licensed crew.',
      hero: {
        alt: 'Luxury yacht cruising on turquoise water in Dubai',
        title: 'Yacht Rental Dubai',
        subtitle: 'Choose from our fleet of modern Azimut yachts — all-inclusive charters with a licensed crew.',
      },
      fleet: {
        eyebrow: 'Best in Dubai',
        title: 'Our yacht fleet',
        lead: 'Our extensive fleet offers a wide range of modern Azimut yachts equipped with the latest features and amenities. Every model meets the highest technical and safety standards — pick the vessel that fits your group and your day on the water.',
      },
      included: {
        eyebrow: 'All-inclusive charter',
        title: "What's included on board",
        lead: 'Every charter comes complete — you simply step aboard and enjoy the day. From the captain and crew to fuel, refreshments and full insurance, everything is taken care of.',
      },
      dreamAlt: 'Luxury yacht moored off the Dubai coastline',
      dreamButton: 'Request a booking',
    },

    excursions: {
      title: 'Excursions Dubai | Emirates Fishing Tour',
      description: 'Yacht excursions in Dubai — sightseeing, private yacht rental, water sports, parties, romantic and corporate cruises.',
      hero: {
        alt: 'Yacht cruising past the Dubai skyline',
        title: 'Excursions & Cruises in Dubai',
        subtitle: 'From sightseeing cruises to corporate celebrations — choose the experience that fits your day on the water.',
      },
      intro: {
        eyebrow: 'Our services',
        title: 'Many formats of water recreation',
        lead: 'From renting a modern yacht for a charter in the Persian Gulf to a group theme cruise, our team of experts does everything possible to give you an exceptional yacht charter holiday in Dubai — complete with stunning views and ideal onboard amenities. Choose the format that fits your day on the water and we will arrange every detail.',
      },
      sights: {
        eyebrow: 'On your route',
        title: "Iconic Dubai sights you'll pass",
        lead: "Cruise along the legendary coastline and take in Dubai's most famous landmarks from the water. We help you plan the perfect route past every must-see view.",
      },
    },

    contacts: {
      title: 'Contacts | Emirates Fishing Tour',
      description: 'Contact Emirates Fishing Tour to book your yacht in Dubai. We work 24/7.',
      hero: {
        alt: 'Turquoise sea off the Dubai coast',
        title: 'Contact Us',
        subtitle: 'Book your yacht — we work 24/7.',
      },
      eyebrow: 'Get in touch',
      heading: 'Book your yacht — we work 24/7',
      p1: 'It is easy to rent a yacht in Dubai — just contact our specialists and managers. You can find out about availability, possible directions and routes, current promotions and prices, and we will be happy to select or create the perfect route so you can enjoy your vacation.',
      // p2 is split around the bold "fully insured" phrase.
      p2: [
        'When it comes to water recreation, safety plays a big role. By renting a boat or yacht from us, you automatically receive a guarantee of safety — you will be ',
        'fully insured',
        '. We take into account every nuance: whether there are children on board, a birthday to celebrate, or fans of jet skiing, banana boating and flyboarding. Our goal is to make your vacation as comfortable as possible.',
      ] as [string, string, string],
      call: 'Call us anytime',
      whatsapp: 'WhatsApp',
      email: 'Email & website',
      hoursTitle: 'Working hours',
      hoursText: 'Open 24/7, every day of the year.',
      routes: {
        eyebrow: 'Routes & locations',
        title: "Where you'll cruise",
        lead: "From the marina to the open Gulf, your route can take in the most iconic landmarks of Dubai. Tell us where you'd like to sail and we'll plan every detail around you.",
      },
    },
  },
};

export type Dict = typeof en;
export default en;
