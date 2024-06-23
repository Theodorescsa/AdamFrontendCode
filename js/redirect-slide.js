$(document).ready(function () {

    $("#redirect-background1").animate({
        left: "-700px",
        opacity:0

    }, 3200, function() {
        $(this).css("display", "none");
    });

    // Animate phần tử #redirect-background2
    $("#redirect-background2").animate({
        right: "-700px",
        opacity:0
    }, 3200, function() {
        $(this).css("display", "none");
    });
});