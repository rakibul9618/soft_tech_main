$(document).ready(function () {
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
});