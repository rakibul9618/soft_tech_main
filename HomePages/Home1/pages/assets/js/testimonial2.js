$(document).ready(function () {
  //----------- swiper slider -----------
  var swiper = new Swiper('.swiper_slider_container', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 2,
      },
    },
  });
});
