import maiHomeCard from '@/assets/community-imgs/MAI-HOME-hs.webp'
import maiHomeCover from '@/assets/mai-home-imgs/mai-home-cover.webp'
import maiHomeHero from '@/assets/mai-home-imgs/mai-home-hero.webp'
import maiHomeQR from '@/assets/mai-home-imgs/mai-home-qr.webp'
import knk from '@/assets/mai-home-imgs/kou-naar-kracht.webp'
import knk2 from '@/assets/mai-home-imgs/kou-naar-kracht2.webp'
import cl from '@/assets/mai-home-imgs/commlunch0.webp'
import cl2 from '@/assets/mai-home-imgs/commlunch.webp'
import cl3 from '@/assets/mai-home-imgs/commlunch2.webp'
import th from '@/assets/mai-home-imgs/theater.webp'
import th2 from '@/assets/mai-home-imgs/theater1.webp'
import th3 from '@/assets/mai-home-imgs/theater2.webp'

import civicTechHero from '@/assets/community-imgs/Civic-Tech-hs.webp'
import linkc from '@/assets/codeforbelgium-imgs/link-cover.webp'

import womenInScienceCard from '@/assets/community-imgs/Women-in-Science-hs.webp'

import aidoptCard from '@/assets/community-imgs/AIDOPT-hs.webp'

import llaserCard from '@/assets/community-imgs/LLASER-hs.webp'


export const communities = [
  {
    id: 'mai-home',
    name: 'MAI-HOME',
    color: 'rgb(50, 50, 120)',
    secondaryColor: 'rgb(76, 76, 147)',
    cardImage: maiHomeCard,
    cardDescription: 'Bespaar energie aan de hand van AI!',
    cardBorderColor: 'rgba(192, 73, 255, 0.8)',
    
    hero: {
      image: maiHomeHero,
    },
    
    about: {
      what: {
        title: 'Wat is MAI-HOME?',
        text: 'Na renovaties blijft CO₂-reductie vaak uit door gedragseffecten, zoals het reboundeffect, waardoor technologie of investeringen alleen niet volstaan om duurzame resultaten te behalen. MAI-HOME helpt bewoners met AI om inzicht te krijgen in hun energiegebruik en biedt praktische ondersteuning en tips, zodat energiekosten lager worden en de CO₂-uitstoot van woningen daadwerkelijk daalt.',
        image: maiHomeCover
      },
      who: {
        title: 'Voor wie is het?',
        text: 'MAI-HOME is er voor bewoners, met speciale aandacht voor minder draagkrachtige huishoudens, en voor woningcorporaties die hun investeringen slimmer willen inzetten. Met behulp van AI krijgen zij gedetailleerd inzicht in hun energiegebruik en praktische ondersteuning om energiekosten te verlagen, duurzaam gedrag te stimuleren en de CO₂-uitstoot van woningen significant te verminderen.'
      }
    },
    
    albums: [
  {
    id: 1,
    eventId: 1,  // Links to Event 1: "Van Kou naar Kracht!" (Dec 4)
    title: 'Event 04 december 2025: Van Kou naar Kracht',
    coverImage: knk,
    images: [knk, knk2]
  },
  {
    id: 2,
    eventId: 3,  // Links to Event 3: "Lunch Event!" (Jan 12)
    title: 'Event 12 januari 2026: Community Lunch',
    coverImage: cl,
    images: [cl, cl2, cl3 ]
  },
  {
    id: 3,
    // No eventId - this is just a general album
    title: 'Event 09 september 2025: Lunch, energie besparende tips en theater!',
    coverImage: th,
    images: [th, th2, th3]
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
      image: maiHomeQR,
      link: 'https://chat.whatsapp.com/CgcnWtX...'
    }
  },

  {
    id: 'code-for-belgium',
    name: 'Code For Belgium',
    color: 'rgb(207, 0, 15)',
    secondaryColor: 'rgb(255, 80, 80)',
    cardImage: civicTechHero,
    cardDescription: 'Projecten voor de overheid van de bevolking!',
    cardBorderColor: 'rgba(151, 0, 0, 0.8)',
    
    hero: {
      image: civicTechHero,
    },
    
    about: {
      what: {
        title: 'Wat is Code For Belgium?',
        text: 'Code for Belgium is een community van developers, designers, en burgers die technologie inzetten voor het algemeen belang. We bouwen open source tools en applicaties die maatschappelijke problemen oplossen.',
        image: civicTechHero
      },
      who: {
        title: 'Voor wie is het?',
        text: 'Voor iedereen die gelooft in de kracht van open source en civic tech. Of je nu developer, designer, of gewoon geïnteresseerd bent, je bent welkom om bij te dragen aan projecten die impact maken.'
      }
    },
    
    albums: [
      {
        id: 1,
        title: 'Project Onthullingen December 2025',
        coverImage: civicTechHero,
        images: [civicTechHero]
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
      image: linkc,
      link: 'https://codeforbelgium.org'
    }
  },

  {
    id: 'women-in-science',
    name: 'Women in Science',
    color: 'rgb(34, 197, 94)',
    secondaryColor: 'rgb(74, 222, 128)',
    cardImage: womenInScienceCard,
    cardDescription: 'Vrouwen binnen Wetenschap in de kijker!',
    cardBorderColor: 'rgba(161, 127, 102, 0.8)',
    
    hero: {
      image: civicTechHero,
    },
    
    about: {
      what: {
        title: 'Wat is Women in Science?',
        text: 'Women in Science gebruikt technologie om de relatie tussen burgers en overheid te verbeteren. We ontwikkelen tools die transparantie, participatie en samenwerking bevorderen.',
        image: civicTechHero
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
      image: womenInScienceCard,
      link: 'https://womeninscience.be'
    }
  },

  {
    id: 'aidopt',
    name: 'AIdopt',
    color: 'rgb(59, 130, 246)',
    secondaryColor: 'rgb(96, 165, 250)',
    cardImage: aidoptCard,
    cardDescription: 'AI assistants & agents als versterkende schakel.',
    cardBorderColor: 'rgba(0, 93, 157, 0.8)',
    
    hero: {
      image: civicTechHero,
    },
    
    about: {
      what: {
        title: 'Wat is AIdopt?',
        text: 'Open Data draait om het toegankelijk maken van data voor iedereen. We werken aan projecten die overheidsinformatie en data gebruiken om inzichten te creëren en impact te maken.',
        image: civicTechHero
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
      image: aidoptCard,
      link: 'https://aidopt.be'
    }
  },

  {
    id: 'llaser',
    name: 'Live by your own Code',
    color: 'rgb(139, 92, 246)',
    secondaryColor: 'rgb(167, 139, 250)',
    cardImage: llaserCard,
    cardDescription: 'Secure. Smart. Seamless.',
    cardBorderColor: 'rgb(48, 140, 140)',
    
    hero: {
      image: civicTechHero,
    },
    
    about: {
      what: {
        title: 'Wat is Live by your own Code?',
        text: 'Tech for Good is een beweging die technologie inzet voor positieve sociale en milieu-impact. We verbinden mensen en organisaties die innovatie willen gebruiken om de wereld beter te maken.',
        image: civicTechHero
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
      image: llaserCard,
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