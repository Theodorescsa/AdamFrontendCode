$(document).ready(function () {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 200) {
            $(".introduction").animate({
                top: '813px'
            }, 1200);
         }
    })
    $("#redirect-background1").animate({
        left: "-700px",
        opacity:0

    }, 5000, function() {
        $(this).css("display", "none");
    });

    // Animate phần tử #redirect-background2
    $("#redirect-background2").animate({
        right: "-700px",
        opacity:0
    }, 5000, function() {
        $(this).css("display", "none");
    });
});