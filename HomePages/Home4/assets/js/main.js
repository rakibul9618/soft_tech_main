$(document).ready(function () {
  //----------- aos for animation start here -----------
  AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    duration: 1300, // values from 0 to 3000, with step 50ms
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

    // if navbar-toggle has not collapsed class hide the form
    if (!$('.navbar-toggler').hasClass('collapsed')) {
      $('.form').removeClass('active');
    }
  });
  // ----------- Handle clicks outside of an element start here -----------

  // ----------- show mobile Navbar start here -----------===
  $('.nav-link.home_page').on('click', function () {
    $('ul.home_dropdown_list').addClass('active');
  });
  $('.nav-link.inner_page').on('click', function () {
    $('ul.inner_home_dropdown_list').addClass('active');
  });
  // ----------- show mobile Navbar end here -----------===

  //----------- contact button toggle start here -----------
  $('.navbar .contact_btn').on('click', () => {
    $('.form').toggleClass('active');
  });
  $('.form .svg_holder').on('click', () => {
    $('.form').removeClass('active');
  });
  //----------- contact button toggle end here -----------

  //----------- handling pricing card hover -----------
  $('.price_card.basic').mouseenter(function () {
    $('.price_card.advance').removeClass('active');
  });

  $('.price_card.basic').mouseleave(function () {
    $('.price_card.advance').addClass('active');
  });
  $('.price_card.premium').mouseenter(function () {
    $('.price_card.advance').removeClass('active');
  });

  $('.price_card.premium').mouseleave(function () {
    $('.price_card.advance').addClass('active');
  });
  //----------- handling pricing card hover -----------

  // ----------- Handle scroll start here -----------
  $(window)
    .scroll(function () {
      //   change active class at nav-link on Scrolling
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

      // fixed nav
      let scroll = $(window).scrollTop();

      if (scroll >= 300) {
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

      // if scroll hide the form
      $('.form').removeClass('active');
    })
    .scroll();
  // ----------- Handle scroll end here -----------

  // ----------- accordion toggle start here -----------
  // function for change the aria-expanded value
  const changeAriaExpanded = (element) => {
    let id = $(element).data('target');
    id = '#' + id;
    let x = $(id).attr('aria-expanded');
    if (x == 'true') {
      x = 'false';
    } else {
      x = 'true';
    }
    $(id).attr('aria-expanded', x);
    $(element).attr('aria-expanded', x);
    // remove the shadow from accordion
    if (x === 'true') {
      $(element).parent('.accordion').removeClass('shadow_remove');
    } else {
      $(element).parent('.accordion').addClass('shadow_remove');
    }
  };

  $('.accordion_title').click(function (event) {
    event.stopPropagation();
    const element = $(event.target);
    changeAriaExpanded(element);
  });

  $('.accordion_click').click(function (event) {
    event.stopPropagation();
    const element = $(this).parents('.accordion_title');
    changeAriaExpanded(element);
  });

  // ----------- accordion toggle end here -----------

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
