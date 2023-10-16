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

    // hide the home_dropdown_list if click outside
    let inner_home_dropdown_list = $('.nav-link.inner_page');
    if (
      !inner_home_dropdown_list.is(event.target) &&
      inner_home_dropdown_list.has(event.target).length === 0
    ) {
      $('.inner_home_dropdown_list').removeClass('active');
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

  // ----------- Handle scroll start here -----------
  $(window)
    .scroll(function () {
      // change active class at nav-link on Scrolling
      var $sections = $('.page-section');
      $sections.each(function (i, el) {
        var top = $(el).offset().top - 120;
        var bottom = top + $(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if (scroll > top && scroll < bottom) {
          if ($('.navbar .nav-item a').hasClass('active')) {
            $('.navbar .nav-item a').removeClass('active');
          }
          $('a[href="#' + id + '"]').addClass('active');
        }
      });

      // fixed nav if user scroll more or equal 500px
      var scroll = $(window).scrollTop();

      if (scroll >= 300) {
        $('.fixed_navbar').addClass('fixed');
      } else {
        $('.fixed_navbar').removeClass('fixed');
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

  //----------- handling pricing card hover start here -----------
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
  //----------- handling pricing card hover end here -----------

  //----------- fire the counter when will in viewport start here -----------
  let once = true;

  let waypoint = new Waypoint({
    element: document.getElementById('waypoint'),
    handler: function (direction) {
      let speed = 2000;
      if (once) {
        // for product_counter
        $('.product_counter').countTo({
          from: 0,
          to: 150,
          speed: speed,
          refreshInterval: 50,
        });

        // for download_counter
        $('.download_counter').countTo({
          from: 0,
          to: 3400,
          speed: speed,
          refreshInterval: 50,
        });

        // for customer_counter
        $('.customer_counter').countTo({
          from: 0,
          to: 2500,
          speed: speed,
          refreshInterval: 50,
        });

        // for member_counter
        $('.member_counter').countTo({
          from: 0,
          to: 50,
          speed: speed,
          refreshInterval: 50,
        });
        once = false;
      }
    },
    offset: 'bottom-in-view',
  });
  //----------- fire the counter when will in viewport end here -----------

  //----------- Code for slick slider with customization start here -----------
  let $slider = $('.slick_slider');
  const helpers = {
    addZeros: function (n) {
      return n < 10 ? '0' + n : '' + n;
    },
  };

  if ($slider.length) {
    let currentSlide;
    let slidesCount;

    let updateSliderCounter = function (slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCount = slick.slideCount;
      $('.recent').text(helpers.addZeros(currentSlide));
      $('.total').text(helpers.addZeros(slidesCount));
    };

    $slider.on('init', function (event, slick) {
      updateSliderCounter(slick);
    });

    $slider.on('afterChange', function (event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    });

    $slider.slick({
      slidesToShow: 1,
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
    });
  }
  //----------- Code for slick slider with customization end here -----------
});
