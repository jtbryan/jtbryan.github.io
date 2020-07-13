$(window).scroll(function() {
    $.each($('.images-right img'), function() {
        if ( $(this).offset().top < ($(window).scrollTop() + $(window).height() + 100) ) {
            console.log("Hey")
        }
    })
})