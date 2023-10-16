$(document).ready(function () {
  //----------- aos for animation start here -----------
  AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
  });
  //----------- aos for animation end here -----------

  // ----------- Dynamic Background start here -----------
  function dynamicBackground() {
    $("[data-bg-src]").each(function () {
      var src = $(this).attr("data-bg-src");
      $(this).css({
        "background-image": "url(" + src + ")",
      });
    });
  }
  dynamicBackground();
  // ----------- Dynamic Background end here -----------

  //----------- scroll_to_top start here -----------
  $('a.to_top').mPageScroll2id({ scrollSpeed: 900 });
  //----------- scroll_to_top end here -----------

  //----------- preloader start here -----------
  setTimeout(() => {
    $('#pre-load').addClass('hide');
  },0);
  //----------- preloader end here -----------

  // ----------- show mobile Navbar start here -----------===
  $('.nav-link.home_page').on('click', function () {
    $('ul.home_dropdown_list').addClass('active');
  });
  $('.nav-link.inner_page').on('click', function () {
    $('ul.inner_home_dropdown_list').addClass('active');
  });
  // ----------- show mobile Navbar end here -----------===

  //----------- Handle clicks outside of an element start here -----------
  $(document).click(function (event) {
    // Code for collapsed navbar when clicking outside of the navbar element
    $('.navbar-collapse').collapse('hide');

    // hide the home_dropdown_list if click outside
    let home_dropdown_list = $('.nav-link.home_page');
    if (
      !home_dropdown_list.is(event.target) &&
      home_dropdown_list.has(event.target).length === 0
    ) {
      $('.home_dropdown_list').removeClass('active');
    }
    // hide the inner_home_dropdown_list if click outside
    let inner_home_dropdown_list = $('.nav-link.inner_page');
    if (
      !inner_home_dropdown_list.is(event.target) &&
      inner_home_dropdown_list.has(event.target).length === 0
    ) {
      $('.inner_home_dropdown_list').removeClass('active');
    }
  });
  // ----------- Handle clicks outside of an element start here -----------

  // ----------- Handle scroll start here -----------
  $(window)
    .scroll(function () {
      //   change active class at nav-link on Scrolling
      let $sections = $('section');
      $sections.each(function (i, el) {
        let top = $(el).offset().top - 120;
        let bottom = top + $(el).height();
        let scroll = $(window).scrollTop();
        let id = $(el).attr('id');
        if (scroll > top && scroll < bottom) {
          $('.navbar .nav-item a.active').removeClass('active');
          $('a[href="#' + id + '"]').addClass('active');
        }
      });

      // fixed nav if user scroll more or equal 500px
      let scroll = $(window).scrollTop();
      if (scroll >= 500) {
        $('.header_container').addClass('fixed');
      } else {
        $('.header_container').removeClass('fixed');
      }

      // handle scroll_to_top
      if (scroll >= 1000) {
        $('.scroll_to_top').addClass('active');
      } else {
        $('.scroll_to_top').removeClass('active');
      }
    })
    .scroll();
  // ----------- Handle scroll end here -----------

  // ----------- swiper slider start here -----------
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
      // when window width is >= 480px
      756: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      1100: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 3,
        spaceBetween: 00,
      },
    },
  });
  // ----------- swiper slider start here -----------
});
