$(document).ready(function () {
  //----------- swiper slider start here -----------
  const thumb = new Swiper('.thumb_slider', {
    loop: true,
    spaceBetween: 40,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      // when window width is >= 700px
      700: {
        slidesPerView: 2,
      },
      // when window width is >= 900px
      992: {
        slidesPerView: 3,
      },
      // when window width is >= 1300px
      1300: {
        slidesPerView: 4,
      },
    },
  });
  const swiper2 = new Swiper('.mySwiper2', {
    loop: true,
    spaceBetween: 10,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: thumb,
    },
  });
  //----------- swiper slider end here -----------
});