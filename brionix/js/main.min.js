// слайдер на главной
const headerSlider = new Swiper(".tophead-slider", {
  autoplay: {
    delay: 3000,
  },
  on: {
    init() {
      this.el.addEventListener("mouseenter", () => {
        this.autoplay.stop();
      });
      this.el.addEventListener("mouseleave", () => {
        this.autoplay.start();
      });
    },
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
const favoritesSlider = new Swiper(".favorites__content", {
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
const brendSlider = new Swiper(".brends__slider", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pauseOnMouseEnter: true,
  speed: 800,
  slidesPerView: 5,
  spaceBetween: 20,
});
//-----

// скрытие кнопки добавить в корзину
const btnAddCart = document.querySelector('.product__cart a');
if (btnAddCart) {

  btnAddCart.onclick = function (){
    setTimeout(function() {
      btnAddCart.style.display = "none";
      const isAdd = document.querySelector('.added_to_cart');
    }, 1000);
  };
  
};

(function ($) {
  "use strict";

// полсчет кол-ва товара для корзины
  $('.good-info__quantity .good-info__quantity-minus, .good-info__quantity .good-info__quantity-plus').on('click', function (e) {
    e.preventDefault();
    var button = $(this);
    // console.log(button);
    // console.log(button.parent().parent());
    var oldValue = button.parent().parent().find('input').val();
    if (button.hasClass('good-info__quantity-plus')) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
    button.parent().parent().find('input').val(newVal);
  });

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

});

// end JQ
})(jQuery);