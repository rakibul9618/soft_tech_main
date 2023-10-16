$(document).ready(function () {
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
});
