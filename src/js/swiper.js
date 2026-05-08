import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';

// SYSTEMS
const systemsSwiper = new Swiper('.systems-swiper', {
  modules: [Navigation],
  slidesPerView: 2,
  spaceBetween: 16,
loop: true,
  navigation: {
    nextEl: '.systems-next',
    },
    breakpoints: {
    1440: {
            slidesPerView: 3,
        spaceBetween: 24,
    },
  },
});

// GALLERY
const gallerySwiper = new Swiper('.gallery-swiper', {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 16,
loop: true,
  navigation: {
    nextEl: '.gallery-next',
    },
      breakpoints: {
    1440: {
            slidesPerView: 2,
        spaceBetween: 24,
    },
  },
});