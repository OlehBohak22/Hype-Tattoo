import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

new Swiper('.about-swiper-container', {
  modules: [Navigation, Pagination],

  slidesPerView: 1,
  spaceBetween: 10,

  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },

  pagination: {
    el: '.pagination',
    clickable: true,
  },
});
