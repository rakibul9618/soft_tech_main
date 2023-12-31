// custom counter

$.fn.countTo = function (options) {
  // merge the default plugin settings with the custom options
  options = $.extend({}, $.fn.countTo.defaults, options || {});

  // how many times to update the value, and how much to increment the value on each update
  let loops = Math.ceil(options.speed / options.refreshInterval),
    increment = (options.to - options.from) / loops;

  return $(this).each(function () {
    let _this = this,
      loopCount = 0,
      value = options.from,
      interval = setInterval(updateTimer, options.refreshInterval);

    function updateTimer() {
      value += increment;
      loopCount++;
      $(_this).html(value.toFixed(options.decimals));

      if (typeof options.onUpdate == 'function') {
        options.onUpdate.call(_this, value);
      }

      if (loopCount >= loops) {
        clearInterval(interval);
        value = options.to;

        if (typeof options.onComplete == 'function') {
          options.onComplete.call(_this, value);
        }
      }
    }
  });
};
