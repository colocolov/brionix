// слайдер на главной
var headerSlider = new Swiper(".tophead-slider", {
  autoplay: {
    delay: 3000,
  },
  //скорость переключения слайдов
  speed: 800,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    dynamicBullets: true,
  },
  //эффект перехода слайда
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  //отложенная загрузка:
  //отключаем презагрузку картинок
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
  },
});
//-----

// слайдер популярных товаров
var favoritesSlider = new Swiper(".favorites__content", {
  speed: 800,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
  autoHeight: true,
  slidesPerView: 4.2,
});
//-----

// слайдер брендов
var headerSlider = new Swiper(".brends__slider", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 800,
  slidesPerView: 5,
  spaceBetween: 20,
});
//-----

$(document).ready(function () {
  // табы для товара
  $("ul.characteristics__tabs").on("click", "li:not(.characteristics__tab_active)", function () {
    $(this)
      .addClass("characteristics__tab_active")
      .siblings()
      .removeClass("characteristics__tab_active")
      .closest("section.characteristics")
      .find("div.characteristics__info")
      .removeClass("characteristics__info_active")
      .eq($(this).index())
      .addClass("characteristics__info_active");
  });
  // -----

  // скрытие/показ разделов в фильтре
  $(".filter__item-drop").on("click", function () {
    $(this).toggleClass("filter__item-drop--active");
    $(this).next().slideToggle("200");
  });
  // ------

  // стилизация чекбоксов и радио кнопки
  $(".filter-style").styler();
  // ------

  // стилизация фильтра цены
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    step: 50,
    grid: false,
  });
  // -----

  // end JQ
});
