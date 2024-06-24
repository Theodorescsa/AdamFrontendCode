$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "/AdamFrontendCode/data/resources.json",
        dataType: "json",
        success: function (response) {
            console.log(response);
            for (let index = 0; index < response.length; index++) {
                const element = response[index];
                $(".book-list").prepend(`
                    <div class="book">
                        <img src="${element.image}" alt="" class='book-image'>
                        <p><a href="#">Click here</a> ${element.content}</p>
                    </div>
                    <div class="space"></div>
                `);
            }

            // Hiệu ứng di chuyển và thay đổi độ mờ
            $(".book").animate({
                left: "0px",
                opacity: 1
            }, 2000);

            // Thêm hiệu ứng thay đổi màu nền khi hover
            // $(".book").hover(
            //     function () {
            //         var $this = $(this);
            //         $this.data('interval', setInterval(function () {
            //             $this.css('background-color', getRandomColor());
            //         }, 500));
            //     },
            //     function () {
            //         clearInterval($(this).data('interval'));
            //         $(this).css('background-color', '');
            //     }
            // );
        },
        error: function (xhr, status, error) {
            console.error("Lỗi khi tải dữ liệu:", error);
        }
    });

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    $(".all-box").animate({
        right:"0px",
        opacity:1
    },2000)
});
