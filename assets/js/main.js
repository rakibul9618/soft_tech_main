$(document).ready(function () {
  //========== aos for animation start here ==========
  AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    duration: 1300, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
  });
  //========== aos for animation start here ==========

  //========== scroll_to_top start here ==========
  $('a.to_top').mPageScroll2id({ scrollSpeed: 900 });
  //========== scroll_to_top end here ==========

  //========== preloader start here ==========
  setTimeout(() => {
    $('#pre-load').addClass('hide');
  }, 0);
  //========== preloader end here ==========

  //========== Handle clicks outside of an element start here ==========
  $(document).click(function (event) {
    // Code for collapsed navbar when clicking outside of the navbar element
    $('.navbar-collapse').collapse('hide');

    // if navbar-toggle has not collapsed class hide the form
    if (!$('.navbar-toggler').hasClass('collapsed')) {
      $('.form').removeClass('active');
    }
  });
  // ========== Handle clicks outside of an element start here ==========

  // ========== contact button toggle ==========
  $('.navbar .contact_btn').on('click', () => {
    $('.form').toggleClass('active');
  });
  $('.form .svg_holder').on('click', () => {
    $('.form').removeClass('active');
  });
  // ========== contact button toggle ==========

  // ========== for handling pricing card hover ==========
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
  // ========== for handling pricing card hover ==========

  // ========== Handle scroll start here ==========
  $(window)
    .scroll(function () {
      //   change active class at nav-link on Scrolling
      let $sections = $('.page-section');
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

      // fixed nav
      let scroll = $(window).scrollTop();

      if (scroll >= 300) {
        $('.fixed_navbar ').addClass('fixed');
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
  // ========== Handle scroll start here ==========

  // ==== accordion toggle start here ====

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
  // ==== accordion toggle end here ====
});
