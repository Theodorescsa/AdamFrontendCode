$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "../data/videos&photos.json",
        dataType: "json",
        success: function (data) {
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                console.log(typeof(element));
                
                $(".Video").prepend(`<iframe src="${element.link}" frameborder="0"></iframe>`);
            }
        },
        error: function (xhr, status, error) {
            console.error("Lỗi khi tải dữ liệu:", error);
        }
    });
});
$(document).ready(function () {
    
});