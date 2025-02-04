const sparkGamesSlider = new Swiper(".spark-games", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".spark-games-next",
    prevEl: ".spark-games-prev",
  },
  breakpoints: {
    1680: {
      slidesPerView: 6.6,
    },
    1500: {
      slidesPerView: 5.5,
    },
    1180: {
      slidesPerView: 4.5,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    0: { slidesPerView: 2 },
  },
});

const sparkSlotsSlider = new Swiper(".slots-slider", {
  spaceBetween: 15,
  slidesPerView: 6.6,
  navigation: {
    nextEl: ".slots-slider-next",
    prevEl: ".slots-slider-prev",
  },
  breakpoints: {
    1680: {
      slidesPerView: 6.6,
    },
    1500: {
      slidesPerView: 5.5,
    },
    1180: {
      slidesPerView: 4.5,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    0: { slidesPerView: 2, spaceBetween: 20 },
  },
});

const sparkProvidersSlider = new Swiper(".providers-slider", {
  slidesPerView: 6.6,
  spaceBetween: 15,
  navigation: {
    nextEl: ".providers-slider-next",
    prevEl: ".providers-slider-prev",
  },
  breakpoints: {
    1680: {
      slidesPerView: 6.6,
    },
    1500: {
      slidesPerView: 5.5,
    },
    1180: {
      slidesPerView: 4.5,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    450: {
      slidesPerView: 2.5,
    },
    370: {
      slidesPerView: 1.8,
      spaceBetween: 20,
    },
    0: { slidesPerView: 1.6, spaceBetween: 20 },
  },
});

const sparkLiveCasinoSlider = new Swiper(".lives-casino-slider", {
  slidesPerView: 6.6,
  spaceBetween: 15,
  navigation: {
    nextEl: ".lives-casino-slider-next",
    prevEl: ".lives-casino-slider-prev",
  },
  breakpoints: {
    1680: {
      slidesPerView: 6.6,
    },
    1500: {
      slidesPerView: 5.5,
    },
    1180: {
      slidesPerView: 4.5,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    0: { slidesPerView: 2, spaceBetween: 20 },
  },
});

const coinsSlider = new Swiper(".coin-tracker", {
  spaceBetween: 10,
  slidesPerView: 5,
  navigation: {
    nextEl: ".btn-right",
    prevEl: ".btn-left",
  },
  breakpoints: {
    1180: {
      slidesPerView: 6,
    },
    420: { slidesPerView: 5, spaceBetween: 8 },
    370: {
      slidesPerView: 4,
    },
    0: { slidesPerView: 3, spaceBetween: 8 },
  },
});
