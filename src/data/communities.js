// ============================================
// COMMUNITIES DATA FILE
// ============================================
// This file contains all community information for the website.
// Images are stored in /public/images/[community-name]/
//
// TO UPDATE IMAGES:
// 1. Place your new image in the correct folder: /public/images/[community-name]/
// 2. Update the image path below (if needed)
// 3. See README.txt files in each image folder for guidance
// ============================================

export const communities = [
  {
    id: 'mai-home',
    name: 'MAI-HOME',
    color: 'rgb(50, 50, 120)',
    secondaryColor: 'rgb(76, 76, 147)',

    // Image shown on community cards (homepage)
    // Location: /public/images/mai-home/card.webp
    cardImage: '/images/mai-home/card.webp',
    cardDescription: 'Bespaar energie aan de hand van AI!',
    cardBorderColor: 'rgba(192, 73, 255, 0.8)',

    hero: {
      // Large banner image at top of detail page
      // Location: /public/images/mai-home/mai-home-hero.webp
      image: '/images/mai-home/mai-home-hero.webp',
    },

    about: {
      what: {
        title: 'Wat is MAI-HOME?',
        text: 'Na renovaties blijft CO₂-reductie vaak uit door gedragseffecten, zoals het reboundeffect, waardoor technologie of investeringen alleen niet volstaan om duurzame resultaten te behalen. MAI-HOME helpt bewoners met AI om inzicht te krijgen in hun energiegebruik en biedt praktische ondersteuning en tips, zodat energiekosten lager worden en de CO₂-uitstoot van woningen daadwerkelijk daalt.',
        // Image in the "What is MAI-HOME?" section
        // Location: /public/images/mai-home/mai-home-cover.webp
        image: '/images/mai-home/mai-home-cover.webp'
      },
      who: {
        title: 'Voor wie is het?',
        text: 'MAI-HOME is er voor bewoners, met speciale aandacht voor minder draagkrachtige huishoudens, en voor woningcorporaties die hun investeringen slimmer willen inzetten. Met behulp van AI krijgen zij gedetailleerd inzicht in hun energiegebruik en praktische ondersteuning om energiekosten te verlagen, duurzaam gedrag te stimuleren en de CO₂-uitstoot van woningen significant te verminderen.'
      }
    },

    // Photo albums for events
    // To add more photos: add image to /public/images/mai-home/ and reference it below
    albums: [
      {
        id: 2,
        eventId: 3,  // Links to Event 3: "Lunch Event!" (Jan 12)
        title: 'Event 12 januari 2026: Community Lunch',
        coverImage: '/images/mai-home/commlunch0.webp',
        images: [
          '/images/mai-home/commlunch0.webp',
          '/images/mai-home/commlunch.webp',
          '/images/mai-home/commlunch2.webp',
          '/images/mai-home/commlunch3.webp'
        ]
      },
      {
        id: 1,
        eventId: 1,  // Links to Event 1: "Van Kou naar Kracht!" (Dec 4)
        title: 'Event 04 december 2025: Van Kou naar Kracht',
        coverImage: '/images/mai-home/kou-naar-kracht.webp',
        images: [
          '/images/mai-home/kou-naar-kracht.webp',
          '/images/mai-home/kou-naar-kracht2.webp',
          '/images/mai-home/kou-naar-kracht3.webp',
          '/images/mai-home/kou-naar-kracht4.webp',
          '/images/mai-home/kou-naar-kracht5.webp',
          '/images/mai-home/kou-naar-kracht6.webp',
          '/images/mai-home/kou-naar-kracht7.webp',
          '/images/mai-home/kou-naar-kracht8.webp',
          '/images/mai-home/kou-naar-kracht9.webp',
        ]
      },
      {
        id: 3,
        eventId: 4,
        // No eventId - this is just a general album
        title: 'Event 09 september 2025: Lunch, energie besparende tips en theater!',
        coverImage: '/images/mai-home/theater.webp',
        images: [
          '/images/mai-home/theater.webp',
          '/images/mai-home/theater3.webp',
          '/images/mai-home/theater1.webp',
          '/images/mai-home/theater4.webp',
          '/images/mai-home/theater5.webp',
          '/images/mai-home/theater6.webp',
          '/images/mai-home/theater7.webp',
          '/images/mai-home/theater8.webp',
          '/images/mai-home/theater9.webp',
          '/images/mai-home/theater10.webp',
          '/images/mai-home/theater11.webp',

        ]
      }
    ],

    social: {
      instagram: {
        username: 'MAI-HOME',
        url: 'https://www.instagram.com/mai.home.tips/'
      }
    },

    contact: {
      title: 'Neem deel aan de MAI-HOME Whatsapp community',
      buttonText: 'Join WhatsApp',
      // WhatsApp QR code image
      // Location: /public/images/mai-home/mai-home-qr.webp
      image: '/images/mai-home/mai-home-qr.webp',
      link: 'https://chat.whatsapp.com/CgcnWtX...'
    }
  },

  {
    id: 'code-for-belgium',
    name: 'Code For Belgium',
    color: 'rgb(207, 0, 15)',
    secondaryColor: 'rgb(255, 80, 80)',

    // Image shown on community cards (homepage)
    // Location: /public/images/code-for-belgium/card.webp
    cardImage: '/images/code-for-belgium/card.webp',
    cardDescription: 'Projecten voor de overheid van de bevolking!',
    cardBorderColor: 'rgba(151, 0, 0, 0.8)',

    hero: {
      // Large banner image at top of detail page
      // Location: /public/images/code-for-belgium/hero.webp
      image: '/images/code-for-belgium/hero.webp',
    },

    about: {
      what: {
        title: 'Wat is Code For Belgium?',
        text: 'Code for Belgium is een community van developers, designers, en burgers die technologie inzetten voor het algemeen belang. We bouwen open source tools en applicaties die maatschappelijke problemen oplossen.',
        image: '/images/code-for-belgium/hero.webp'
      },
      who: {
        title: 'Voor wie is het?',
        text: 'Voor iedereen die gelooft in de kracht van open source en civic tech. Of je nu developer, designer, of gewoon geïnteresseerd bent, je bent welkom om bij te dragen aan projecten die impact maken.'
      }
    },

    albums: [
      {
        id: 1,
        eventId: 2,
        title: 'Project Onthullingen December 2025',
        coverImage: '/images/code-for-belgium/onth0.webp',
        images: [
          '/images/code-for-belgium/onth0.webp',
          '/images/code-for-belgium/onth1.webp',
          '/images/code-for-belgium/onth2.webp',
          '/images/code-for-belgium/onth3.webp',
          '/images/code-for-belgium/onth4.webp',
          '/images/code-for-belgium/onth5.webp',
          '/images/code-for-belgium/onth6.webp',
          '/images/code-for-belgium/onth7.webp',
          '/images/code-for-belgium/onth8.webp',
          '/images/code-for-belgium/onth9.webp',
          '/images/code-for-belgium/onth10.webp',
        

        ]
      }
    ],

    social: {
      instagram: {
        username: 'codeforbelgium',
        url: 'https://www.instagram.com/codeforbelgium/'
      }
    },

    contact: {
      title: 'Bezoek de Code For Belgium website',
      buttonText: 'Bezoek Website',
      // Website preview image for contact section
      // Location: /public/images/code-for-belgium/link-cover.webp
      image: '/images/code-for-belgium/link-cover.webp',
      link: 'https://codeforbelgium.org'
    }
  },

  {
    id: 'women-in-science',
    name: 'Women in Science',
    color: 'rgb(189, 111, 130)',
    secondaryColor: 'rgb(177, 143, 131)',

    // Image shown on community cards (homepage)
    // Location: /public/images/women-in-science/card.webp
    cardImage: '/images/women-in-science/card.webp',
    cardDescription: 'Vrouwen binnen Wetenschap in de kijker!',
    cardBorderColor: 'rgba(161, 127, 102, 0.8)',

    hero: {
      // Large banner image at top of detail page
      // Location: /public/images/women-in-science/hero.webp
      image: '/images/women-in-science/hero.webp',
    },

    about: {
      what: {
        title: 'Wat is Women in Science?',
        text: 'Women in Science gebruikt technologie om de relatie tussen burgers en overheid te verbeteren. We ontwikkelen tools die transparantie, participatie en samenwerking bevorderen.',
        image: '/images/women-in-science/hero.webp'
      },
      who: {
        title: 'Voor wie is het?',
        text: 'Voor iedereen die wil bijdragen aan een betere samenleving door middel van technologie. Van studenten tot professionals, iedereen is welkom.'
      }
    },

    albums: [],

    social: {
      instagram: {
        username: 'civictech',
        url: 'https://www.instagram.com/civictech/'
      }
    },

    contact: {
      title: 'Bezoek de Women in Science website',
      buttonText: 'Bezoek Website',
      // Website preview/logo for contact section
      // Location: /public/images/women-in-science/card.webp
      image: '/images/women-in-science/card.webp',
      link: 'https://womeninscience.be'
    }
  },

  {
    id: 'aidopt',
    name: 'AIdopt',
    color: 'rgba(0, 93, 157, 0.8)',
    secondaryColor: 'rgb(122, 143, 200)',

    // Image shown on community cards (homepage)
    // Location: /public/images/aidopt/card.webp
    cardImage: '/images/aidopt/card.webp',
    cardDescription: 'AI assistants & agents als versterkende schakel.',
    cardBorderColor: 'rgba(0, 93, 157, 0.8)',

    hero: {
      // Large banner image at top of detail page
      // Location: /public/images/aidopt/hero.webp
      image: '/images/aidopt/hero.webp',
    },

    about: {
      what: {
        title: 'Wat is AIdopt?',
        text: 'Open Data draait om het toegankelijk maken van data voor iedereen. We werken aan projecten die overheidsinformatie en data gebruiken om inzichten te creëren en impact te maken.',
        image: '/images/aidopt/hero.webp'
      },
      who: {
        title: 'Voor wie is het?',
        text: 'Voor data-enthousiastelingen, developers, researchers en iedereen die gelooft in de kracht van open en toegankelijke data.'
      }
    },

    albums: [],

    social: {
      instagram: {
        username: 'opendata',
        url: 'https://www.instagram.com/opendata/'
      }
    },

    contact: {
      title: 'Bezoek de AIdopt website',
      buttonText: 'Bezoek Website',
      // Website preview/logo for contact section
      // Location: /public/images/aidopt/card.webp
      image: '/images/aidopt/site.webp',
      link: 'https://aidopt.be'
    }
  },

  {
    id: 'llaser',
    name: 'Live by your own Code',
    color: 'rgba(0, 76, 76, 1)',
    secondaryColor: 'rgba(115, 164, 188, 1)',

    // Image shown on community cards (homepage)
    // Location: /public/images/llaser/card.webp
    cardImage: '/images/llaser/card.webp',
    cardDescription: 'Secure. Smart. Seamless.',
    cardBorderColor: 'rgb(48, 140, 140)',

    hero: {
      // Large banner image at top of detail page
      // Location: /public/images/llaser/hero.webp
      image: '/images/llaser/hero.webp',
    },

    about: {
      what: {
        title: 'Wat is Live by your own Code?',
        text: 'Tech for Good is een beweging die technologie inzet voor positieve sociale en milieu-impact. We verbinden mensen en organisaties die innovatie willen gebruiken om de wereld beter te maken.',
        image: '/images/llaser/hero.webp'
      },
      who: {
        title: 'Voor wie is het?',
        text: 'Voor iedereen die wil bijdragen aan technologie met een positieve impact. Of je nu startup founder, developer, of social entrepreneur bent, join de beweging!'
      }
    },

    albums: [],

    social: {
      instagram: {
        username: 'techforgood',
        url: 'https://www.instagram.com/techforgood/'
      }
    },

    contact: {
      title: 'Bezoek de Live by your own Code website',
      buttonText: 'Bezoek Website',
      // Website preview/logo for contact section
      // Location: /public/images/llaser/card.webp
      image: '/images/llaser/site.webp',
      link: 'https://llaser.be'
    }
  }
]

export function getCommunityById(id) {
  return communities.find(c => c.id === id)
}

export function getCommunityByName(name) {
  return communities.find(c => c.name.toLowerCase() === name.toLowerCase())
}
