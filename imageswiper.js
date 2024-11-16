const swiper = new Swiper(".slider-wrapper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: false,
  watchOverflow: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
      centeredSlides: false, // Disable centered slides to avoid partial slides
      slidesPerGroup: 1, // Swipe 1 card at a time
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
      slidesPerGroup: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false,
      slidesPerGroup: 1,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
      centeredSlides: false,
      slidesPerGroup: 1,
    },
  },
});
