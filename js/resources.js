$(document).ready(function () {
    $(".book-image").click(function (e) { 
        console.log(this);
    });
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
        },
        error: function (xhr, status, error) {
            console.error("Lỗi khi tải dữ liệu:", error);
        }
    });
});
