$(document).ready(function () {
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
