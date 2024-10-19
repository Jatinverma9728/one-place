const swiper = new Swiper(".slider-wrapper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: false, // Enable looping
  watchOverflow: true,
  // grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },


});
