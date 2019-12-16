jQuery(document).ready(function($) {
  new WOW().init()
});

jQuery(document).ready(function($) {
  $('.len').slick({
    dots: true,
  });
});

// preloader 
jQuery(document).ready(function($) {
  $(window).on('load', function() {
  $('#mdb-preloader').addClass('loaded');
});
});

