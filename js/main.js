// menu-icons
$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
});
jQuery(document).ready(function($) {
	$('.first-button').on('click', function(){
		$('.navbar').toggleClass('active');
	})
});
// owl-carousel
$('.carousel-1').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})