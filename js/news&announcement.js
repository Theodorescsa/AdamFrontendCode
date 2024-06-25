$(document).ready(function () {
    $(".News").hover(
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
            $("#dainganha").animate({
                opacity:1
            })
            
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
            $("#dainganha").animate({
                opacity:0
            })
        }
    );

        $.ajax({
            type: "GET",
            url: "/AdamFrontendCode/data/NewsApi.json",
            dataType: "json",
            success: function (data) {
                for (let index = 0; index < data.length; index++) {
                    const element = data[index];
                    console.log(typeof(element))
                    $(".News").prepend(`
                    <article>
                        <h2><a href="#">${element.title}</a></h2>
                        <p>${element.date} by Adam in <span style="color: rgb(92, 181, 245)">News</span> </p>
                        <p>${element.description}</p>
                        <button>Keep Reading</button>
                    </article>
                    `);
                }
            },
            error: function (xhr, status, error) {
                console.error("Lỗi khi tải dữ liệu:", error);
            }
        });
    });

