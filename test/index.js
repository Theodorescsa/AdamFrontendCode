$(document).ready(function() {
    $('.box1').animate({
        top: '0',
        opacity: 1
    }, 1000)
    .promise()
    .then(function() {
        return $('.box2').animate({
            top: '0',
            opacity: 1
        }, 1000).promise();
    })
    .then(function() {
        return $('.box3').animate({
            top: '0',
            opacity: 1
        }, 1000).promise();
    });
});
