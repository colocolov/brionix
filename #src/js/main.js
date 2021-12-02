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

  // смена отображения товаров в каталоге
  $(".catalog__filter-btngrid").on("click", function () {
    $(this).addClass("catalog__filter-btn--active");
    $(".catalog__filter-btnline").removeClass("catalog__filter-btn--active");
    // товар в сетку
    $(".catalog__item").removeClass("catalog__item--line");
    $(".catalog__item-left").removeClass("catalog__item-left--line");
    $(".catalog__item-right").removeClass("catalog__item-right--line");
    $(".favorites__labels").removeClass("catalog__item--line-remove");
    $(".favorites__image").removeClass("catalog__item--line-remove");
    $(".favorites__title").removeClass("catalog__item--line-title");
    $(".catalog__item--line-code").removeClass("show");
    $(".catalog__item--line-brend").removeClass("show");
    $(".favorites__cart").removeClass("catalog__item--line-cart");
    $(".favorites__button").removeClass("catalog__item--line-button");
  });

  $(".catalog__filter-btnline").on("click", function () {
    $(this).addClass("catalog__filter-btn--active");
    $(".catalog__filter-btngrid").removeClass("catalog__filter-btn--active");
    // товар в строку
    $(".catalog__item").addClass("catalog__item--line");
    $(".catalog__item-left").addClass("catalog__item-left--line");
    $(".catalog__item-right").addClass("catalog__item-right--line");
    $(".favorites__labels").addClass("catalog__item--line-remove");
    $(".favorites__image").addClass("catalog__item--line-remove");
    $(".favorites__title").addClass("catalog__item--line-title");
    $(".catalog__item--line-code").addClass("show");
    $(".catalog__item--line-brend").addClass("show");
    $(".favorites__cart").addClass("catalog__item--line-cart");
    $(".favorites__button").addClass("catalog__item--line-button");
  });
  // ------

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
