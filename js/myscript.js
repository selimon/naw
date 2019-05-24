// show-carusel 
$(document).ready(function() {
    $('.slide-one').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        pagination: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
});
$(document).ready(function() {
    $('.slide-2').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        pagination: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
});
$(document).ready(function() {
    $('.slide-mobile').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        pagination: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
});

// scroll 
$(document).ready(function() {

});
// menu 
$(document).ready(function() {
    $('.navbar-toggler').click(function() {
        $('.navbar-mobile-menu').addClass('open');
    });
    $('.close').click(function() {
        $('.navbar-mobile-menu').removeClass('open');
    });
    $(".navbar-toggler").click(function() {
        $(".navbar-toggler").addClass('op');
    });
    $(".close").click(function() {
        $(".navbar-toggler").removeClass('op');
    });

});