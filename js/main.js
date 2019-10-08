
// slick 
$('.sl').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,  
        autoplaySpeed: 3000,
        autoplay: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




