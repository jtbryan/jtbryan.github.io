$(document).ready(function() {
    $.each($('.images-right img'), function() {
        $(this).hide()
    })
})

$(window).scroll(function() {
    $.each($('.images-right img'), function() {
        if ( $(this).is(":hidden") && $(this).offset().top < ($(window).scrollTop() + $(window).height() + 100) ) {
            $(this).show("slide", { direction: "left" }, 1500)
        }
    })
})