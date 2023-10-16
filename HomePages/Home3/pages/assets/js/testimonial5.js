$(document).ready(function () {
  //----------- swiper slider start here -----------
  var swiper = new Swiper('.swiper_slider_container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
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
      // when window width is >= 756px
      756: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 1100px
      1100: {
        slidesPerView: 3,
      },
      // when window width is >= 1600px
      1600: {
        slidesPerView: 3,
        spaceBetween: 00,
      },
    },
  });
  //----------- swiper slider end here -----------
});
