// src/data/events.js
import carouselImg1 from '@/assets/carrousel-imgs/img1.webp'
import carouselImg2 from '@/assets/carrousel-imgs/img2.webp'
import cardImg1 from '@/assets/community-imgs/MAI-HOME-hs.png'
import cardImg2 from '@/assets/community-imgs/Civic-Tech-hs.png'

export const communities = [
  { name: 'MAI-HOME', color: 'rgb(50, 50, 120)' },
  { name: 'Code For Belgium', color: 'rgb(207, 0, 15)' },
  { name: 'Women in Science', color: 'rgb(177, 143, 131)' },
  { name: 'AIdopt', color: 'rgb(122, 143, 200)' },
  { name: 'Live by your own code', color: 'rgb(0, 76, 76)' }
]

export const events = [
  {
    // Event 1
    id: 1,
    carousel: {
      image: carouselImg1,
      color: 'rgba(50, 50, 120)',
      title: 'Van Kou naar Kracht!',
      community: 'MAI-HOME Event 4 december',
      text: 'Event in Tilburg, ivm MAI-HOME',
      cta: 'Bekijk de recap!'
    },
    latestEvent: {
      image: carouselImg1,
      color: 'rgb(50, 50, 120)',
      title: 'Van Kou naar Kracht!',
      date: '2025-12-04',
      location: 'Tilburg',
      community: 'MAI-HOME',
      text: 'Event in Tilburg, ivm MAI-HOME',
      cta: 'Bekijk recap',
    }
  },
  {
    // Event 2
    id: 2,
    carousel: {
      image: carouselImg2,
      color: 'rgba(207, 0, 15)',
      title: 'Project Onthullingen!',
      community: 'Civic Tech Event 11 december',
      text: 'Onthullingen van de projecten HELP+ en OpenInzicht, gevierd met Pizza!',
      cta: 'Bekijk de recap!'
    },
    latestEvent: {
      image: carouselImg2,
      title: 'Project Onthullingen!',
      color: 'rgb(207, 0, 15)',
      date: '2025-12-11',
      location: 'Hasselt',
      community: 'Code For Belgium',
      text: 'Onthullingen van de projecten HELP+ en OpenInzicht, gevierd met Pizza!',
      cta: 'Bekijk recap',
    }
  },
  {
    // Event 3
    id: 3,
    carousel: null,
    latestEvent: {
      image: cardImg1,
      title: 'Lunch Event!',
      color: 'rgb(50, 50, 120)',
      date: '2026-01-12',
      location: 'Bilzen Hoeselt',
      community: 'MAI-HOME',
      text: 'Samen lunchen met de MAI-HOME Community!',
      cta: 'Bekijk recap',
    }
  }
  // Voeg hier meer Events toe!
]