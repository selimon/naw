// preloader 
$(window).on('load', function () {
    $('#load').delay(1000).fadeOut('slow');
});

// owl-carousel> on index.html
$('.clients').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["",""],
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





