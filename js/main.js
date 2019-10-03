// preloader 
$(window).on('load', function () {
    $('#load').delay(1000).fadeOut('slow');
});

// owl-carousel> on index.html
$('.clients').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<img src='images/left1.svg'>","<img src='images/right1.svg'>"],
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





