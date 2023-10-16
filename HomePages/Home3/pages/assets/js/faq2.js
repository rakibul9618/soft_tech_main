$(document).ready(function () {
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
});