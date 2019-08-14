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

// scrol-active 
jQuery(window).scroll(function() { 
    var the_top = jQuery(document).scrollTop();
    if (the_top > 0) {
        jQuery('.navbar').addClass('scroll');
    }
    else {
        jQuery('.navbar').removeClass('scroll');
    }
});
// owl-carousel
$('.carousel-1').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
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
});

// carousel-cafe 
$('.carousel-cafe').owlCarousel({
    nav:true,
    pagination:false,
    margin:10,
    loop:true,
    autoWidth:true,
    items:3,
});