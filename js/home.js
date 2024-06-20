$(document).ready(function () {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 200) {
            $(".introduction").animate({
                top: '813px'
            }, 1200);
         }
    })
});