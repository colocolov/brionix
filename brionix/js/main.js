// СЛАЙДЕР НА ГЛАВНОЙ
const topheadSlider = document.querySelector('.tophead-slider');
if (topheadSlider) {
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
      el: ".tophead-pagin",
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
}
//----- end tophead Slider

// СЛАЙДЕР ПОПУЛЯРНЫХ ТОВАРОВ
const favorSlider = document.querySelector('.favorites__content');
if (favorSlider) {
  const favoritesSlider = new Swiper(".favorites__content", {
    // loop: true,
    // autoplay: {
    //   delay: 5000,
    // },
    speed: 800,
    navigation: {
      nextEl: ".favorites__nav--right",
      prevEl: ".favorites__nav--left",
      clickable: true,
    },
    spaceBetween: 20,
    // autoHeight: true,
    slidesPerView: 4.5,
    // preloadImages: false,
    // lazy: {
    //   loadOnTransitionStart: false,
    //   loadPrevNext: false,
    // },
  });
}
//----- end favorites Slider

// СЛАЙДЕР КАРТОЧКИ
const gallerySlider = document.querySelector(".good-photos__gallery");
if (gallerySlider) {
  // subslider
  let imagesSubSlider = new Swiper(".good-photos__subslider", {
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 12,
    speed: 800,
    // freeMode: true,
    // watchSlidesProgress: true,
    // direction: "vertical",
    // loop: true,
  }); 

  // main slider
  let imagesProductSlider = new Swiper(".good-photos__mainslider", {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 20,
    // autoplay: {
      //   delay: 5000,
      // },
      // loop: true,
    thumbs: {
      swiper: imagesSubSlider,
    },
    speed: 800,
    loop: true,
  }); 
}

// СЛАЙДЕР БРЕНДОВ
// const brendSlider = new Swiper(".brends__slider", {
//   loop: true,
//   autoplay: {
//     delay: 3000,
//   },
//   pauseOnMouseEnter: true,
//   speed: 800,
//   slidesPerView: 5,
//   spaceBetween: 20,
// });
//-----

// ПЕРЕКЛЮЧАТЕЛЬ ВИДОВ КАРТОЧКИ ТОВАРА
const catalogView = document.querySelector('.catalog__inner');
if (catalogView) {

  const styleView = localStorage.getItem('view-style');
  viewCatalogItem(styleView);

  document.querySelectorAll('button[data-view]').forEach(item => {
    item.addEventListener('click', () => {
      const view = item.dataset.view;
      // console.log(view);
      viewCatalogItem(view);
    });
  });

  function viewCatalogItem(view) {
    if (view == 'list') {
        catalogView.classList.add('_active');
        localStorage.setItem('view-style', 'list');
        document.querySelector('button[data-view=list]').style.opacity = 1;
        document.querySelector('button[data-view=grid]').style.opacity = 0.3;
      } else {
        catalogView.classList.remove('_active');
        localStorage.setItem('view-style', 'grid');
        document.querySelector('button[data-view=grid]').style.opacity = 1;
        document.querySelector('button[data-view=list]').style.opacity = 0.3;
      }
  }
}  




const quantityBlock = document.querySelector('.good-info__quantity');
if (quantityBlock) {

  (function ($) {
    "use strict";

  // полсчет кол-ва товара для корзины
    // $('.good-info__quantity .good-info__quantity-minus, .good-info__quantity .good-info__quantity-plus').on('click', function (e) {
    //   e.preventDefault();
    //   var button = $(this);
    //   var oldValue = button.parent().parent().find('input').val();
    //   if (button.hasClass('good-info__quantity-plus')) {
    //     var newVal = parseFloat(oldValue) + 1;
    //   } else {
    //     if (oldValue > 1) {
    //       var newVal = parseFloat(oldValue) - 1;
    //     } else {
    //       newVal = 1;
    //     }
    //   }
    //   button.parent().parent().find('input').val(newVal);
    // });

    // кастомные стрелки увел/умен кол-ва товара // Ур24 40:00
    $('main.site-main').on('click', '.good-info__quantity button', function() {
      let btn = $(this);
      let inputQut = btn.parent().find('.good-info__input');
      let prevValue = +(inputQut.val());
      let newValue = 1;

      if (btn.hasClass('good-info__quantity-plus')) {
        newValue = prevValue + 1;
      } else {
        if (prevValue > 1) {
          newValue = prevValue - 1;
        }
      }
      // для корзины чтобы были активны стрелки после Ajax // Ур24 34:00
      $('.upd-cart-item').prop('disabled', false);
      inputQut.val(newValue);
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

    // скрытие/показ разделов в фильтре
    $(".filter__item-drop").on("click", function () {
      $(this).toggleClass("filter__item-drop--active");
      $(this).next().slideToggle("200");
    });
    // ------

  });

  // end JQ
  })(jQuery);
}
//----  end quantity