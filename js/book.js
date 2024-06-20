$(document).ready(function () {
    $(".books").find("a").hover(function () {
        $(this).find("img").animate({
            width: "33%",
        }, 300); 
        
            
        }, function () {
            $(this).find("img").animate({
                width: "30%",
            }, 300); 
                
        }
    );;
});