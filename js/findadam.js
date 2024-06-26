$(document).ready(function () {
    $(document).ready(function () {
        $.ajax({
            type: "get",
            url: "/AdamFrontendCode/data/findadam.json",
            dataType: "json",
            success: function (response) {
                console.log(response);
                for (let index = 0; index < response.length; index++) {
                    const element = response[index];
                    $(".question-list").prepend(`
                        <div class="card-container">
                            <div class="card">
                                <p class="ques">${element.ques}</p>
                                <p class="ans">${element.ans}</p>
                            </div>
                        </div>
                    `);
                }
       
            },
            error: function (xhr, status, error) {
                console.error("Lỗi khi tải dữ liệu:", error);
            }
        });
    });
    
});