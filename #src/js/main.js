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

function input_val(dir, elid) {
  console.log(dir + " " + elid);
  var inputEl = document.getElementById(elid);
  console.log(inputEl);
  var value = parseInt(inputEl.value, 10);
  if (isNaN(value)) value = 0;

  if (dir == "dec") value--;
  else if (dir == "inc") value++;

  inputEl.value = value;
}
