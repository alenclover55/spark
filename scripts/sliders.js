const sparkGamesSlider = new Swiper(".spark-games", {
  spaceBetween: 11,
  navigation: {
    nextEl: ".spark-games-next",
    prevEl: ".spark-games-prev",
  },
  breakpoints: {
    1680: {
      slidesPerView: 7.5,
    },
    1500: {
      slidesPerView: 5.5,
    },
    1180: {
      slidesPerView: 4.5,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 11,
    },
    0: { slidesPerView: 3 },
  },
});

const sparkSlotsSlider = new Swiper(".slots-slider", {
  slidesPerView: 6.6,
  spaceBetween: 11,
  navigation: {
    nextEl: ".slots-slider-next",
    prevEl: ".slots-slider-prev",
  },
  breakpoints: {
    1680: {
      slidesPerView: 7.5,
    },
    1500: {
      slidesPerView: 5.5,
    },
    1180: {
      slidesPerView: 4.5,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 11,
    },
    0: { slidesPerView: 3 },
  },
});

const sparkProvidersSlider = new Swiper(".providers-slider", {
  spaceBetween: 11,
  navigation: {
    nextEl: ".providers-slider-next",
    prevEl: ".providers-slider-prev",
  },
  breakpoints: {
    1680: {
      slidesPerView: 7.5,
    },
    1500: {
      slidesPerView: 5.5,
    },
    1180: {
      slidesPerView: 4.5,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 11,
    },
    450: {
      slidesPerView: 2.5,
    },
    370: {
      slidesPerView: 1.8,
    },
    0: { slidesPerView: 1.6 },
  },
});

const sparkLiveCasinoSlider = new Swiper(".lives-casino-slider", {
  spaceBetween: 11,
  navigation: {
    nextEl: ".lives-casino-slider-next",
    prevEl: ".lives-casino-slider-prev",
  },
  breakpoints: {
    1680: {
      slidesPerView: 7.5,
    },
    1500: {
      slidesPerView: 5.5,
    },
    1180: {
      slidesPerView: 4.5,
    },
    640: {
      slidesPerView: 3,
    },
    0: { slidesPerView: 3 },
  },
});

const coinsSlider = new Swiper(".coin-tracker", {
  spaceBetween: 11,
  navigation: {
    nextEl: ".btn-right",
    prevEl: ".btn-left",
  },
  breakpoints: {
    1180: {
      slidesPerView: "auto",
      spaceBetween: 11,
    },
  },
});
