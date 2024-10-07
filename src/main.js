import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination, EffectCards } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Ініціалізація Swiper з режимом loop
const swiper = new Swiper('.about-swiper-container', {
  modules: [Navigation, Pagination],

  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,

  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },

  pagination: {
    el: '.pagination',
    clickable: true,
  },
});

// Функція для оновлення кастомної пагінації
function updateCustomPagination() {
  const bullets = document.querySelectorAll(
    '.custom-pagination .pagination-bullet'
  );

  // Отримуємо реальний індекс слайду, враховуючи режим loop
  const realIndex = swiper.realIndex;

  bullets.forEach((bullet, index) => {
    bullet.classList.toggle('active', index === realIndex);

    // Додаємо обробник подій для кліку по кастомній пагінації
    bullet.onclick = function () {
      swiper.slideToLoop(index); // Використовуємо slideToLoop для коректної роботи з loop
    };
  });
}

// Викликаємо функцію при зміні слайду
swiper.on('slideChange', updateCustomPagination);

// Оновлюємо кастомну пагінацію після ініціалізації
updateCustomPagination();

const swiperEx = new Swiper('.ex-student-swiper-container', {
  modules: [EffectCards, Navigation],
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  slidesPerView: 'auto',
  centeredSlides: true,
  effect: 'cards',
  cardsEffect: {
    // perSlideOffset: 20, // Space between cards in px
    // perSlideRotate: 1, // Rotation of cards in degrees
    // slideShadows: true,
  },
});
