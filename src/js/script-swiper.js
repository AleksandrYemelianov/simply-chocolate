const swiper = new Swiper('.reviews-swiper', {
  pagination: {
    el: '.swiper-pagination-reviews',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
});

