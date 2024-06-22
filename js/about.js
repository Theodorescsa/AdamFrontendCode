$(document).ready(function () {
    $(".main-content").hover(
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

    $.ajax({
        type: "GET",
        url: "/AdamFrontendCode/data/testimonial.json",
        dataType: "json",
        success: function (response) {
            console.log(response);
            for (let index = 0; index < response.length; index++) {
                const element = response[index];
                $('.testimonials').prepend(
                    `<div class="testimonial">
                        <p><em>${element.content}</em></p>
                        <br>
                    </div>
                    <p class="author-testimonial">- ${element.author}</p>`
                );
            }
        },
        error: function (xhr, status, error) {
            console.error("Error loading data:", error);
        }
    });

    console.log("about.js");
});
