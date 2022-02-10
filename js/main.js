
const swiper = new Swiper('.slider-offers', {
  // Optional parameters
  loop: true,
  spaceBetween: 20,
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1250: {
      slidesPerView: 5,
      spaceBetween: 20
    },

    1020: {
      slidesPerView: 4,
      spaceBetween: 20
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    
    650: {
      slidesPerView: 2,
      spaceBetween: 15
    },

    220: {
      slidesPerView: 1.2,
      spaceBetween: 15
    },
  }
  
});

