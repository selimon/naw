jQuery(document).ready(function($) {
 $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});

// scroll 
// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();

//     if (scroll >= 370) {
//         $(".text-animated h1").addClass("active");
//     } else {
//         $(".text-animated h1").removeClass("active");
//     }
// });

// sideBar
// SideNav Button Initialization
$(".button-collapse").sideNav();
// SideNav Scrollbar Initialization
var sideNavScrollbar = document.querySelector('.custom-scrollbar');
var ps = new PerfectScrollbar(sideNavScrollbar);