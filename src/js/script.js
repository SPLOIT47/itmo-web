import "../sass/style.scss";
import Swiper from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper('.gallery-swiper', {
  modules: [Autoplay, Pagination, Navigation],

  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  centeredSlides: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1200: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: -110,
        centeredSlides: false,
    },
      1920: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: -30,
          centeredSlides: false,
      }
  },
});

swiper.on('slideChange', function () {
  console.log('slide changed');
});

const menu = document.querySelector('.menu');

document.querySelector('.burger').addEventListener('click', function() {
  menu.classList.add('menu--active');
});

const menuClose = document.querySelector('.menu-close');

menuClose.addEventListener('click', function() {
  menu.classList.remove('menu--active');
});

const filterButtons = document.querySelectorAll('.filters__filter-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));

        button.classList.add('active');
    });
});

