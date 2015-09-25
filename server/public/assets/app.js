/**
 * Created by gfrethem on 9/25/15.
 */

$(function () {

    $.ajax({
        url: '/getColors'
    }).done(function (response) {
        for (i = 0; i < response.length; i++) {
            console.log(response[i].color);
            var colorName = response[i].color;
            var colorHex = response[i].value;
            var $htmlToAppend = '<div class="' + colorName + '"><p>' + colorName + '</p></div>';
            $('main').append($htmlToAppend);
            $("main div:nth-child(" + (i + 1) + ")").css("background-color" , colorHex);
        }
    })
});