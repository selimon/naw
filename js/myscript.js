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

// scroll 
$(document).ready(function() {
    $("a[rel='m_PageScroll2id']").mPageScroll2id({
        highlightClass: "highlighted-menu-item"
    });
});