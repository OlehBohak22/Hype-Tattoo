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
  loop: true,
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
      activeItem.querySelector('.faq-img img').src = './plus.svg'; // Змінюємо іконку на плюс
    }

    // Тепер відкриваємо або закриваємо поточний елемент
    item.classList.toggle('active');
    const content = item.querySelector('.faq-acardeon-js');
    if (item.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px'; // Відкриваємо контент
      item.querySelector('.faq-img img').src = './minus.svg'; // Змінюємо іконку на мінус
    } else {
      content.style.maxHeight = null; // Закриваємо контент
      item.querySelector('.faq-img img').src = './plus.svg'; // Змінюємо іконку на плюс
    }
  });
});

// Отримуємо всі інпути в формі
const inputs = document.querySelectorAll('.form-input-container input');

// Перевіряємо кожен інпут на наявність введеного тексту
inputs.forEach(input => {
  // Перевірка при завантаженні сторінки (якщо вже введене значення)
  if (input.value) {
    input.classList.add('filled');
  }

  // Перевірка при втраті фокусу
  input.addEventListener('blur', () => {
    if (input.value) {
      input.classList.add('filled'); // Додаємо клас, якщо є текст
    } else {
      input.classList.remove('filled'); // Видаляємо клас, якщо поле порожнє
    }
  });
});

// Отримуємо всі кнопки, які відкривають попапи
const openPopupButtons = document.querySelectorAll('.open-popup');

// Додаємо обробники подій на всі кнопки
openPopupButtons.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault(); // Запобігаємо стандартній поведінці посилання

    // Отримуємо ID попапу з атрибута data-popup-id
    const popupId = button.getAttribute('data-popup-id');
    const popup = document.getElementById(popupId); // Отримуємо попап по ID

    // Якщо це попап з ID tariffPopup, оновлюємо його заголовок та іконку
    if (popupId === 'tariffPopup') {
      // Знаходимо батьківський елемент тарифу
      const tariffItem = button.closest('.tariff-item');

      // Отримуємо дані з атрибутів тарифу
      const title = tariffItem.getAttribute('data-title');
      const icon = tariffItem.getAttribute('data-icon');

      // Оновлюємо заголовок і іконку в попапі
      const popupTitle = popup.querySelector('.popup-title-container p');
      const popupIcon = popup.querySelector('.popup-title-container svg use');
      popupTitle.textContent = `You plan ${title}`;
      popupIcon.setAttribute('href', `/Hype-Tattoo${icon}`);
    }

    // Відкриваємо попап, додаючи клас active
    popup.classList.add('active');
  });
});

// Отримуємо всі елементи для закриття попапу
const closePopupButtons = document.querySelectorAll('.popup-close');

// Додаємо обробники для закриття попапу
closePopupButtons.forEach(button => {
  button.addEventListener('click', () => {
    const popup = button.closest('.popup-overlay');
    popup.classList.remove('active');
  });
});

// Закриття попапу при кліку на фон
const popups = document.querySelectorAll('.popup-overlay');
popups.forEach(popup => {
  popup.addEventListener('click', e => {
    if (e.target === popup) {
      popup.classList.remove('active');
    }
  });
});
