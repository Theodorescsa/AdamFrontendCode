$(document).ready(function () {
    var audio = new Audio('/AdamFrontendCode/images/bookssound.mp3');
    $('.books').animate({
        left:"19%",
        opacity:1
    },3200)
    $('.all-box').animate({
        marginRight:0,
        top:"-30px",
        opacity:1
    },3200)
    $('.books').find("a").hover(
        function () {
            $(this).find("img").animate({
                width: "33%",
            }, 300);
            audio.play();
        },
        function () {
            $(this).find("img").animate({
                width: "30%",
            }, 300);
            audio.pause();
            audio.currentTime = 0; 
        }
    );
});