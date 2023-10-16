$(document).ready(function () {
  //----------- preloader start here -----------
  setTimeout(() => {
    $('#pre-load').addClass('hide');
  },0);
  //----------- preloader end here -----------

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

  //----------- aos for animation start here -----------
  AOS.init({
    offset: 200, // offset (in px) from the original trigger point
    duration: 1200, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
  });
  //----------- aos for animation end here -----------

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
        $('.nav_bar_wrapper').addClass('fixed');
      } else {
        $('.nav_bar_wrapper').removeClass('fixed');
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

  // ----------- show mobile Navbar start here -----------===
  $('.nav-link.home_page').on('click', function () {
    $('ul.home_dropdown_list').addClass('active');
  });
  $('.nav-link.inner_page').on('click', function () {
    $('ul.inner_home_dropdown_list').addClass('active');
  });
  // ----------- show mobile Navbar end here -----------===

  // ----------- accordion toggle start here -----------
  // get child svg element  of a parent element
  const getSvg = (element) => {
    let result,
      next = $(element);
    while (next.children('svg').length === 0) {
      result = next;
      next = result.children();
    }
    return next.children('svg');
  };
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
    const svgElement = getSvg(element);
    $(svgElement).attr('aria-expanded', x);
  };
  // for toggle faq
  $('.accordion_title').click(function (event) {
    event.stopPropagation();
    const element = $(event.target);
    changeAriaExpanded(element);
  });
  // for toggle faq
  $('.accordion_click').click(function (event) {
    event.stopPropagation();
    const element = $(this).parents('.accordion_title');
    changeAriaExpanded(element);
  });
  // ----------- accordion toggle end here -----------

  // ----------- testimonial toggle start here -----------
  $('.commenter_container').click(function (event) {
    const element = $(event.target).parents('.commenter_container');
    $('.commenter_container').removeClass('active');
    $(element).addClass('active');
    let id = $(element).data('commenter');
    id = '#' + id;
    $('.testimonial_content .content').removeClass('active');
    $(id).addClass('active');
  });
  // ----------- testimonial toggle end here -----------
});
