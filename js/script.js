$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1.06,
    },
    992: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    },
  },
});