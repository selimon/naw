$(document).ready(function() {
    $('.video').each(function(i, elem) {
        headerVideo = new HeaderVideo({
            element: elem,
            media: '.video',
            playTrigger: '.header-video__play-trigger',
            closeTrigger: '.header-video__close-trigger'
        });
    });
});