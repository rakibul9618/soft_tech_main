$(document).ready(function () {
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
