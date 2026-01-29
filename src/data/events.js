// src/data/events.js
import carouselImg1 from '@/assets/carrousel-imgs/img1.webp'
import carouselImg2 from '@/assets/carrousel-imgs/img2.webp'
import cardImg1 from '@/assets/community-imgs/MAI-HOME-hs.webp'
import cardImg2 from '@/assets/community-imgs/Civic-Tech-hs.webp'

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
    showInCarousel: true,
    showInLatest: true,
    image: carouselImg1,
    color: 'rgb(50, 50, 120)',
    title: 'Van Kou naar Kracht!',
    date: '2025-12-04',
    location: 'Tilburg',
    community: 'MAI-HOME',
    text: 'Event in Tilburg, ivm MAI-HOME',
    cta: 'Bekijk de recap!'
  },
  {
    // Event 2
    id: 2,
    showInCarousel: true,
    showInLatest: true,
    image: carouselImg2,
    color: 'rgb(207, 0, 15)',
    title: 'Project Onthullingen!',
    date: '2025-12-11',
    location: 'Hasselt',
    community: 'Code For Belgium',
    text: 'Onthullingen van de projecten HELP+ en OpenInzicht, gevierd met Pizza!',
    cta: 'Bekijk de recap!'
  },
  {
    // Event 3
    id: 3,
    showInCarousel: false,
    showInLatest: true,
    image: cardImg1,
    color: 'rgb(50, 50, 120)',
    title: 'Lunch Event!',
    date: '2026-01-12',
    location: 'Bilzen Hoeselt',
    community: 'MAI-HOME',
    text: 'Samen lunchen met de MAI-HOME Community!',
    cta: 'Bekijk recap'
  },
  {
    // Event 4
    id: 4,
    showInCarousel: false,
    showInLatest: false,
    image: carouselImg1,
    color: 'rgb(50, 50, 120)',
    title: 'Theater',
    date: '2025-09-09',
    location: 'Bilzen-Hoeselt',
    community: 'MAI-HOME',
    text: 'Event in Bilzen-Hoeselt, ivm MAI-HOME',
    cta: 'Bekijk de recap!'
  },
  // Voeg hier meer Events toe!
]