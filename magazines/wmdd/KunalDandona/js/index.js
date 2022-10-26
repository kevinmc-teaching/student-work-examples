// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 140) {
        $('.header-white').addClass('sticky');
    } else {
        $('.header-white').removeClass('sticky');
    }
});


// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.mobile-toggle').addClass('scree');
    } else {
        $('.mobile-toggle').removeClass('scree');
    }
});
// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.header-white').hasClass('open-nav')) {
        $('.header-white').removeClass('open-nav');
    } else {
        $('.header-white').addClass('open-nav');
    }
});

$('.header-white li a').click(function() {
    if ($('.header-white').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.header-white').removeClass('open-nav');
    }
});

// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});





