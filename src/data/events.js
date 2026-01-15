// src/data/events.js
import carouselImg1 from '@/assets/carrousel-imgs/img1.webp'
import carouselImg2 from '@/assets/carrousel-imgs/img2.webp'
import cardImg1 from '@/assets/community-imgs/MAI-HOME-hs.png'
import cardImg2 from '@/assets/community-imgs/Civic-Tech-hs.png'

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
      title: 'Van Kou naar Kracht!',
      date: '4 Dec 2025',
      location: 'Tilburg',
      cta: 'Bekijk recap',
      color: 'rgba(50, 50, 120)'
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
      date: '11 Dec 2025',
      location: 'Tilburg',
      cta: 'Bekijk recap',
      color: 'rgba(207, 0, 15)'
    }
  },
 {
    // Event 2
    id: 3,
    carousel: null,
    latestEvent: {
      image: cardImg1,
      title: 'Lunch Event!',
      date: '12 Jan 2026',
      location: 'Bilzen Hoeselt',
      cta: 'Bekijk recap',
      color: 'rgba(50, 50, 120)'
    }
  }
  // add more events here
]
