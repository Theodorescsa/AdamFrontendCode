$(document).ready(function () {
    $(".books-content").hover(
        function () {
            // Mouse over function
            $("#mattroi").animate({
                top: '250px',
                opacity: 0
            }, 2000);
            $("#mattrang").animate({
                top: "30px",
                opacity: 1
            }, 2000);
            $("#dammayleft").animate({
                left: "100px"
            }, 2000);
            $("#dammayright").animate({
                right: "100px"
            }, 2000);
            $(".banner").animate({
                backgroundColor: "rgb(7, 25, 80)"
            },2000);
            $("body").animate({
                backgroundColor:"#6E2C00"
            },2000)
        },
        function () {
            // Mouse out function
            $("#mattroi").animate({
                top: "30px",
                opacity: 1
            }, 2000);
            $("#mattrang").animate({
                top: "250px",
                opacity: 0
            }, 2000);
            $("#dammayleft").animate({
                left: "130px"
            }, 2000);
            $("#dammayright").animate({
                right: "130px"
            }, 2000);
            $(".banner").animate({
                backgroundColor: "#00A7E0"
            });
            $("body").animate({
                backgroundColor:"rgb(235, 237, 238)"
            },2000)
        }
    );

});
