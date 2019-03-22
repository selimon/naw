// open-block

$(".align-self-start").click(function() {
	$(".closed").addClass('activ');
});

$(".align-self-start").click(function() {
	$(".align-self-start").hide('');
});
// closed-block
$(".closed").click(function() {
	$(".closed").removeClass('activ');
});

$(".closed").click(function() {
	$(".align-self-start").show('');
});
// border
$(".align-self-start").click(function() {
	$(".card").addClass('border-text');
});
$(".align-self-start").click(function() {
	$(".card-header").addClass('no-border');
});
$(".closed").click(function() {
	$(".card").addClass('no-border');
});

// no-2

$(".align-self-start-1").click(function() {
	$(".closed-1").addClass('activ');
});

$(".align-self-start-1").click(function() {
	$(".align-self-start-1").hide('');
});
// closed-block
$(".closed-1").click(function() {
	$(".closed-1").removeClass('activ');
});

$(".closed-1").click(function() {
	$(".align-self-start-1").show('');
});
// border
$(".align-self-start-1").click(function() {
	$(".card-1").addClass('border-text');
});
$(".align-self-start-1").click(function() {
	$(".card-header-1").addClass('no-border');
});
$(".closed-1").click(function() {
	$(".card-1").addClass('no-border');
});

// no-3

$(".align-self-start-2").click(function() {
	$(".closed-2").addClass('activ');
});

$(".align-self-start-2").click(function() {
	$(".align-self-start-2").hide('');
});
// closed-block
$(".closed-2").click(function() {
	$(".closed-2").removeClass('activ');
});

$(".closed-2").click(function() {
	$(".align-self-start-2").show('');
});
// border
$(".align-self-start-2").click(function() {
	$(".card-2").addClass('border-text');
});
$(".align-self-start-2").click(function() {
	$(".card-header-2").addClass('no-border');
});
$(".closed-2").click(function() {
	$(".card-2").addClass('no-border');
});
// no-4
$(".align-self-start-3").click(function() {
	$(".closed-3").addClass('activ');
});

$(".align-self-start-3").click(function() {
	$(".align-self-start-3").hide('');
});
// closed-block
$(".closed-3").click(function() {
	$(".closed-3").removeClass('activ');
});

$(".closed-3").click(function() {
	$(".align-self-start-3").show('');
});
// border
$(".align-self-start-3").click(function() {
	$(".card-3").addClass('border-text');
});
$(".align-self-start-3").click(function() {
	$(".card-header-3").addClass('no-border');
});
$(".closed-3").click(function() {
	$(".card-3").addClass('no-border');
});


// menu 

// $(".navbar-toggler").click(function(){   
//   $(this).next(".navbar-mobile-menu").toggle();
// });


    $(document).ready(function() {
        $('.navbar-toggler').click(function () {
            $('.navbar-mobile-menu').addClass('open');
        });
        $('.close').click(function () {
            $('.navbar-mobile-menu').removeClass('open');
        });
        $(".navbar-toggler").click(function() {
	$(".navbar-toggler").addClass('op');
});
$(".close").click(function() {
	$(".navbar-toggler").removeClass('op');
});

    });






