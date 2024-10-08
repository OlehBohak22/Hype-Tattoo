import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination, EffectCards } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

document.addEventListener('DOMContentLoaded', function () {
  const journeyItems = document.querySelectorAll('.journey-item');
  const infoContainers = document.querySelectorAll('.journey-info-container');

  journeyItems.forEach(item => {
    item.addEventListener('click', function () {
      // Видаляємо клас active у всіх journey-item та journey-info-container
      journeyItems.forEach(i => i.classList.remove('active'));
      infoContainers.forEach(container => container.classList.remove('active'));

      // Додаємо клас active до вибраного journey-item
      this.classList.add('active');

      // Знаходимо відповідний journey-info-container і показуємо його
      const target = this.getAttribute('data-target');
      const activeContainer = document.querySelector(
        `.journey-info-container[data-info="${target}"]`
      );
      if (activeContainer) {
        activeContainer.classList.add('active');
      }
    });
  });
});

const menuBtn = document.querySelector('.header-menu-btn');
const closeMenuBtn = document.querySelector('.close-overlay');
const menuOverlay = document.querySelector('.menu-overlay');

// Функція для закриття меню
const closeMenu = () => {
  menuOverlay.classList.remove('active');
  document.body.classList.remove('no-scroll'); // Відновити скрол
};

// Відкриття меню
menuBtn.addEventListener('click', () => {
  menuOverlay.classList.add('active');
  document.body.classList.add('no-scroll'); // Заблокувати скрол
});

// Закриття меню по кліку на кнопку закриття або посилання всередині оверлею
closeMenuBtn.addEventListener('click', closeMenu);

// Закриття меню по кліку на будь-яке посилання всередині меню
menuOverlay.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    closeMenu();
  }
});

// Отримуємо всі елементи аккордеону
const faqItems = document.querySelectorAll('.faq-item');

// Додаємо обробник події для кожного елемента
faqItems.forEach(item => {
  const faqTitle = item.querySelector('.faq-title-container');

  faqTitle.addEventListener('click', () => {
    // Перевіряємо чи вже є активний елемент, якщо так - закриваємо його
    const activeItem = document.querySelector('.faq-item.active');
    if (activeItem && activeItem !== item) {
      activeItem.classList.remove('active');
      activeItem.querySelector('.faq-acardeon-js').style.maxHeight = null; // Закриваємо контент
      activeItem.querySelector('.faq-img img').src =
        '/Hype-Tattoo/public/plus.svg'; // Змінюємо іконку на плюс
    }

    // Тепер відкриваємо або закриваємо поточний елемент
    item.classList.toggle('active');
    const content = item.querySelector('.faq-acardeon-js');
    if (item.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px'; // Відкриваємо контент
      item.querySelector('.faq-img img').src = '/Hype-Tattoo/public/minus.svg'; // Змінюємо іконку на мінус
    } else {
      content.style.maxHeight = null; // Закриваємо контент
      item.querySelector('.faq-img img').src = '/Hype-Tattoo/public/plus.svg'; // Змінюємо іконку на плюс
    }
  });
});
