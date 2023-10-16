$(document).ready(function () {
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
