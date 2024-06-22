$(document).ready(function () {
    // Gắn sự kiện click cho các phần tử .book-image sử dụng phương pháp delegation
    $(document).on('click', '.book-image', function (e) { 
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
                    <div class="book" style="position: relative; left: -50px; opacity: 0;">
                        <img src="${element.image}" alt="" class='book-image'>
                        <p><a href="#">Click here</a> ${element.content}</p>
                    </div>
                    <div class="space"></div>
                `);
            }
            
            var books = document.querySelectorAll(".book");
            for (let i = 0; i < books.length; i++) {
                const element = books[i];
                $(element).animate({
                    left: "0px",
                    opacity: 1
                }, 2000);
            }
        },
        error: function (xhr, status, error) {
            console.error("Lỗi khi tải dữ liệu:", error);
        }
    });
});
