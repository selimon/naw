// menu-mobile
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





// show-carusel 
$(document).ready(function() {

    // product-gallery:
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");

    sync1.owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        smartSpeed: 1000,
        margin: 15,
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
    });

    sync1.on('changed.owl.carousel', function(event) {
        var current = event.item.index;
        sync2.trigger('to.owl.carousel', [current, 300, true]);
        sync2
            .find("a")
            .removeClass("synced")
            .eq(current)
            .addClass("synced");
    });

    sync2.on('click', 'a', function() {
        sync1.trigger('to.owl.carousel', [$(this).index(), 300, true]);
    });
    // end product-gallery

});
// owl-carusel 
$(document).ready(function() {
    $(".slide-1").owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        navigationText: ["", ""],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    })
});
// gallery-carousel
$(function() {
    $('.slide-2').owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        navigationText: ["", ""],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            700: {
                items: 2
            },
            1000: {
                items: 3
            },
            1500: {
                items: 4
            }
        }
    })
});
// raccal
$(function() {
    $('.slide-3').owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        navigationText: ["", ""],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            700: {
                items: 2
            },
            1000: {
                items: 3
            },
            1500: {
                items: 4
            }
        }
    })
});