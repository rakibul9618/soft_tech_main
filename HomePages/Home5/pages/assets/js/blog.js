$(document).ready(function () {
  //========== aos for animation start here ==========
  AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
  });
  //========== aos for animation end here ==========

  //========== preloader start here ==========
  setTimeout(() => {
    $('#pre-load').addClass('hide');
  },0);
  //========== preloader end here ==========

  //========== Handle clicks outside of an element start here ==========
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

  // ========== show mobile Navbar start here =============
  $('.nav-link.home_page').on('click', function () {
    $('ul.home_dropdown_list').addClass('active');
  });
  $('.nav-link.inner_page').on('click', function () {
    $('ul.inner_home_dropdown_list').addClass('active');
  });
  // ========== show mobile Navbar end here =============

  // ========== Handle scroll start here ==========
  $(window)
    .scroll(function () {
      // fixed nav if user scroll more or equal 200px
      var scroll = $(window).scrollTop();

      if (scroll >= 200) {
        $('.fixed_navbar').addClass('fixed');
      } else {
        $('.fixed_navbar').removeClass('fixed');
      }
    })
    .scroll();
  // ========== Handle scroll end here ==========
});
