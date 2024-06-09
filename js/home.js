$(document).ready(function () {
    $(".navbar-li").on("mouseover", function () {
        $(this).css("background-color","rgb(0, 150, 224)")
        $(this).find("img").css("display", "block")
        $(this).find("a").css("margin-top", "0px")
    });
    $(".navbar-li").on("mouseout", function () {
        $(this).css("background-color","")
        $(this).find("img").css("display", "none")
        $(this).find("a").css("margin-top", "18px")
    });
    $(window).resize(function(){
        var newWindowWidth = $(window).width();
        console.log(navbarLi);
        if (newWindowWidth <= 768) {
        } else {

        }
    });
    
    
});
