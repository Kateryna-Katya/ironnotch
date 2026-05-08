import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';

// SYSTEMS
const systemsSwiper = new Swiper('.systems-swiper', {
  modules: [Navigation],
  slidesPerView: 1.5,
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
  modules: [Autoplay],
  slidesPerView: 1.2,
  spaceBetween: 16,
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    1440: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});