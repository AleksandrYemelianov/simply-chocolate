const swiper = new Swiper('.our-products-swiper', {
  direction: 'horizontal',

  loop: true,

  slidesPerView: 'auto',

  spaceBetween: 18,

  freeMode: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});