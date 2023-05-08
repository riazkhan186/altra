(function ($) {
  "use strict";

  var serviceSlider = new Swiper(".serviceSlider", {
    loop: true,
    freemode: true,
    spaceBetween: 0,
    centeredSlides: true,
    allowTouchMove: false,
    speed: 2000,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 8,
      },
      1500: {
        slidesPerView: 10,
      },
    },
  });

})(jQuery);