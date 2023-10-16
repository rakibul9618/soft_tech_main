// Custom code for smooth scrolling with the help of PageScroll2id plugin

(function ($) {
  $(window).on('load', function () {
    // Function for RESIZE event fire only once it's FINISHED resizing
    function debouncer(func, timeout) {
      var timeoutID,
        timeout = timeout || 200;
      return function () {
        var scope = this,
          args = arguments;
        clearTimeout(timeoutID);
        timeoutID = setTimeout(function () {
          func.apply(scope, Array.prototype.slice.call(args));
        }, timeout);
      };
    }

    let offsetValue = 0;
    // handle offset value
    const handleOffsetValue = () => {
      let hasActive = $('.header_container').hasClass('fixed');
      let screenWith = $(window).width();

      // for mobile and fixed navbar
      if (screenWith < 1200 && hasActive) {
        offsetValue = 60;
      }
      // for mobile and not fixed navbar
      if (screenWith < 1200 && !hasActive) {
        offsetValue = 520;
      }
      // for web and  fixed navbar
      if (screenWith > 1200 && hasActive) {
        offsetValue = 35;
      }
      // for web and not  fixed navbar
      if (screenWith >= 1200 && !hasActive) {
        offsetValue = 90;
      }
      if (screenWith >= 1400 && !hasActive) {
        offsetValue = 120;
      }
    };
    handleOffsetValue();
    $('a.nav-link').mPageScroll2id({ scrollSpeed: 900, offset: offsetValue });

    $(window).resize(
      debouncer(function (e) {
        handleOffsetValue();
        $('a.nav-link').mPageScroll2id({
          scrollSpeed: 900,
          offset: offsetValue,
        });
      })
    );

    $('.navbar-toggler').on('click', function () {
      handleOffsetValue();
      $('a.nav-link').mPageScroll2id({ scrollSpeed: 900, offset: offsetValue });
    });

    $('a.nav-link').on('click', function () {
      handleOffsetValue();
      $('a.nav-link').mPageScroll2id({ scrollSpeed: 900, offset: offsetValue });
    });
  });
})(jQuery);
