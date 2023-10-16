$(document).ready(function () {

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

  // ----------- aos for animation start here -----------
  AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
  });
  // ----------- aos for animation end here -----------

  //----------- scroll_to_top start here -----------
  $('a.to_top').mPageScroll2id({ scrollSpeed: 900 });
  //----------- scroll_to_top end here -----------

  //----------- preloader start here -----------
  setTimeout(() => {
    $('#pre-load').addClass('hide');
  },0);
  //----------- preloader end here -----------

  // ----------- plugin for smooth scroll start here -----------
  $('a.nav-link').mPageScroll2id({ scrollSpeed: 1000, offset: 78 });
  // ----------- plugin for smooth scroll end here -----------

  //----------- Handle clicks outside of an element start here -----------
  $(document).click(function (event) {
    // collapsed navbar when click outside start here
    $('.navbar-collapse').collapse('hide');

    // hide the home_dropdown_list if click outside
    let home_dropdown_list = $('.nav-link.home_page');
    if (
      !home_dropdown_list.is(event.target) &&
      home_dropdown_list.has(event.target).length === 0
    ) {
      $('.home_dropdown_list').removeClass('active');
    }

    // hide the home_dropdown_list if click outside
    let inner_home_dropdown_list = $('.nav-link.inner_page');
    if (
      !inner_home_dropdown_list.is(event.target) &&
      inner_home_dropdown_list.has(event.target).length === 0
    ) {
      $('.inner_home_dropdown_list').removeClass('active');
    }
  });
  //----------- collapsed navbar when click outside end here -----------

  //----------- show mobile Navbar start here -----------===
  $('.nav-link.home_page').on('click', function () {
    $('ul.home_dropdown_list').addClass('active');
  });
  $('.nav-link.inner_page').on('click', function () {
    $('ul.inner_home_dropdown_list').addClass('active');
  });
  //----------- show mobile Navbar end here -----------===

  //----------- handle scroll start here -----------
  $(window)
    .scroll(function () {
      //   change active link in nav-link on Scrolling
      var $sections = $('section');
      $sections.each(function (i, el) {
        var top = $(el).offset().top - 120;
        var bottom = top + $(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if (scroll > top && scroll < bottom) {
          $('.navbar .nav-item a.active').removeClass('active');
          $('a[href="#' + id + '"]').addClass('active');
        }
      });

      // fixed nav after scroll 500px
      var scroll = $(window).scrollTop();

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
  //----------- handle scroll end here -----------

  //----------- Code for fire the counter when will in viewport -----------
  let once = true;

  let waypoint = new Waypoint({
    element: document.getElementById('waypoint'),
    handler: function (direction) {
      let speed = 2000;
      if (once) {
        // for play_store
        $('.play_store').countTo({
          from: 0,
          to: Number($('.play_store').text()),
          speed: speed,
          refreshInterval: 50,
        });

        // for download_counter
        $('.download_counter').countTo({
          from: 0,
          to: Number($('.download_counter').text()),
          speed: speed,
          refreshInterval: 50,
        });

        // for app_store_count
        $('.app_store_count').countTo({
          from: 0,
          to: Number($('.app_store_count').text()),
          speed: speed,
          refreshInterval: 50,
        });

        // for member_counter
        $('.happy_clients').countTo({
          from: 0,
          to: Number($('.happy_clients').text()),
          speed: speed,
          refreshInterval: 50,
        });
        once = false;
      }
    },
    offset: 'bottom-in-view',
  });

  //----------- swiper slider start here -----------
  let swiper = new Swiper('.swiper_slider_container', {
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
  //----------- swiper slider end here -----------
});
