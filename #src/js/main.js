// слайдер на главной
var headerSlider = new Swiper(".tophead-slider", {
  // loop: true,
  autoplay: {
    //пауза между прокруткой
    delay: 3000,
    //закончить на последнем слайде
    // stopOnLastSlide: false,
    //отключить после ручного переключения
    // disableOnInteraction: false,
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
  // переключение при клике на слайд
  // slideToClickedSlide: true,
  // отключение прокрутки при наведении мыши
  // on: {
  //   init() {
  //     this.el.addEventListener("mouseenter", () => {
  //       this.autoplay.stop();
  //     });

  //     this.el.addEventListener("mouseleave", () => {
  //       this.autoplay.start();
  //     });
  //   },
  // },
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
