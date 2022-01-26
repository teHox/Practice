/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js?9e1e":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.esm.js");




swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_3__.Scrollbar]);
var burger = document.querySelector(".header__burger");
var burgerMenu = document.querySelector(".burger__menu");
burger.addEventListener("click", function () {
  burger.classList.toggle("header__burger_active");
  burgerMenu.classList.toggle("burger__menu_active");
});
var burgerBtn = document.querySelector(".burger-btn");
var headerInfo = document.querySelector(".header__info");
burgerBtn.addEventListener("click", function () {
  burgerBtn.classList.toggle("burger-btn_active");
  headerInfo.classList.toggle("header__info_active");
});
var swiper = new swiper__WEBPACK_IMPORTED_MODULE_3__["default"]('.categories-slider', {
  spaceBetween: 30,
  breakpoints: {
    1520: {
      slidesPerView: 4.5
    },
    1000: {
      slidesPerView: 4
    },
    100: {
      slidesPerView: 3
    }
  }
});
var swiperSecond = new swiper__WEBPACK_IMPORTED_MODULE_3__["default"]('.guns-slider', {
  spaceBetween: 30,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
  breakpoints: {
    1050: {
      slidesPerView: 4
    },
    769: {
      slidesPerView: 3
    },
    350: {
      slidesPerView: 2
    },
    100: {
      slidesPerView: 1.5
    }
  }
}); // popup куки

var delay_popup = 1000;
setTimeout("document.getElementById('cookie').style.display='block'", delay_popup);

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error("Cannot find module './spritemap.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/arrow-down.svg */ "./img/arrow-down.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/profile.svg */ "./img/profile.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/loop.svg */ "./img/loop.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/turbine.svg */ "./img/turbine.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/burger-arrow.svg */ "./img/burger-arrow.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cartridge.svg */ "./img/cartridge.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/geometry.svg */ "./img/geometry.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/aktuator.svg */ "./img/aktuator.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/servoprivod.svg */ "./img/servoprivod.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/prokladki.svg */ "./img/prokladki.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/zap4asti.svg */ "./img/zap4asti.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/elec-vac-actuator.svg */ "./img/elec-vac-actuator.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/body-tourbine.svg */ "./img/body-tourbine.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/servo-parts.svg */ "./img/servo-parts.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./img/shopping-cart-hover.svg */ "./img/shopping-cart-hover.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./img/first-slide.svg */ "./img/first-slide.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./img/second-slide.svg */ "./img/second-slide.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./img/third-slide.svg */ "./img/third-slide.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./img/fourth-slide.svg */ "./img/fourth-slide.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./img/fifth-slide.svg */ "./img/fifth-slide.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./img/fluid-linear-pop-product.svg */ "./img/fluid-linear-pop-product.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./img/arrow.svg */ "./img/arrow.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ./img/gun.svg */ "./img/gun.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ./img/like.svg */ "./img/like.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ./img/compare.svg */ "./img/compare.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ./img/play.svg */ "./img/play.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ./img/gift-box.svg */ "./img/gift-box.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ./img/footer-logo.svg */ "./img/footer-logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ./img/inst.svg */ "./img/inst.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ./img/facebook.svg */ "./img/facebook.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ./img/twitter.svg */ "./img/twitter.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! ./img/youtube.svg */ "./img/youtube.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_33___ = new URL(/* asset import */ __webpack_require__(/*! ./img/nova-poshta.svg */ "./img/nova-poshta.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_34___ = new URL(/* asset import */ __webpack_require__(/*! ./img/visa.svg */ "./img/visa.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_35___ = new URL(/* asset import */ __webpack_require__(/*! ./img/mastercard.svg */ "./img/mastercard.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_36___ = new URL(/* asset import */ __webpack_require__(/*! ./img/maestro.svg */ "./img/maestro.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_37___ = new URL(/* asset import */ __webpack_require__(/*! ./img/paypal.svg */ "./img/paypal.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_38___ = new URL(/* asset import */ __webpack_require__(/*! ./img/close.svg */ "./img/close.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_39___ = new URL(/* asset import */ __webpack_require__(/*! ./img/arrow-up.svg */ "./img/arrow-up.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_40___ = new URL(/* asset import */ __webpack_require__(/*! ./js/main.js */ "./js/main.js?db67"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___, { hash: "#sprite-logo" });
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);
var ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);
var ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___);
var ___HTML_LOADER_REPLACEMENT_24___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_24___);
var ___HTML_LOADER_REPLACEMENT_25___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_25___);
var ___HTML_LOADER_REPLACEMENT_26___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_26___);
var ___HTML_LOADER_REPLACEMENT_27___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_27___);
var ___HTML_LOADER_REPLACEMENT_28___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_28___);
var ___HTML_LOADER_REPLACEMENT_29___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_29___);
var ___HTML_LOADER_REPLACEMENT_30___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_30___);
var ___HTML_LOADER_REPLACEMENT_31___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_31___);
var ___HTML_LOADER_REPLACEMENT_32___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_32___);
var ___HTML_LOADER_REPLACEMENT_33___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_33___);
var ___HTML_LOADER_REPLACEMENT_34___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_34___);
var ___HTML_LOADER_REPLACEMENT_35___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_35___);
var ___HTML_LOADER_REPLACEMENT_36___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_36___);
var ___HTML_LOADER_REPLACEMENT_37___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_37___);
var ___HTML_LOADER_REPLACEMENT_38___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_38___);
var ___HTML_LOADER_REPLACEMENT_39___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_39___);
var ___HTML_LOADER_REPLACEMENT_40___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_40___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Document</title>\r\n    <!-- <link rel=\"stylesheet\" href=\"css/swiper-bundle.min.css\"> -->\r\n</head>\r\n<body>\r\n    <div class=\"header\">\r\n        <div class=\"header__wrapper\">\r\n            <div class=\"header__header\">\r\n                <!-- <img class=\"header__logo\" src=\"img/logo.svg\"></img> -->\r\n                <svg class=\"header__logo\">\r\n                    <use xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"></use>\r\n                </svg>\r\n                <div class=\"header__info\">\r\n                    <ul class=\"header__menu\">\r\n                        <li><a href=\"\" class=\"header__link\">О Компании</a></li>\r\n                        <div class=\"header__dot\"></div>\r\n                        <li><a href=\"\" class=\"header__link\">Политика конфиденциальности</a></li>\r\n                        <div class=\"header__dot\"></div>\r\n                        <li><a href=\"\" class=\"header__link\">Доставка и оплата</a></li>\r\n                        <div class=\"header__dot\"></div>\r\n                        <li><a href=\"\" class=\"header__link\">Гарантия</a></li>\r\n                    </ul>\r\n                    <div class=\"header__phone\">+38 068 000 00 00 <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"arrow-down\"></div>\r\n                    <div class=\"header__lang-user\">\r\n                        <ul class=\"header__languages\">\r\n                            <li><a href=\"\" class=\"header__lang\">Ua</a></li>\r\n                            <div class=\"header__dot\"></div>\r\n                            <li><a href=\"\" class=\"header__lang\">Ru</a></li>\r\n                        </ul>\r\n                        <a href=\"\" class=\"header__user\">\r\n                            <div class=\"header__sign\">Войти</div>\r\n                            <img class=\"header__profile-logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"profile-logo\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <div id=\"burger\" class=\"burger-btn\"><span></span></div>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" class=\"search\" onclick=\"document.getElementById('search').style.display='block';\">\r\n            </div>\r\n            <div class=\"header__shop\">\r\n                <div class=\"header__catalog\">\r\n                    <div id=\"burger\" class=\"header__burger\"><span></span></div>\r\n                    <div class=\"header__catalog-text\">каталог</div>\r\n                    <div class=\"header__categories\">Все категории</div>\r\n                </div>\r\n                <div class=\"burger__menu\">\r\n                    <a class=\"burger__item\" href=\"\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" class=\"burger__img\">\r\n                        <div class=\"burger__text\">Турбины</div>\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" class=\"burger__arrow\">\r\n                    </a>\r\n                    <a class=\"burger__item\" href=\"\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" class=\"burger__img\">\r\n                        <div class=\"burger__text\">Картриджи</div>\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" class=\"burger__arrow\">\r\n                    </a>\r\n                    <a class=\"burger__item\" href=\"\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" class=\"burger__img\">\r\n                        <div class=\"burger__text\">Геометрии</div>\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" class=\"burger__arrow\">\r\n                    </a>\r\n                    <a class=\"burger__item\" href=\"\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" class=\"burger__img\">\r\n                        <div class=\"burger__text\">Актуаторы</div>\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" class=\"burger__arrow\">\r\n                    </a>\r\n                    <a class=\"burger__item\" href=\"\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" class=\"burger__img\">\r\n                        <div class=\"burger__text\">Сервоприводы</div>\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" class=\"burger__arrow\">\r\n                    </a>\r\n                    <a class=\"burger__item\" href=\"\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" class=\"burger__img\">\r\n                        <div class=\"burger__text\">Прокладки</div>\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" class=\"burger__arrow\">\r\n                    </a>\r\n                    <a class=\"burger__item\" href=\"\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" class=\"burger__img\">\r\n                        <div class=\"burger__text\">Прочие запчасти</div>\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" class=\"burger__arrow\">\r\n                    </a>\r\n                    <a class=\"burger__item\" href=\"\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" class=\"burger__img\">\r\n                        <div class=\"burger__text\">Электронно вакуумные актуаторы</div>\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" class=\"burger__arrow\">\r\n                    </a>\r\n                    <a class=\"burger__item\" href=\"\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" class=\"burger__img\">\r\n                        <div class=\"burger__text\">Корпуса турбины</div>\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" class=\"burger__arrow\">\r\n                    </a>\r\n                    <a class=\"burger__item\" href=\"\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" class=\"burger__img\">\r\n                        <div class=\"burger__text\">Запчасти для сервопривода</div>\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" class=\"burger__arrow\">\r\n                    </a>\r\n                </div>\r\n                <div class=\"header__search\">\r\n                    <input type=\"search\" placeholder=\"Поиск, например “турбина”\">\r\n                    <input type=\"submit\" value=\"\">\r\n                </div>\r\n                <div class=\"header__vidgets\">\r\n                    <div class=\"header__vidget\">\r\n                        <div class=\"header__balance\"></div>\r\n                    </div>\r\n                    <div class=\"header__vidget\">\r\n                        <div class=\"header__favourite\"></div>\r\n                    </div>\r\n                    <div class=\"header__vidget header__vidget-hover\">\r\n                        <div class=\"header__shopping-cart\"></div>\r\n                        <div class=\"number\">3</div>\r\n                        <div class=\"basket\">\r\n                            <div class=\"basket__text\">В корзине <b>3 товара </b><br> На сумму <b>30 000 ₴</b></div>\r\n                            <div class=\"basket__checkout\">\r\n                                <p>Оформить заказ</p>\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"\">\r\n                            </div>\r\n                            <a href=\"\" class=\"basket__edit\">Редактировать заказ</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"categories\">\r\n        <div class=\"categories__ellips-first\"></div>\r\n        <div class=\"categories__ellips-second\"></div>\r\n        <div class=\"categories__wrapper\">\r\n            <div class=\"categories__header\">\r\n                <div class=\"categories__title\">Популярные категории</div>\r\n                <a href=\"\" class=\"categories__all-categories\">все категории</a>\r\n            </div>\r\n            <div class=\"categories-slider swiper-container\">\r\n                <div class=\"categories-slider__wrapper swiper-wrapper\">\r\n                    <div class=\"categories__slide swiper-slide\">\r\n                        <div class=\"categories__slide-img\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"first-slide\">\r\n                            <div class=\"categories__ellips-third\"></div>\r\n                        </div>\r\n                        <a href=\"\" class=\"categories__name\">Косметика и гигиена</a>\r\n                    </div>\r\n                    <div class=\"categories__slide swiper-slide even-slide\">\r\n                        <div class=\"categories__slide-img\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"first-slide\">\r\n                            <div class=\"categories__ellips-third\"></div>\r\n                        </div>\r\n                        <a href=\"\" class=\"categories__name\">Техника и электроника</a>\r\n                    </div>\r\n                    <div class=\"categories__slide swiper-slide\">\r\n                        <div class=\"categories__slide-img\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"first-slide\">\r\n                            <div class=\"categories__ellips-third\"></div>\r\n                        </div>\r\n                        <a href=\"\" class=\"categories__name\">Повседневная одежда</a>\r\n                    </div>\r\n                    <div class=\"categories__slide swiper-slide even-slide\">\r\n                        <div class=\"categories__slide-img\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"first-slide\">\r\n                            <div class=\"categories__ellips-third\"></div>\r\n                        </div>\r\n                        <a href=\"\" class=\"categories__name\">Одежда и обувь </a>\r\n                    </div>\r\n                    <div class=\"categories__slide swiper-slide\">\r\n                        <div class=\"categories__slide-img\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"first-slide\">\r\n                            <div class=\"categories__ellips-third\"></div>\r\n                        </div>\r\n                        <a href=\"\" class=\"categories__name\">Сапоги и туфли </a>\r\n                    </div>\r\n                    <div class=\"categories__slide swiper-slide even-slide\">\r\n                        <div class=\"categories__slide-img\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"first-slide\">\r\n                            <div class=\"categories__ellips-third\"></div>\r\n                        </div>\r\n                        <a href=\"\" class=\"categories__name\">Косметика и гигиена</a>\r\n                    </div>\r\n                    <div class=\"categories__slide swiper-slide\">\r\n                        <div class=\"categories__slide-img\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"first-slide\">\r\n                            <div class=\"categories__ellips-third\"></div>\r\n                        </div>\r\n                        <a href=\"\" class=\"categories__name\">Техника и электроника</a>\r\n                    </div>\r\n                    <div class=\"categories__slide swiper-slide even-slide\">\r\n                        <div class=\"categories__slide-img\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"first-slide\">\r\n                            <div class=\"categories__ellips-third\"></div>\r\n                        </div>\r\n                        <a href=\"\" class=\"categories__name\">Повседневная одежда</a>\r\n                    </div>\r\n                    <div class=\"categories__slide swiper-slide\">\r\n                        <div class=\"categories__slide-img\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"first-slide\">\r\n                            <div class=\"categories__ellips-third\"></div>\r\n                        </div>\r\n                        <a href=\"\" class=\"categories__name\">Одежда и обувь </a>\r\n                    </div>\r\n                    <div class=\"categories__slide swiper-slide even-slide\">\r\n                        <div class=\"categories__slide-img\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"first-slide\">\r\n                            <div class=\"categories__ellips-third\"></div>\r\n                        </div>\r\n                        <a href=\"\" class=\"categories__name\">Сапоги и туфли </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"cards\">\r\n        <div class=\"something-text\">\r\n            <p>Тут должен быть какой то  текст, потом придумаем какой точно будет =)</p>\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\">\r\n        </div>\r\n        <div class=\"cards__wrapper\">\r\n            <div class=\"cards__feedback\">замовити зворотній зв’язок <img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" alt=\"\"></div>\r\n            <div class=\"cards__row\">\r\n                <div class=\"cards__card\">\r\n                    <div class=\"cards__text\">Текст карточки первый</div>\r\n                    <div class=\"cards__time\">- 15 min</div>\r\n                </div>\r\n                <div class=\"cards__card\">\r\n                    <div class=\"cards__text\">Текст карточки первый</div>\r\n                    <div class=\"cards__time\">- 15 min</div>\r\n                </div>\r\n                <div class=\"cards__card\">\r\n                    <div class=\"cards__text\">Текст карточки первый</div>\r\n                    <div class=\"cards__time\">- 15 min</div>\r\n                </div>\r\n                <div class=\"cards__card\">\r\n                    <div class=\"cards__text\">Текст карточки первый</div>\r\n                    <div class=\"cards__time\">- 15 min</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"guns\">\r\n        <div class=\"guns__grid\">\r\n            <div class=\"guns__elements guns__equipment\">\r\n                <a href=\"\" class=\"guns__title\">Снаряжение</a>\r\n            </div>\r\n            <div class=\"guns__elements guns__weapon\">\r\n                <a href=\"\" class=\"guns__title\">Оружие</a>\r\n            </div>\r\n            <div class=\"guns__elements guns__ammo\">\r\n                <a href=\"\" class=\"guns__title\">патроны</a>\r\n            </div>\r\n            <div class=\"guns__elements guns__accessories\">\r\n                <a href=\"\" class=\"guns__title\">аксессуары</a>\r\n            </div>\r\n            <div class=\"guns__elements guns__knifes\">\r\n                <a href=\"\" class=\"guns__title\">ножи и инструменты</a>\r\n            </div>\r\n            <div class=\"guns__elements guns__range\">\r\n                <a href=\"\" class=\"guns__title\">Тир</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"guns-slider swiper-container\">\r\n            <div class=\"guns-slider__wrapper swiper-wrapper\">\r\n                <div class=\"guns__slide swiper-slide slide\">\r\n                    <div class=\"slide__categorie slide__categorie_new\">новинка</div>\r\n                    <div class=\"slide__product\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"gun\" class=\"slide__img\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"like\" class=\"slide__favourite\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\" alt=\"compare\" class=\"slide__compare\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_26___ + "\" alt=\"play\" class=\"slide__play\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_27___ + "\" alt=\"gift\" class=\"slide__gift\">\r\n                    </div>\r\n                    <div class=\"slide__title\">\r\n                        <div class=\"slide__text\">Ружье Mossberg 590M Mag-Fed </div>\r\n                        <div class=\"slide__reviews\">\r\n                            <div class=\"simple-rating\">\r\n                                <div class=\"simple-rating__items\">\r\n                                    <input id=\"simple-rating__5\" type=\"radio\" class=\"simple-rating__item\" value=\"5\">\r\n                                    <label for=\"simple-rating__5\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__4\" type=\"radio\" class=\"simple-rating__item\" value=\"4\">\r\n                                    <label for=\"simple-rating__4\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__3\" type=\"radio\" class=\"simple-rating__item\" value=\"3\">\r\n                                    <label for=\"simple-rating__3\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__2\" type=\"radio\" class=\"simple-rating__item\" value=\"2\">\r\n                                    <label for=\"simple-rating__2\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__1\" type=\"radio\" class=\"simple-rating__item\" value=\"1\">\r\n                                    <label for=\"simple-rating__1\" class=\"simple-rating__label\"></label>\r\n                                </div>  \r\n                            </div>\r\n                            <div class=\"slide__review\">10 отзывов</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"slide__price\">\r\n                        <div class=\"old-price\">32 509₴ <div class=\"line\"></div></div>\r\n                        <div class=\"new-price\">27 632.65₴</div>\r\n                        <div class=\"cart-price\">\r\n                            <div class=\"cart-price__img\"></div>\r\n                            <div class=\"cart-price__text\">купить</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"guns__slide swiper-slide slide\">\r\n                    <div class=\"slide__categorie slide__categorie_stock\">акция</div>\r\n                    <div class=\"slide__product\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"gun\" class=\"slide__img\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"like\" class=\"slide__favourite\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\" alt=\"compare\" class=\"slide__compare\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_26___ + "\" alt=\"play\" class=\"slide__play\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_27___ + "\" alt=\"gift\" class=\"slide__gift\">\r\n                    </div>\r\n                    <div class=\"slide__title\">\r\n                        <div class=\"slide__text\">Ружье Mossberg 590M Mag-Fed </div>\r\n                        <div class=\"slide__reviews\">\r\n                            <div class=\"simple-rating\">\r\n                                <div class=\"simple-rating__items\">\r\n                                    <input id=\"simple-rating__5\" type=\"radio\" class=\"simple-rating__item\" value=\"5\">\r\n                                    <label for=\"simple-rating__5\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__4\" type=\"radio\" class=\"simple-rating__item\" value=\"4\">\r\n                                    <label for=\"simple-rating__4\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__3\" type=\"radio\" class=\"simple-rating__item\" value=\"3\">\r\n                                    <label for=\"simple-rating__3\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__2\" type=\"radio\" class=\"simple-rating__item\" value=\"2\">\r\n                                    <label for=\"simple-rating__2\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__1\" type=\"radio\" class=\"simple-rating__item\" value=\"1\">\r\n                                    <label for=\"simple-rating__1\" class=\"simple-rating__label\"></label>\r\n                                </div>  \r\n                            </div>\r\n                            <div class=\"slide__review\">2 отзыва</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"slide__price\">\r\n                        <div class=\"old-price\">32 509₴ <div class=\"line\"></div></div>\r\n                        <div class=\"new-price\">27 632.65₴</div>\r\n                        <div class=\"cart-price\">\r\n                            <div class=\"cart-price__img\"></div>\r\n                            <div class=\"cart-price__text\">купить</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"guns__slide swiper-slide slide\">\r\n                    <div class=\"slide__categorie slide__categorie_discount\">-70%</div>\r\n                    <div class=\"slide__product\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"gun\" class=\"slide__img\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"like\" class=\"slide__favourite\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\" alt=\"compare\" class=\"slide__compare\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_26___ + "\" alt=\"play\" class=\"slide__play\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_27___ + "\" alt=\"gift\" class=\"slide__gift\">\r\n                    </div>\r\n                    <div class=\"slide__title\">\r\n                        <div class=\"slide__text\">Ружье Mossberg 590M Mag-Fed </div>\r\n                        <div class=\"slide__reviews\">\r\n                            <div class=\"simple-rating\">\r\n                                <div class=\"simple-rating__items\">\r\n                                    <input id=\"simple-rating__5\" type=\"radio\" class=\"simple-rating__item\" value=\"5\">\r\n                                    <label for=\"simple-rating__5\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__4\" type=\"radio\" class=\"simple-rating__item\" value=\"4\">\r\n                                    <label for=\"simple-rating__4\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__3\" type=\"radio\" class=\"simple-rating__item\" value=\"3\">\r\n                                    <label for=\"simple-rating__3\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__2\" type=\"radio\" class=\"simple-rating__item\" value=\"2\">\r\n                                    <label for=\"simple-rating__2\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__1\" type=\"radio\" class=\"simple-rating__item\" value=\"1\">\r\n                                    <label for=\"simple-rating__1\" class=\"simple-rating__label\"></label>\r\n                                </div>  \r\n                            </div>\r\n                            <div class=\"slide__review\">12 отзывов</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"slide__price\">\r\n                        <div class=\"old-price\">32 509₴ <div class=\"line\"></div></div>\r\n                        <div class=\"new-price\">27 632.65₴</div>\r\n                        <div class=\"cart-price\">\r\n                            <div class=\"cart-price__img\"></div>\r\n                            <div class=\"cart-price__text\">купить</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"guns__slide swiper-slide slide\">\r\n                    <div class=\"slide__categorie slide__categorie_top-sales\">топ продаж</div>\r\n                    <div class=\"slide__product\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"gun\" class=\"slide__img\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"like\" class=\"slide__favourite\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\" alt=\"compare\" class=\"slide__compare\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_26___ + "\" alt=\"play\" class=\"slide__play\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_27___ + "\" alt=\"gift\" class=\"slide__gift\">\r\n                    </div>\r\n                    <div class=\"slide__title\">\r\n                        <div class=\"slide__text\">Ружье Mossberg 590M Mag-Fed </div>\r\n                        <div class=\"slide__reviews\">\r\n                            <div class=\"simple-rating\">\r\n                                <div class=\"simple-rating__items\">\r\n                                    <input id=\"simple-rating__5\" type=\"radio\" class=\"simple-rating__item\" value=\"5\">\r\n                                    <label for=\"simple-rating__5\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__4\" type=\"radio\" class=\"simple-rating__item\" value=\"4\">\r\n                                    <label for=\"simple-rating__4\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__3\" type=\"radio\" class=\"simple-rating__item\" value=\"3\">\r\n                                    <label for=\"simple-rating__3\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__2\" type=\"radio\" class=\"simple-rating__item\" value=\"2\">\r\n                                    <label for=\"simple-rating__2\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__1\" type=\"radio\" class=\"simple-rating__item\" value=\"1\">\r\n                                    <label for=\"simple-rating__1\" class=\"simple-rating__label\"></label>\r\n                                </div>  \r\n                            </div>\r\n                            <div class=\"slide__review\">46 отзывов</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"slide__price\">\r\n                        <div class=\"old-price\">32 509₴ <div class=\"line\"></div></div>\r\n                        <div class=\"new-price\">27 632.65₴</div>\r\n                        <div class=\"cart-price\">\r\n                            <div class=\"cart-price__img\"></div>\r\n                            <div class=\"cart-price__text\">купить</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"guns__slide swiper-slide slide\">\r\n                    <div class=\"slide__categorie slide__categorie_new\">новинка</div>\r\n                    <div class=\"slide__product\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"gun\" class=\"slide__img\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"like\" class=\"slide__favourite\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\" alt=\"compare\" class=\"slide__compare\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_26___ + "\" alt=\"play\" class=\"slide__play\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_27___ + "\" alt=\"gift\" class=\"slide__gift\">\r\n                    </div>\r\n                    <div class=\"slide__title\">\r\n                        <div class=\"slide__text\">Ружье Mossberg 590M Mag-Fed </div>\r\n                        <div class=\"slide__reviews\">\r\n                            <div class=\"simple-rating\">\r\n                                <div class=\"simple-rating__items\">\r\n                                    <input id=\"simple-rating__5\" type=\"radio\" class=\"simple-rating__item\" value=\"5\">\r\n                                    <label for=\"simple-rating__5\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__4\" type=\"radio\" class=\"simple-rating__item\" value=\"4\">\r\n                                    <label for=\"simple-rating__4\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__3\" type=\"radio\" class=\"simple-rating__item\" value=\"3\">\r\n                                    <label for=\"simple-rating__3\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__2\" type=\"radio\" class=\"simple-rating__item\" value=\"2\">\r\n                                    <label for=\"simple-rating__2\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__1\" type=\"radio\" class=\"simple-rating__item\" value=\"1\">\r\n                                    <label for=\"simple-rating__1\" class=\"simple-rating__label\"></label>\r\n                                </div>  \r\n                            </div>\r\n                            <div class=\"slide__review\">10 отзывов</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"slide__price\">\r\n                        <div class=\"old-price\">32 509₴ <div class=\"line\"></div></div>\r\n                        <div class=\"new-price\">27 632.65₴</div>\r\n                        <div class=\"cart-price\">\r\n                            <div class=\"cart-price__img\"></div>\r\n                            <div class=\"cart-price__text\">купить</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"guns__slide swiper-slide slide\">\r\n                    <div class=\"slide__categorie slide__categorie_stock\">акция</div>\r\n                    <div class=\"slide__product\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"gun\" class=\"slide__img\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"like\" class=\"slide__favourite\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\" alt=\"compare\" class=\"slide__compare\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_26___ + "\" alt=\"play\" class=\"slide__play\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_27___ + "\" alt=\"gift\" class=\"slide__gift\">\r\n                    </div>\r\n                    <div class=\"slide__title\">\r\n                        <div class=\"slide__text\">Ружье Mossberg 590M Mag-Fed </div>\r\n                        <div class=\"slide__reviews\">\r\n                            <div class=\"simple-rating\">\r\n                                <div class=\"simple-rating__items\">\r\n                                    <input id=\"simple-rating__5\" type=\"radio\" class=\"simple-rating__item\" value=\"5\">\r\n                                    <label for=\"simple-rating__5\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__4\" type=\"radio\" class=\"simple-rating__item\" value=\"4\">\r\n                                    <label for=\"simple-rating__4\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__3\" type=\"radio\" class=\"simple-rating__item\" value=\"3\">\r\n                                    <label for=\"simple-rating__3\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__2\" type=\"radio\" class=\"simple-rating__item\" value=\"2\">\r\n                                    <label for=\"simple-rating__2\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__1\" type=\"radio\" class=\"simple-rating__item\" value=\"1\">\r\n                                    <label for=\"simple-rating__1\" class=\"simple-rating__label\"></label>\r\n                                </div>  \r\n                            </div>\r\n                            <div class=\"slide__review\">2 отзыва</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"slide__price\">\r\n                        <div class=\"old-price\">32 509₴ <div class=\"line\"></div></div>\r\n                        <div class=\"new-price\">27 632.65₴</div>\r\n                        <div class=\"cart-price\">\r\n                            <div class=\"cart-price__img\"></div>\r\n                            <div class=\"cart-price__text\">купить</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"guns__slide swiper-slide slide\">\r\n                    <div class=\"slide__categorie slide__categorie_discount\">-70%</div>\r\n                    <div class=\"slide__product\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"gun\" class=\"slide__img\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"like\" class=\"slide__favourite\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\" alt=\"compare\" class=\"slide__compare\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_26___ + "\" alt=\"play\" class=\"slide__play\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_27___ + "\" alt=\"gift\" class=\"slide__gift\">\r\n                    </div>\r\n                    <div class=\"slide__title\">\r\n                        <div class=\"slide__text\">Ружье Mossberg 590M Mag-Fed </div>\r\n                        <div class=\"slide__reviews\">\r\n                            <div class=\"simple-rating\">\r\n                                <div class=\"simple-rating__items\">\r\n                                    <input id=\"simple-rating__5\" type=\"radio\" class=\"simple-rating__item\" value=\"5\">\r\n                                    <label for=\"simple-rating__5\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__4\" type=\"radio\" class=\"simple-rating__item\" value=\"4\">\r\n                                    <label for=\"simple-rating__4\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__3\" type=\"radio\" class=\"simple-rating__item\" value=\"3\">\r\n                                    <label for=\"simple-rating__3\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__2\" type=\"radio\" class=\"simple-rating__item\" value=\"2\">\r\n                                    <label for=\"simple-rating__2\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__1\" type=\"radio\" class=\"simple-rating__item\" value=\"1\">\r\n                                    <label for=\"simple-rating__1\" class=\"simple-rating__label\"></label>\r\n                                </div>  \r\n                            </div>\r\n                            <div class=\"slide__review\">12 отзывов</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"slide__price\">\r\n                        <div class=\"old-price\">32 509₴ <div class=\"line\"></div></div>\r\n                        <div class=\"new-price\">27 632.65₴</div>\r\n                        <div class=\"cart-price\">\r\n                            <div class=\"cart-price__img\"></div>\r\n                            <div class=\"cart-price__text\">купить</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"guns__slide swiper-slide slide\">\r\n                    <div class=\"slide__categorie slide__categorie_top-sales\">топ продаж</div>\r\n                    <div class=\"slide__product\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"gun\" class=\"slide__img\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"like\" class=\"slide__favourite\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\" alt=\"compare\" class=\"slide__compare\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_26___ + "\" alt=\"play\" class=\"slide__play\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_27___ + "\" alt=\"gift\" class=\"slide__gift\">\r\n                    </div>\r\n                    <div class=\"slide__title\">\r\n                        <div class=\"slide__text\">Ружье Mossberg 590M Mag-Fed </div>\r\n                        <div class=\"slide__reviews\">\r\n                            <div class=\"simple-rating\">\r\n                                <div class=\"simple-rating__items\">\r\n                                    <input id=\"simple-rating__5\" type=\"radio\" class=\"simple-rating__item\" value=\"5\">\r\n                                    <label for=\"simple-rating__5\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__4\" type=\"radio\" class=\"simple-rating__item\" value=\"4\">\r\n                                    <label for=\"simple-rating__4\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__3\" type=\"radio\" class=\"simple-rating__item\" value=\"3\">\r\n                                    <label for=\"simple-rating__3\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__2\" type=\"radio\" class=\"simple-rating__item\" value=\"2\">\r\n                                    <label for=\"simple-rating__2\" class=\"simple-rating__label\"></label>\r\n                                    <input id=\"simple-rating__1\" type=\"radio\" class=\"simple-rating__item\" value=\"1\">\r\n                                    <label for=\"simple-rating__1\" class=\"simple-rating__label\"></label>\r\n                                </div>  \r\n                            </div>\r\n                            <div class=\"slide__review\">46 отзывов</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"slide__price\">\r\n                        <div class=\"old-price\">32 509₴ <div class=\"line\"></div></div>\r\n                        <div class=\"new-price\">27 632.65₴</div>\r\n                        <div class=\"cart-price\">\r\n                            <div class=\"cart-price__img\"></div>\r\n                            <div class=\"cart-price__text\">купить</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"swiper-scrollbar\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"footer\">\r\n        <div class=\"footer__wrapper\">\r\n            <div class=\"footer__left\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_28___ + "\" alt=\"\" class=\"footer__logo\">\r\n                <div class=\"footer__soc-network\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_29___ + "\" alt=\"instagramm\" class=\"footer__inst\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_30___ + "\" alt=\"facebook\" class=\"footer__facebook\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_31___ + "\" alt=\"twitter\" class=\"footer__twitter\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_32___ + "\" alt=\"youtube\" class=\"footer__youtube\">\r\n                </div>\r\n                <div class=\"footer__delivery\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_33___ + "\" alt=\"nova-poshta\">\r\n                    <div class=\"footer__credit-cards\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_34___ + "\" alt=\"\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_35___ + "\" alt=\"\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_36___ + "\" alt=\"\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_37___ + "\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"footer__faq\">\r\n                <div class=\"footer__title\">Каталог</div>\r\n                <div class=\"footer__text\">\r\n                    <p>Ноутбуки</p>\r\n                    <p>Планшеты</p>\r\n                    <p>Аксессуары для планшетов и электронных книг</p>\r\n                    <p>Кабели и переходники</p>\r\n                    <p>Сумки для ноутбуков</p>\r\n                    <p>Автотовары</p>\r\n                    <p>Сантехника</p>\r\n                    <p>Ремонт</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"footer__faq\">\r\n                <div class=\"footer__title\">Клиентам</div>\r\n                <div class=\"footer__text\">\r\n                    <p>Политика конфиденциальности</p>\r\n                    <p>Доставка и оплата</p>\r\n                    <p>Способы оплаты</p>\r\n                    <p>Гарантия</p>\r\n                    <p>Регенерация турбины</p>\r\n                    <p>Контакты</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"footer__hotline\">\r\n                <div class=\"footer__title\">Горячая линия</div>\r\n                <div class=\"footer__main-number\">0 800 000 000</div>\r\n                <div class=\"footer__numbers\">\r\n                    <p>+38 068 000 00 00</p>\r\n                    <p>+38 099 000 00 00</p>\r\n                    <p>+38 096 000 00 00</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div id=\"cookie\" class=\"cookie\">\r\n        <div class=\"cookie__body\">\r\n            <div class=\"cookie__content\">\r\n                <div class=\"cookie__text\">Этот сайт использует файлы cookies для более комфортной работы пользователя. Продолжая просмотр страниц сайта, вы соглашаетесь с использованием файлов cookies. Если вам нужна дополнительная информация или вы не хотите соглашаться с использованием cookies, пожалуйста, посетите страницу \"<a href=\"\">Про cookies</a>\"</div>\r\n                <button class=\"cookie__close\" onclick=\"document.getElementById('cookie').style.display='none';\">Согласен</button>\r\n            </div>\r\n        </div>   \r\n    </div>\r\n    <div id=\"search\" class=\"popup-search\">\r\n        <div class=\"popup-search__body\">\r\n            <div class=\"popup-search__content\">\r\n                <input type=\"search\" placeholder=\"Поиск, например “турбина”\">\r\n                <input type=\"submit\" value=\"\">\r\n                <button class=\"popup-search__close\" onclick=\"document.getElementById('search').style.display='none';\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_38___ + "\" alt=\"close\">\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <a href=\"#\" class=\"back-to-top\">\r\n        <div class=\"arrow-up\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_39___ + "\" alt=\"\">\r\n        </div>\r\n        <p class=\"back-to-top__text\">Вверх</p>\r\n    </a>\r\n    <script src=\"" + ___HTML_LOADER_REPLACEMENT_40___ + "\"></script>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./js/main.js?db67":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6a8122160d0ff02fb0e8.js";

/***/ }),

/***/ "./img/aktuator.svg":
/*!**************************!*\
  !*** ./img/aktuator.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/aktuator.svg";

/***/ }),

/***/ "./img/arrow-down.svg":
/*!****************************!*\
  !*** ./img/arrow-down.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/arrow-down.svg";

/***/ }),

/***/ "./img/arrow-up.svg":
/*!**************************!*\
  !*** ./img/arrow-up.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/arrow-up.svg";

/***/ }),

/***/ "./img/arrow.svg":
/*!***********************!*\
  !*** ./img/arrow.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/arrow.svg";

/***/ }),

/***/ "./img/body-tourbine.svg":
/*!*******************************!*\
  !*** ./img/body-tourbine.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/body-tourbine.svg";

/***/ }),

/***/ "./img/burger-arrow.svg":
/*!******************************!*\
  !*** ./img/burger-arrow.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/burger-arrow.svg";

/***/ }),

/***/ "./img/cartridge.svg":
/*!***************************!*\
  !*** ./img/cartridge.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/cartridge.svg";

/***/ }),

/***/ "./img/close.svg":
/*!***********************!*\
  !*** ./img/close.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/close.svg";

/***/ }),

/***/ "./img/compare.svg":
/*!*************************!*\
  !*** ./img/compare.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/compare.svg";

/***/ }),

/***/ "./img/elec-vac-actuator.svg":
/*!***********************************!*\
  !*** ./img/elec-vac-actuator.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/elec-vac-actuator.svg";

/***/ }),

/***/ "./img/facebook.svg":
/*!**************************!*\
  !*** ./img/facebook.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/facebook.svg";

/***/ }),

/***/ "./img/fifth-slide.svg":
/*!*****************************!*\
  !*** ./img/fifth-slide.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/fifth-slide.svg";

/***/ }),

/***/ "./img/first-slide.svg":
/*!*****************************!*\
  !*** ./img/first-slide.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/first-slide.svg";

/***/ }),

/***/ "./img/fluid-linear-pop-product.svg":
/*!******************************************!*\
  !*** ./img/fluid-linear-pop-product.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/fluid-linear-pop-product.svg";

/***/ }),

/***/ "./img/footer-logo.svg":
/*!*****************************!*\
  !*** ./img/footer-logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/footer-logo.svg";

/***/ }),

/***/ "./img/fourth-slide.svg":
/*!******************************!*\
  !*** ./img/fourth-slide.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/fourth-slide.svg";

/***/ }),

/***/ "./img/geometry.svg":
/*!**************************!*\
  !*** ./img/geometry.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/geometry.svg";

/***/ }),

/***/ "./img/gift-box.svg":
/*!**************************!*\
  !*** ./img/gift-box.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/gift-box.svg";

/***/ }),

/***/ "./img/gun.svg":
/*!*********************!*\
  !*** ./img/gun.svg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/gun.svg";

/***/ }),

/***/ "./img/inst.svg":
/*!**********************!*\
  !*** ./img/inst.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/inst.svg";

/***/ }),

/***/ "./img/like.svg":
/*!**********************!*\
  !*** ./img/like.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/like.svg";

/***/ }),

/***/ "./img/loop.svg":
/*!**********************!*\
  !*** ./img/loop.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/loop.svg";

/***/ }),

/***/ "./img/maestro.svg":
/*!*************************!*\
  !*** ./img/maestro.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/maestro.svg";

/***/ }),

/***/ "./img/mastercard.svg":
/*!****************************!*\
  !*** ./img/mastercard.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/mastercard.svg";

/***/ }),

/***/ "./img/nova-poshta.svg":
/*!*****************************!*\
  !*** ./img/nova-poshta.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/nova-poshta.svg";

/***/ }),

/***/ "./img/paypal.svg":
/*!************************!*\
  !*** ./img/paypal.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/paypal.svg";

/***/ }),

/***/ "./img/play.svg":
/*!**********************!*\
  !*** ./img/play.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/play.svg";

/***/ }),

/***/ "./img/profile.svg":
/*!*************************!*\
  !*** ./img/profile.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/profile.svg";

/***/ }),

/***/ "./img/prokladki.svg":
/*!***************************!*\
  !*** ./img/prokladki.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/prokladki.svg";

/***/ }),

/***/ "./img/second-slide.svg":
/*!******************************!*\
  !*** ./img/second-slide.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/second-slide.svg";

/***/ }),

/***/ "./img/servo-parts.svg":
/*!*****************************!*\
  !*** ./img/servo-parts.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/servo-parts.svg";

/***/ }),

/***/ "./img/servoprivod.svg":
/*!*****************************!*\
  !*** ./img/servoprivod.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/servoprivod.svg";

/***/ }),

/***/ "./img/shopping-cart-hover.svg":
/*!*************************************!*\
  !*** ./img/shopping-cart-hover.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/shopping-cart-hover.svg";

/***/ }),

/***/ "./img/third-slide.svg":
/*!*****************************!*\
  !*** ./img/third-slide.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/third-slide.svg";

/***/ }),

/***/ "./img/turbine.svg":
/*!*************************!*\
  !*** ./img/turbine.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/turbine.svg";

/***/ }),

/***/ "./img/twitter.svg":
/*!*************************!*\
  !*** ./img/twitter.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/twitter.svg";

/***/ }),

/***/ "./img/visa.svg":
/*!**********************!*\
  !*** ./img/visa.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/visa.svg";

/***/ }),

/***/ "./img/youtube.svg":
/*!*************************!*\
  !*** ./img/youtube.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/youtube.svg";

/***/ }),

/***/ "./img/zap4asti.svg":
/*!**************************!*\
  !*** ./img/zap4asti.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/zap4asti.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_html-loader_dist_runtim-ca966d"], () => (__webpack_require__("./js/main.js?9e1e")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map