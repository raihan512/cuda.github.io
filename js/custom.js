$(document).ready(function () {

    //Sticky Nav
    $('.js-sticky-plugin').waypoint(function (direction) {
        if (direction == 'down') {
            $('header').addClass('sticky-nav')
        } else {
            $('header').removeClass('sticky-nav')
        }
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('.topbtn').fadeIn();
        } else {
            $('.topbtn').fadeOut();
        }
    });

    $(".topbtn").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });


    new WOW().init();


});