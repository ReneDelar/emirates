import type { Dict } from './en';

// Uzbek in the official Latin script. Uses ʻ (U+02BB) in oʻ/gʻ and ʼ (U+02BC) for the tutuq belgisi.

const dream = {
  eyebrow: 'Dubayda hashamatli yaxtalar ijarasi',
  title: 'Orzuingizdagi dam olishni birga yaratamiz',
  p1: 'Ortiqcha oʻylardan xalos boʻling va hashamat olamiga shoʻngʻing. Keng kayutalarda hordiq chiqaring, katta salonda dam oling va flaybrijdagi jakuzida quyosh nurlaridan bahramand boʻling — Burj Xalifa va Palm Jumeyraning hayratlanarli manzaralari ochiladigan afsonaviy sohil boʻylab suzib.',
  p2: 'Romantik kechki ovqat, doʻstlar bilan yorqin bayram yoki unutilmas oilaviy sarguzasht rejalashtirayotgan boʻlsangiz ham, professional jamoamiz har bir istagingizni oldindan sezadi va bajaradi — hatto eng talabchan mehmon uchun ham.',
  quote: 'Sizni hashamatli palubada qoʻlingizda bir qadah koʻpikli sharob bilan kutamiz — besh yulduzli xizmat kafolatlanadi.',
};

const uz: Dict = {
  meta: {
    name: 'Oʻzbekcha',
    short: 'UZ',
    ogLocale: 'uz_UZ',
    quotes: ['“', '”'],
  },

  nav: {
    home: 'Bosh sahifa',
    about: 'Biz haqimizda',
    regions: 'Baliq ovi joylari',
    yachts: 'Yaxta ijarasi',
    excursions: 'Ekskursiyalar',
    contacts: 'Aloqa',
    allRegions: 'Barcha baliq ovi joylari',
    primary: 'Asosiy menyu',
    openMenu: 'Menyuni ochish',
    homeAria: 'Emirates Fishing Tour — bosh sahifa',
    language: 'Til',
  },

  regionLinks: {
    'dubai-marina': 'Dubay Marina va sohil',
    'persian-gulf': 'Fors koʻrfazi chuqur suvlari',
    'palm-jumeirah': 'Palm Jumeyra suvlari',
    musandam: 'Musandam yarim oroli',
  },
  excursionLinks: {
    sightseeing: 'Sayohat kruizlari',
    fishing: 'Yaxtada baliq ovi',
    'water-sports': 'Suv sporti',
    'yacht-party': 'Yaxtada bayram',
    romantic: 'Romantik kruiz',
    corporate: 'Korporativ kruiz',
  },

  footer: {
    about: 'Dubayda hashamatli yaxtalar ijarasi, baliq ovi va individual kruizlar. Toʻliq sugʻurta, litsenziyali ekipaj, besh yulduzli xizmat — 24/7.',
    navigation: 'Navigatsiya',
    excursions: 'Ekskursiyalar',
    contact: 'Biz bilan bogʻlaning',
    whatsapp: 'WhatsApp orqali yozing',
    location: 'Dubay Marina, BAA',
    rights: 'Dubayda yaxta ijarasi · Barcha huquqlar himoyalangan',
    built: 'Astro va Tailwind asosida yaratilgan',
  },

  benefits: [
    { title: '24/7 bron qilish', sub: 'Kecha-kunduz ishlaymiz' },
    { title: 'Toʻliq sugʻurta', sub: 'Bortdagi har bir mehmon uchun' },
    { title: 'Litsenziyali ekipaj', sub: 'Kapitan va mutaxassislar' },
    { title: '5 yulduzli xizmat', sub: 'Har bir sayohatda kafolatlangan' },
  ],

  cards: {
    bestseller: 'Eng koʻp tanlanadi',
    bookNow: 'Bron qilish',
    capacity: (n: number) => `Sigʻimi: ${n} nafargacha mehmon`,
    perHour: ' / 1 soat',
    yachtAlt: (name: string) => `${name} yaxtasi`,
    planTrip: 'Sayohatni rejalashtirish →',
    bookCruise: 'Kruizni bron qilish',
  },

  cta: {
    eyebrow: 'Dubayda yaxta ijarasi',
    title: 'Emirates Fishing Tour bilan yaxtangizni bugunoq bron qiling',
    text: 'Dubayda yaxta ijaraga olish oson — mutaxassislarimiz bilan bogʻlaning. Istalgan yaxtani tanlash va bron qilishda yordam beramiz, marshrutni rejalashtiramiz va har bir tafsilotni tashkil qilamiz. Jamoamiz 24/7 ishlaydi.',
    button: 'Yaxtani hozir bron qilish →',
    imageAlt: 'Feruza rang dengiz',
  },

  form: {
    title: 'Bron qilish uchun ariza',
    lead: 'Shaklni toʻldiring — biz siz uchun ideal yaxtani tanlab beramiz.',
    name: 'Ismingiz',
    namePlaceholder: 'Aziz Karimov',
    phone: 'Telefon',
    email: 'Email',
    service: 'Yaxta / xizmat',
    message: 'Xabar',
    messagePlaceholder: 'Sana, mehmonlar soni, maxsus istaklar…',
    submit: 'Arizani yuborish',
    consent: 'Arizani yuborish orqali jamoamiz siz bilan bogʻlanishiga rozilik bildirasiz. Biz kecha-kunduz, 24/7 ishlaymiz.',
  },

  lists: {
    included: [
      'Transfer',
      'Litsenziyali kapitan va ekipaj',
      'Alkogolsiz ichimliklar va sharbatlar',
      'Muz va shishadagi suv',
      'Yoqilgʻi',
      'Toza sochiqlar',
      'Barcha mehmonlar uchun sugʻurta',
      'Xavfsizlik vositalari',
      'Hammom anjomlari',
    ],
    advantagesFull: [
      'Turli sigʻim va maqsaddagi yaxta va qayiqlarning keng tanlovi',
      'Qaysi tur yoki yaxtani tanlamang, yuqori sifatli xizmat',
      'Kecha-kunduz mijozlarga xizmat — biz 24/7 ishlaymiz',
      'Barcha xavfsizlik choralariga toʻliq rioya qilish',
      'Aynan siz uchun individual kruiz tanlash',
      'Qoʻshimcha xizmatlar: yaxtani bezatish, delikateslar, foto/video, banket menyusi',
      'Suv sporti — gidrotsikllar, flaybordlar va puflanadigan qayiqlar',
      'Yaxtalar va sayohatingiz uchun sugʻurta',
      'Eng yuqori standartlar boʻyicha sertifikatlangan yaxtalar',
      'Har bir charterda litsenziyali kapitan va professional ekipaj',
    ],
    advantagesHome: [
      'Turli sigʻim va maqsaddagi yaxta va qayiqlarning keng tanlovi',
      'Qaysi tur yoki yaxtani tanlamang, yuqori sifatli xizmat',
      'Kecha-kunduz mijozlarga xizmat — biz 24/7 ishlaymiz',
      'Barcha xavfsizlik choralariga toʻliq rioya qilish',
      'Aynan siz uchun individual kruiz tanlash',
      'Qoʻshimcha xizmatlar: yaxtani bezatish, delikateslar, foto/video va banket menyusi',
      'Suv sporti — gidrotsikllar, flaybordlar va puflanadigan qayiqlar',
      'Har bir charterda litsenziyali kapitan va professional ekipaj',
    ],
    fishingGear: [
      'Qarmoqlar, gʻaltaklar va anjomlar',
      'Xoʻrak va muz',
      'Litsenziyali kapitan va ekipaj',
      'Alkogolsiz ichimliklar va suv',
      'Xavfsizlik vositalari',
      'Soʻrov boʻyicha ovni tozalash',
      'Yoqilgʻi narxga kiritilgan',
      'Barcha mehmonlar uchun sugʻurta',
      'Moslashuvchan marshrutlar',
    ],
    landmarks: [
      'Jumeirah Beach Residence',
      'Palm Jumeyra',
      'Burj al-Arab',
      'Royal Atlantis',
      'Dubay Krik',
      'The World orollari',
      'Dubay Marina',
      'Dubay suv kanali',
    ],
  },

  regions: {
    'dubai-marina': {
      title: 'Dubay Marina va sohil',
      alt: 'Dubay Marina sohili',
      text: 'JBR, Palm Jumeyra va Marina boʻylab sokin sohilboʻyi suvlari oilalar va qisqa sayohatlar uchun eng qulay hududdir. Yengil anjomlar va shoshilmasdan baliq ovi — osmonoʻpar binolar fonida koʻpincha kvinfish va barrakuda tutiladi.',
    },
    'persian-gulf': {
      title: 'Fors koʻrfazi — chuqur suvlar',
      alt: 'Fors koʻrfazida chuqur suv baliq ovi',
      text: 'Yirik baliqlarni trolling usulida ovlash uchun ochiq dengizga chiqing. Bu suvlarda qirol skumbriyasi, tunets va yelkanli baliq uchraydi. Eng yaxshi natija — baliq qayerda turishini biladigan litsenziyali kapitan bilan butun kunlik charterda. Haqiqiy kurashga tayyor boʻling!',
    },
    'palm-jumeirah': {
      title: 'Palm Jumeyra suvlari',
      alt: 'Palm Jumeyra yaqinidagi yaxta',
      text: 'Palm va Atlantis yaqinidagi panoh riflar va chuqurliklar hayotga boy. Bu grouper va snapper kabi baliqlarni tubdan ovlash uchun eng yaxshi joy — sohilga yaqin va Dubayning eng mashhur diqqatga sazovor joylari bilan oʻralgan.',
    },
    musandam: {
      title: 'Musandam yarim oroli',
      alt: 'Feruza suv ustidagi Musandam fyordlari',
      text: 'Ummon chegarasidagi ajoyib fyordlar va mintaqadagi eng toza suvlardan biri. Uzoq kruizlarda ajoyib rif baliq ovini snorkeling bilan birlashtiring — oʻzgacha narsani istaganlar uchun shahardan ancha uzoqda butun kunlik yoki tunab qolinadigan sayohat.',
    },
  },

  services: {
    sightseeing: {
      category: 'Sayohat',
      title: 'Dubay boʻylab sayohat kruizlari',
      alt: 'Dubay sohili boʻylab sayohat kruizi',
      short: 'Hashamatli yaxtada mashhur manzaralar — Palm Jumeyra, Burj al-Arab va Dubay Marina yonidan suzib oʻting.',
      full: 'Hech suv boʻylab sayohat qilib, Dubayning hayratlanarli manzaralaridan bahramand boʻlishni orzu qilganmisiz? Emirates Fishing Tour bilan sayohat kruizida hashamat va kashfiyotlarga toʻla sayohatga chiqing. Dubayda sayohat kruizi uchun yaxta ijaraga olish juda oson. Ekskursiya davomida Dubayning mashhur joylarini — Jumeirah Beach Residence, Palm Jumeyra oroli, Burj al-Arab mehmonxonasi, yangi Royal Atlantis, Dubay Krik, The World orollari, Dubay Marina va boshqa koʻplab joylarni koʻrasiz.',
    },
    fishing: {
      category: 'Baliq ovi',
      title: 'Yaxtada baliq ovi',
      alt: 'Dubay suvlarida yaxtada baliq ovi',
      short: 'Mutaxassislarimiz BAAdagi eng yaxshi joylarni biladi — barcha anjomlar bilan ajoyib ovdan zavqlaning.',
      full: 'BAAda baliq oviga jiddiy yondashish kerak. Axir yaxshi ov uchun toʻgʻri joylarni bilish, anjomlar va boshqa texnik masalalar boʻyicha oldindan maslahat olish zarur. Professional jamoamiz sizga hamma narsani mamnuniyat bilan tushuntirib beradi va tur tafsilotlari bilan tanishtiradi. Biz eng yaxshi baliq ovi joylarini bilamiz va sizga betakror taassurotlar hadya etamiz. Dubayning eng yaxshi joylarida ajoyib ovdan zavqlaning!',
    },
    'water-sports': {
      category: 'Suv sporti',
      title: 'Yaxtadan suv sporti',
      alt: 'Dubayda yaxtadan suv sporti mashgʻulotlari',
      short: 'Suv changʻisi, gidrotsikl, dayving va snorkeling — unutilmas sarguzashtlar va sof adrenalin.',
      full: 'Dubay — bu faqat hashamatli restoranlar, butiklar yoki ajoyib manzarali osmonoʻpar binolar emas. Dubay — bu yaxtadan turib suv sporti bilan shugʻullanish imkoniyati hamdir. Suv changʻisi, gidrotsikl, dayving, snorkeling — barchasi sizning xizmatingizda. Unutilmas sarguzashtlar va kuchli adrenalinni his qiling!',
    },
    'yacht-party': {
      category: 'Bayram',
      title: 'Yaxtada bayram',
      alt: 'Dubayda yaxta palubasidagi bayram',
      short: 'Sabab qanday boʻlmasin, yaxtalarning keng tanlovi va rang-barang menyu bayramingizni unutilmas qiladi.',
      full: 'Sabab qanday boʻlishidan qatʼi nazar, Dubayda yaxtada siz uchun quvnoq bayramni mamnuniyat bilan tashkil qilamiz. Yaxtalar va qoʻshimcha xizmatlarning keng tanlovi tufayli bayramingiz yuqori darajada oʻtadi. Taom va ichimliklarning rang-barang menyusi esa uni chinakam unutilmas qiladi!',
    },
    romantic: {
      category: 'Romantika',
      title: 'Dubayda romantik kruiz',
      alt: 'Dubayda quyosh botishidagi romantik yaxta kruizi',
      short: 'Hislaringizni izhor qilishning ideal usuli — ikki kishi uchun goʻzal manzaralar, romantika va osoyishtalik.',
      full: 'Romantik kechki ovqat uchun yaxta ijarasi — hislaringizni izhor qilish va sevgan insoningiz bilan vaqt oʻtkazishning ideal usuli. Sizga goʻzal manzaralardan bahramand boʻlish, hordiq chiqarish va romantika hamda osoyishtalik muhitiga shoʻngʻish imkoniyatini mamnuniyat bilan taqdim etamiz. Kompaniyamiz romantik kruizlar uchun maxsus yaxtalarni tanlagan. Bu noyob imkoniyatdan foydalaning — ajoyib manzaralar qurshovida vaqt oʻtkazing va bu lahzani suratlarda muhrlang!',
    },
    corporate: {
      category: 'Korporativ',
      title: 'Dubayda korporativ kruiz',
      alt: 'Dubayda korporativ kruizlar uchun hashamatli yaxta',
      short: 'Shunchaki joy emas — jamoani birlashtiring va mehmonlaringizda unutilmas taassurot qoldiring.',
      full: 'Dubayda yaxtadagi korporativ kruiz — tadbiringiz uchun shunchaki joy emas. Bu foydali aloqalar oʻrnatish, jamoani birlashtirish va mehmonlaringizda unutilmas taassurot qoldirish imkoniyatidir. Charter kompaniyamiz kruizni ehtiyojlaringizga moslab tayyorlaydi — ishbilarmonlik uchrashuvi, timbilding, mahsulot taqdimoti yoki korporativ bayram boʻladimi.',
    },
  },

  dream,

  pages: {
    home: {
      title: 'Dubayda yaxta ijarasi | Emirates Fishing Tour',
      description: 'Dubayda hashamatli yaxtalar ijarasi, baliq ovi va kruizlar. Toʻliq sugʻurta, litsenziyali ekipaj, 24/7 bron qilish.',
      hero: {
        alt: 'Dubayda feruza suv ustida suzayotgan hashamatli yaxta',
        eyebrow: 'Dubayda yaxta ijarasi · 24/7 bron qilish',
        title: 'Dubayda hashamatli yaxtalar ijarasi',
        subtitle: 'Dubay — har qanday gʻoya haqiqatga aylanadigan jannat, bu yerda suvda dam olish uchun eng yaxshi sharoitlar mavjud. Suvda nimani orzu qilmang, Emirates Fishing Tour uni amalga oshirishga yordam beradi.',
        fleet: 'Flotni koʻrish →',
        contact: 'Biz bilan bogʻlaning',
      },
      fleet: {
        eyebrow: 'Bizning flot',
        title: 'Dubaydagi eng mashhur yaxtalar',
        lead: 'Katta flotimiz eng soʻnggi qulayliklar bilan jihozlangan yaxtalarning keng tanlovini taklif etadi — barcha modellar eng yuqori texnik va xavfsizlik standartlariga javob beradi. Quyida oʻzingizga yoqqanini tanlang.',
        all: 'Barcha yaxtalar →',
      },
      welcome: {
        alt: 'Suvdan Dubay sohili manzarasi',
        eyebrow: 'Dubayga xush kelibsiz',
        title: 'Har qanday gʻoya haqiqatga aylanadigan jannat',
        p1: 'Dubay — katta imkoniyatlar shahri va suvda dam olish uchun eng yaxshi sharoitlarni taklif qiladigan kamdan-kam joylardan biri. Baliq ovi va suv sporti ishqibozlari, shaxsiy bayramlar va korporativ tadbirlar yoki shunchaki maftunkor manzaralar qurshovida hashamatli dam olishni sevuvchilar uchun Emirates Fishing Tour har qanday gʻoyani amalga oshirishga yordam beradi.',
        p2: 'Fors koʻrfazida charter uchun zamonaviy yaxta ijarasidan tortib guruhli tematik kruizgacha — ekspertlar jamoamiz Dubaydagi yaxtadagi dam olishingiz ajoyib manzaralar va bortdagi ideal qulayliklar bilan alohida boʻlishi uchun hamma narsani qiladi.',
        button: 'Biz haqimizda',
      },
      services: {
        eyebrow: 'Bizning xizmatlar',
        title: 'Suvda dam olishning koʻplab formatlari',
        lead: 'Sayohat kruizlaridan korporativ bayramlargacha — suvdagi kuningizga mos formatni tanlang.',
      },
      advantages: {
        eyebrow: 'Bizning afzalliklarimiz',
        title: 'Nega mehmonlar Emirates Fishing Tourni tanlaydi',
      },
    },

    about: {
      title: 'Biz haqimizda | Emirates Fishing Tour',
      description: 'Emirates Fishing Tour haqida bilib oling — Dubayda hashamatli yaxta ijarasi, baliq ovi va kruizlar boʻyicha mutaxassislar.',
      hero: {
        alt: 'Dubay sohili boʻylab suzayotgan hashamatli yaxta',
        title: 'Emirates Fishing Tour haqida',
        subtitle: 'Dubayda hashamatli yaxta ijarasi, baliq ovi va kruizlar boʻyicha mutaxassislar.',
      },
      welcome: {
        alt: 'Dubayda suv ustidagi hashamatli yaxta',
        eyebrow: 'Dubayga xush kelibsiz',
        title: 'Har qanday gʻoya haqiqatga aylanadigan jannat',
        paragraphs: [
          'Dubay — katta imkoniyatlar shahri va har bir sayohatchi oʻz maqsad va gʻoyalarini haqiqatga aylantira oladigan jannat. Bu suvda dam olish uchun eng yaxshi sharoitlarni taklif qiladigan kamdan-kam joylardan biri. Baliq ovi va suv sporti ishqibozlari, shaxsiy bayramlar va korporativ tadbirlar yoki shunchaki maftunkor manzaralar qurshovida hashamatli dam olishni sevuvchilar uchun Emirates Fishing Tour har qanday gʻoyani amalga oshirishga yordam beradi.',
          'Katta flotimiz eng soʻnggi qulayliklar bilan jihozlangan yaxta va qayiqlarning keng tanlovini taklif etadi. Zamonaviy nafis kemani yoki klassik yaxtani afzal koʻrasizmi — bizda har qanday didga mos variant bor va barcha modellar eng yangi texnik talablarga javob beradi.',
          'Fors koʻrfazida charter uchun zamonaviy yaxta ijarasidan tortib guruhli tematik kruizgacha — ekspertlar jamoamiz Dubaydagi yaxtadagi dam olishingiz ajoyib manzaralar va bortdagi ideal qulayliklar bilan alohida boʻlishi uchun hamma narsani qiladi.',
          'Kompaniyamiz xizmatlaridan bir marta foydalangach, yana Emirates Fishing Tourga murojaat qilishni istaysiz — chunki xizmatimiz haqiqatan ham yuqori sifatli. Mijozlarimiz doimo mamnun va bizni yaqinlari hamda doʻstlariga tavsiya qilishadi.',
        ],
      },
      stats: [
        { value: '10+', label: 'Flotdagi yaxtalar' },
        { value: '24/7', label: 'Bron qilish va yordam' },
        { value: '5★', label: 'Mehmonlar bahosi' },
        { value: '100%', label: 'Sugʻurtalangan sayohatlar' },
      ],
      included: {
        eyebrow: '“Hammasi kiritilgan” charter',
        title: 'Bortda nimalar kiritilgan',
        lead: 'Har bir charter toʻliq jihozlangan — siz shunchaki bortga chiqasiz va kundan zavqlanasiz.',
      },
      advantages: {
        eyebrow: 'Bizning afzalliklarimiz',
        title: 'Nega mehmonlar bizni tanlaydi',
        lead: 'Har bir tafsilot bilan mutaxassislar shugʻullanadi — sizning vazifangiz faqat dam olish va dengizdan zavqlanish.',
      },
      dreamAlt: 'Yaxta kayutasining hashamatli interyeri',
      dreamButton: 'Yaxtani bron qilish',
    },

    yachts: {
      title: 'Dubayda yaxta ijarasi | Emirates Fishing Tour',
      description: 'Dubayda hashamatli yaxtalar ijarasi — Azimut 50, 58 va 62. Litsenziyali ekipaj bilan “hammasi kiritilgan” charterlar.',
      hero: {
        alt: 'Dubayda feruza suv ustida suzayotgan hashamatli yaxta',
        title: 'Dubayda yaxta ijarasi',
        subtitle: 'Zamonaviy Azimut yaxtalari flotimizdan tanlang — litsenziyali ekipaj bilan “hammasi kiritilgan” charterlar.',
      },
      fleet: {
        eyebrow: 'Dubaydagi eng yaxshilari',
        title: 'Bizning yaxtalar flotimiz',
        lead: 'Katta flotimiz eng soʻnggi qulayliklar bilan jihozlangan zamonaviy Azimut yaxtalarining keng tanlovini taklif etadi. Har bir model eng yuqori texnik va xavfsizlik standartlariga javob beradi — guruhingiz va suvdagi kuningizga mos kemani tanlang.',
      },
      included: {
        eyebrow: '“Hammasi kiritilgan” charter',
        title: 'Bortda nimalar kiritilgan',
        lead: 'Har bir charter toʻliq jihozlangan — siz shunchaki bortga chiqasiz va kundan zavqlanasiz. Kapitan va ekipajdan tortib yoqilgʻi, ichimliklar va toʻliq sugʻurtagacha — hammasi oʻylab qoʻyilgan.',
      },
      dreamAlt: 'Dubay sohilida turgan hashamatli yaxta',
      dreamButton: 'Ariza qoldirish',
    },

    regions: {
      title: 'Baliq ovi joylari | Emirates Fishing Tour',
      description: 'BAAdagi eng yaxshi baliq ovi joylari — Dubay Marina, Fors koʻrfazi, Palm Jumeyra va Musandam.',
      hero: {
        alt: 'Dubay sohilida yaxtadan baliq ovi',
        title: 'BAAdagi baliq ovi joylari',
        subtitle: 'Toʻgʻri joy, toʻgʻri mavsum va toʻgʻri anjomlar — biz bularning barchasini bilamiz.',
      },
      intro: {
        eyebrow: 'Yaxtada baliq ovi',
        title: 'Dubay atrofida qayerda baliq ovlash mumkin',
        paragraphs: [
          'BAAda baliq oviga jiddiy yondashish kerak. Axir yaxshi ov uchun toʻgʻri joylarni bilish, anjomlar va boshqa texnik masalalar boʻyicha oldindan maslahat olish zarur. Professional jamoamiz sizga hamma narsani mamnuniyat bilan tushuntirib beradi va tur tafsilotlari bilan tanishtiradi.',
          'Biz eng yaxshi baliq ovi joylarini bilamiz va sizga betakror taassurotlar hadya etamiz. Marina yaqinidagi sokin sohilboʻyi suvlaridan Fors koʻrfazidagi chuqur suv trollingi va Musandamning ajoyib fyordlarigacha — har bir hududning oʻz xarakteri, mavsumi va ovi bor. Dubayning eng yaxshi joylarida ajoyib ovdan zavqlaning!',
        ],
      },
      list: {
        eyebrow: 'Baliq ovi joylari',
        title: 'Qarmoq tashlashga arziydigan toʻrtta suv hududi',
        lead: 'Kuningizga mos joyni tanlang — sohil yaqinida sokin oilaviy sayr, yirik baliq uchun butun kunlik charter yoki daxlsiz riflarga uzoq kruiz.',
      },
      gear: {
        eyebrow: 'Har bir baliq ovi charterida',
        title: 'Bortda kerakli hamma narsa',
        lead: 'Bortga chiqing va baliq ovlang — har bir charter toʻliq jihozlangan. Birinchi qarmoq tashlashingizdan oldin sizni kutib turgan narsalar:',
      },
      cta: {
        title: 'Emirates Fishing Tour bilan baliq ovi charterini bugunoq bron qiling',
        text: 'Dubayda yaxta ijaraga olish oson — mutaxassislarimiz bilan bogʻlaning. Toʻgʻri joy, mavsum va anjomlarni tanlashda yordam beramiz, marshrutni rejalashtiramiz va har bir tafsilotni tashkil qilamiz. Jamoamiz 24/7 ishlaydi.',
      },
    },

    excursions: {
      title: 'Dubaydagi ekskursiyalar | Emirates Fishing Tour',
      description: 'Dubayda yaxtada ekskursiyalar — sayohat kruizlari, baliq ovi, suv sporti, bayramlar, romantik va korporativ kruizlar.',
      hero: {
        alt: 'Dubay osmonoʻpar binolari yonidan suzayotgan yaxta',
        title: 'Dubaydagi ekskursiyalar va kruizlar',
        subtitle: 'Sayohat kruizlaridan korporativ bayramlargacha — suvdagi kuningizga mos formatni tanlang.',
      },
      intro: {
        eyebrow: 'Bizning xizmatlar',
        title: 'Suvda dam olishning koʻplab formatlari',
        lead: 'Fors koʻrfazida charter uchun zamonaviy yaxta ijarasidan tortib guruhli tematik kruizgacha — ekspertlar jamoamiz Dubaydagi yaxtadagi dam olishingiz ajoyib manzaralar va bortdagi ideal qulayliklar bilan alohida boʻlishi uchun hamma narsani qiladi. Oʻzingizga mos formatni tanlang, barcha tafsilotlarni esa biz tashkil qilamiz.',
      },
      sights: {
        eyebrow: 'Marshrutingizda',
        title: 'Yoʻlingizda koʻradigan Dubayning mashhur joylari',
        lead: 'Afsonaviy sohil boʻylab suzing va Dubayning eng mashhur diqqatga sazovor joylarini suvdan tomosha qiling. Barcha koʻrishga arziydigan manzaralar yonidan oʻtadigan mukammal marshrutni rejalashtirishda yordam beramiz.',
      },
    },

    contacts: {
      title: 'Aloqa | Emirates Fishing Tour',
      description: 'Dubayda yaxta bron qilish uchun Emirates Fishing Tour bilan bogʻlaning. Biz 24/7 ishlaymiz.',
      hero: {
        alt: 'Dubay sohilidagi feruza rang dengiz',
        title: 'Biz bilan bogʻlaning',
        subtitle: 'Yaxtangizni bron qiling — biz 24/7 ishlaymiz.',
      },
      eyebrow: 'Biz bilan bogʻlaning',
      heading: 'Yaxtangizni bron qiling — biz 24/7 ishlaymiz',
      p1: 'Dubayda yaxta ijaraga olish oson — mutaxassis va menejerlarimiz bilan bogʻlanish kifoya. Boʻsh yaxtalar, mumkin boʻlgan yoʻnalish va marshrutlar, joriy aksiyalar va narxlar haqida bilib olasiz, biz esa dam olishingiz uchun ideal marshrutni mamnuniyat bilan tanlaymiz yoki tuzib beramiz.',
      p2: [
        'Suvda dam olish haqida gap ketganda xavfsizlik katta rol oʻynaydi. Bizdan qayiq yoki yaxta ijaraga olganingizda avtomatik ravishda xavfsizlik kafolatini olasiz — siz ',
        'toʻliq sugʻurtalangan',
        ' boʻlasiz. Biz har bir jihatni hisobga olamiz: bortda bolalar, baliq ovi ishqibozlari yoki gidrotsikl, banan va flaybord muxlislari bormi. Maqsadimiz — dam olishingizni imkon qadar qulay qilish.',
      ],
      call: 'Istalgan vaqtda qoʻngʻiroq qiling',
      whatsapp: 'WhatsApp',
      email: 'Email va sayt',
      hoursTitle: 'Ish vaqti',
      hoursText: 'Yil davomida har kuni 24/7 ochiqmiz.',
      routes: {
        eyebrow: 'Marshrutlar va joylar',
        title: 'Kruizingiz qayerdan oʻtadi',
        lead: 'Marinadan ochiq koʻrfazgacha — marshrutingiz Dubayning eng mashhur joylarini qamrab olishi mumkin. Qayerga suzishni xohlashingizni ayting, biz har bir tafsilotni siz uchun rejalashtiramiz.',
      },
    },
  },
};

export default uz;
