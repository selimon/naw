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