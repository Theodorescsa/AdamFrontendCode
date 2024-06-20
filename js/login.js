$(document).ready(function () {
    $(".login-form").animate({
        top:'130px',
        opacity:1
    },3000)
    $(".blood").animate({
        // top:'130px',
        opacity:1
    },3000)
    $(".tonhen").animate({
        // top:'130px',
        opacity:1
    },3000)
    // $("form").find("button").click(function(event){
    //     event.preventDefault(); 
    //     var api = 'http://127.0.0.1:5500/data/users.json';

    //     function handleCreateUser(data, callback) {
    //         var options = {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(data)
    //         };

    //         fetch(api, options)
    //             .then(function(response) {
    //                 return response.json(); 
    //             })
    //             .then(callback)
    //             .catch(function(error) {
    //                 console.error('Error:', error);
    //             });
    //     }

    //     function createUser() {
    //         var emailElement = document.querySelector("#email").value;
    //         var passwordElement = document.querySelector("#password").value;
    //         var objectData = {
    //             email: emailElement,
    //             password: passwordElement
    //         };
    //             // console.log("Đăng ký thành công", objectData);
    //             var json = JSON.stringify(objectData)
    //             console.log(typeof(json))

    //         // handleCreateUser(objectData, function(response) {
    //         //     console.log("Đăng ký thành công", response);
    //         // });
    //     }

    //     createUser();
    // });

});
