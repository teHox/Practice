import '../../node_modules/focus-visible/dist/focus-visible';
import '../scss/main.scss';
import '../index.html';
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

Swiper.use([Navigation, Pagination, Scrollbar]);

const burger = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".burger__menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("header__burger_active");
  burgerMenu.classList.toggle("burger__menu_active");
});

const burgerBtn = document.querySelector(".burger-btn");
const headerInfo = document.querySelector(".header__info");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("burger-btn_active");
  headerInfo.classList.toggle("header__info_active");
});

const swiper = new Swiper('.categories-slider',{
  spaceBetween: 30,
  breakpoints:{
    1520:{
      slidesPerView: 4.5,
    },
    1000:{
      slidesPerView: 4,
    },
    100:{
      slidesPerView: 3,
    },
  }
});

const swiperSecond = new Swiper('.guns-slider',{
  spaceBetween: 30,
  scrollbar:{
    el: '.swiper-scrollbar',
    draggable: true,
  },
  breakpoints:{
    1050:{
      slidesPerView: 4,
    },
    769:{
      slidesPerView: 3,
    },
    350:{
      slidesPerView: 2,
    },
    100:{
      slidesPerView: 1.5,
    }
  }
});

// popup куки

var delay_popup = 1000;
setTimeout("document.getElementById('cookie').style.display='block'", delay_popup);
