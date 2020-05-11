$(document).ready(function() {

    $("#img_head1").click(function () {
        $('html, body').animate({
            scrollTop: $("#p1").offset().top
        }, 1100);
    });

    $("#img_head2").click(function () {
        $('html, body').animate({
            scrollTop: $("#p2").offset().top
        }, 1100);
    });

    $("#img_head3").click(function () {
        $('html, body').animate({
            scrollTop: $("#p3").offset().top
        }, 1100);
    });

});