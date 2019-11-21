    jQuery(document).ready(function($) {
          $('.carousel-1').owlCarousel({
        items:4,
        loop:false,
        center:true,
        margin:10,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
        responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
    });
    });


// gallery 
$(function () {
$("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});

// scroll 
$(window).scroll(function() {
var height = $(window).scrollTop();

     /*Если сделали скролл на 100px задаём новый класс для header*/
if(height > 100){
$('.navbar').addClass('activen');
} else{
     /*Если меньше 100px удаляем класс для header*/
$('.navbar').removeClass('activen');
}

});