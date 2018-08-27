// Smooth scrolling using jQuery easing
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top - 56)
            }, 1000, "easeInOutExpo");
            return false;
        }
    }
});

//Activate Scrollspy
$('body').scrollspy({
    target: '#mainNav',
    offset: 57
});

//Make navbar transparent
var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
        $("#mainNav").removeClass("navbar-transparent");
    } else {
        $("#mainNav").addClass("navbar-transparent");
    }
};

$(window).scroll(navbarCollapse);

$('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
});
